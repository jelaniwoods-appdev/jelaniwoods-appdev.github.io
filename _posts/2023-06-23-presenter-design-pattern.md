---
layout: post
title: "Design Pattern: Presenter"
tags: rails design-patterns
---

## Philosophy
- Views are for <u>presentation</u>.
- There should be **no `ActiveRecord` queries** in views.
- _Most logic_ (`if` statements) should be excluded from views.

## Why Not Helpers?

Helpers are better to use if you have a global formatting method that you re-use in different views.

Things like:
- rendering markdown
- showing dates in a specific format
- removing specific words from text

Helpers are not great to overuse because they <u>lack organization</u> and are difficult to reuse across your app.

 
## Using Presenter Objects

- create `app/presenters`.
- name after model, `app/presenters/post_presenter.rb`.

```rb
class PostPresenter
  def initialize(post)
    @post = post
  end

  def title_without_forbidden_words
    @post.title.gsub("forbidden word", "")
  end

  def css_color
    @post.draft? ? "orange" : "green"
  end
end
```

```erb
<% presenter = PostPresenter.new(post) %>

<p>
  Post title: <%= presenter.title_without_forbidden_words %>

  <%= link_to "Read post", post, class: "w-75 p-3 text-#{presenter.css_color} border-#{presenter.css_color}" %>
</p>
```

This accomplishes a few things:
- it removes logic from views
- creates meaningful names for methods and logic
- allows logic to more easily be reused in other views and mailers


[Rails Design Patterns: Presenter & Service Objects](https://www.rubyguides.com/2019/09/rails-patterns-presenter-service/)
