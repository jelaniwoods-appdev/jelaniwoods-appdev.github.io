---
layout: post
title: CSS Print Breakpoints
tags: css
---

I ran into an issue creating a printable cheatsheet with code blocks. Sometimes code blocks would get cut off on different pages, which made the cheatsheet hard to read.

I was informed that you can prevent this behavior using [the CSS `page-break-inside` property](https://www.w3schools.com/cssref/pr_print_pagebi.php).

Simply adding:

```html
<style>
  @media print {
    .code-block, .row {
      page-break-inside: avoid;
    }
  }
</style>
```

to my HTML prevented the page breaks from happening where I didn't want them 🙂
