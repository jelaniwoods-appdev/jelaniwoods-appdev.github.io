---
layout: post
title: Git Bisect
tags: git
---


Binary search through your git log to find where you hecked up and introduced a bug.

- https://www.youtube.com/watch?v=D7JJnLFOn4A


```
g bisect start
g bisect bad # say current commit doesn't work
g bisect good d0bf3f6 # specify latest commit that *does* work
# for each commit given, mark bad or good with
g bisect bad
g bisect good
# when done,
g bisect reset
```
