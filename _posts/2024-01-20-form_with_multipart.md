---
layout: post
title: form_with multipart data
tags: rails
---

This whole time I thought I needed to do this for supporting files in forms:

```rb
  form_with(model: attachment, html: { enctype: "multipart/form-data"} ) 
```
 
but it turns out you can actually just do this:

```rb
form_with(model: attachment, multipart: true)
```

which is cleaner and easier to remember.
