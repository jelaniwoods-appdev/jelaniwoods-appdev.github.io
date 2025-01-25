---
layout: post
title: Markdown footnotes
tags: markdown
---

I forget this all the time.

just do [this](https://stackoverflow.com/a/48250535):

```md
Some text[^1].

Some other text[^2].

The identifier in the square brackets does not have to be numeric[^my_footnote].

[^1]: Some footnote.
[^2]: Other footnote.

[^my_footnote]: This also works fine.
```

This is not supported in GitHub repository code.
