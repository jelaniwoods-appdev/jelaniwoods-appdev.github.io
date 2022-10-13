---
layout: post
title: Using a path with `git stash`
tags: git
---

Oftentimes when I'm experimenting in a project I make a bunch of changes and then want to **keep** some of them (without committing) but _undo_ the rest. I would try to stage the changes that I didn't want and them stash them like this:

```bash
git add path/to/undesired/changes
git stash
```

But this would stash _everything_, including the changes I wanted to keep.

I tried being more specific with stash bu providing a path, but no dice.

```bash
$ git stash path/to/undesired/changes
fatal: unknown subcommand: path/to/undesired/changes
```

I think in an older version of Git this used to work, but I found the updated command today: `git stash push _path_ --keep-index`

```bash
$ git stash push path/to/undesired/changes --keep-index
Saved working directory and index state WIP on _branch_name_: 32dbc82 .
```

Thanks to [this post](https://dev.to/gianpaj/comment/1467o).
