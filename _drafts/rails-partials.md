---
layout: post
title: "Ruby on Rails: View Partials"
tags: rails
---

### Passing Variables

#### locals

```erb
<%= render :partial => 'form', locals: { post: @post } %>
```

#### local_assigns

```erb
<%= render article, full: true %>
<!-- in template -->
<h2><%= article.title %></h2>

<% if local_assigns[:full] %>
  <%= simple_format article.body %>
<% else %>
  <%= truncate article.body %>
<% end %>
```
