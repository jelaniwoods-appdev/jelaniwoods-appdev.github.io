---
layout: post
title: Skip Git Commit Hooks
tags: git
---

Occasionally I find myself in situations where I want to make a commit, but I don't want git commit hooks to run because it will format the code and I don't want it to.

(I plan to _eventually_ format the code, but sometimes, especially when the commit is a work in progress, I don't want to format anything since I haven't solidified what I want to do yet)

The easiest way to do this is to use the `--no-verify` flag.

```bash
git commit -m "WIP" --no-verify
```

— [Soure](https://stackoverflow.com/questions/7230820/skip-git-commit-hooks)
