---
layout: post
title: Docker WSL2 - failed to solve with frontend dockerfile.v0
tags: docker wsl
---

I was getting this error when I tried building an image:

```zsh
: failed to create LLB definition: rpc error: code = Unknown desc = error getting credentials - err: exit status 255, out: ``
```

Restarting WSL didn't help, but I found out that disabling the buildkit does fix it.


```zsh
DOCKER_BUILDKIT=0 docker build ...
```

See [SO answer](https://stackoverflow.com/a/66695181).
