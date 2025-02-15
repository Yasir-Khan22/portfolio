---
title: "Cheatsheet for Vim"
description: "Basic commands for vim users."
date: "October 22, 2023"
draft: false
---

### Modes

- Normal Mode: Default mode for navigation and commands (`Esc`)
- Insert Mode: `i`, `I`, `a`, `A` (exit with `Esc`)
- Visual Mode: `v` for (character), `V` for (line), `Ctrl+v` for (block)
- Command Mode: `:`

### Navigation

- Basic: `h` (left), `j` (down), `k` (up), `l` (right)
- Words: `w` (next word), `b` (previous word), `e` (end of word)
- Lines: `0` (start), `^` (first non-whitespace), `$` (end)
- Scrolling: `Ctrl+d` (down), `Ctrl+u` (up)
- File: `gg` (top), `G` (bottom)

### Actions

- `d`: Delete
- `c`: Change (delete and enter Insert Mode)
- `y`: Yank (copy)
- `v`: Visual selection

### Motions

- `i`: Inside
- `a`: Around

### Objects

- `w`: Word
- `p`: Paragraph
- `t`: Tag
- `q`: Quote (or `'`, `"`, ```)
- `b`: Bracket (or `(`, `{`, `[`, `<`)

### Examples

- `dw`: Delete Word
- `cw`: Change Word
- `yy`: Copy Entire Line
- `y$`: Copy To End Of Line
- `diq`: Delete Inside Quotes
- `ca{`, `ci(`: Change Around Braces
- `yap`: Yank Paragraph
- `dab`: Delete Around Brackets
- `yiw`: Yank Inside Word
- `ciw`: Change Inside Word
- `vit`: Visual Selection Inside Tag
- `ct"`: Change To Next `"` (leaving the `"`)
- `df|`: Delete to Next `|` (including the `|`)
- `ea`: Insert cursor end of the word.
- `$`: Scroll to Right.
- `^`: Scroll to Left.
- `Ctrl+L`: Scrolling for Downward/bottom.
- `Ctrl+H`: Scroll to Upward/Top.
- `.`: Repeat Last Search.
