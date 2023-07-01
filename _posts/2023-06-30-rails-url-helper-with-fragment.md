---
layout: post
title: URL helpers with fragment
tags: rails
---

When using a URL helper you can specify a fragment with the `anchor` option:

```rb
post_path(post.root, anchor: "post_#{post.id}")
# => "/posts/42#post_69
```

Previously, I was manually doing something similar like:

```rb
"#{post_path(post.root)}#post_#{post.id}"
# => "/posts/42#post_69
```
