/**
 * The function generates an RSS feed by combining and sorting blog posts and projects, filtering out
 * drafts, and formatting the data accordingly.
 * @param {Context} context - The `context` parameter in the `GET` function is an object with a `site`
 * property. This property is used to provide additional context or information to the function when
 * generating the RSS feed.
 * @returns The code is returning an RSS feed generated using the `rss` function from the
 * `@astrojs/rss` package. The feed includes items from the blog and projects collections, filtered to
 * exclude any drafts. The items are sorted by date in descending order. The RSS feed includes the
 * title, description, and items (title, description, publication date, and link) for each blog post
 * and project.
 */
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { HOME } from "@consts";

type Context = {
  site: string
}

export async function GET(context: Context) {
  const blog = (await getCollection("blog"))
    .filter(post => !post.data.draft);

  const projects = (await getCollection("projects"))
    .filter(project => !project.data.draft);

  const items = [...blog, ...projects]
    .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());

  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.slug}/`,
    })),
  });
}
