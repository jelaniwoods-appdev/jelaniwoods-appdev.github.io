---
layout: post
title: Moving hidden files in the command line
tags: bash
---

I was attempting to move all files from a subfolder into the root folder in the command line and ran:

```bash
mv subfolder/* .
```

but to my surprise, files beginning with `.`, like `.gitignore`, did _not_ move.

It turns out hidden files are exlcuded by default I guess?

If you want to move dotfiles, you can do this instead:

```bash
mv subfolder/{,.}* .
```

[See this answer](https://unix.stackexchange.com/a/50490).
