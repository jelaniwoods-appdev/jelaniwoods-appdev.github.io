---
layout: post
title: Git Bisect
tags: git
---


Binary search through your git log to find where you hecked up and introduced a bug.

This command saved my life. I was trying to debug a really silly error that I couldn't debug with error messages because the issue happened because a method was added to a core class and the stacktrace was not helpful. `git bisect` was the ONLY thing that worked.

#### Video I watched:

<div class="iframe-container">
  <iframe border="0" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" src="https://www.youtube.com/embed/D7JJnLFOn4A?si=S6EvfXpZiN1rwuu_"></iframe>
</div>

#### Notes

```zsh
git bisect start
git bisect bad          # marks current commit doesn't work
git bisect good d0bf3f6 # specify latest commit that *does* work

# for each commit given, mark bad or good with
git bisect bad
git bisect good
# when done,
git bisect reset
```

Aside: embed videos in markdown with: https://markdown-videos.jorgenkh.no/
