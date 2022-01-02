---
layout: post
title: "Passing Variables to View Partials"
tags: rails
---

Sometimes the multiple ways that variables are passed to partials confuses me.

## locals

Using `locals`, whenever you render a partial you _must_ declare the same variable. If you attempt to render the same partial in a different view template **without** declaring the same local variable, you'll get an error.

```erb
<%= render :partial => 'form', :locals => { :post => @post } %>
```

## local_assigns

In cases where _sometimes_ you want to pass a variable to a partial but other times you don't, use `local_assigns`. Be aware that you will need to check for the existense of a variable in the partial before you use it.

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

## object

Every partial also has a local variable with the same name as the partial (minus the leading underscore). You can pass an object in to this local variable via the `:object` option:

```erb
<%= render partial: "customer", object: @new_customer %>
```

If you see the super shorthand syntax:

```erb
<%= render @customer %>
```

it uses `object: @customer`.

## Local Variables in Collections

These work essentially the same as with single object view partials. To customize the name of the local variable, use the `:as` option:

```erb
<%= render partial: "product", collection: @products, as: :item %>
```

You can also still create local variables using `locals` like before:

```erb
<%= render partial: "product", collection: @products,
           as: :item, locals: {title: "Products Page"} %>
```

Read more in [the Rails Guide](https://guides.rubyonrails.org/layouts_and_rendering.html).
