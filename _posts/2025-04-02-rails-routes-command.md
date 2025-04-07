---
layout: post
title: `rails routes` command flags
tags: rails
---

TIL about helpful flags built-in to the `rails routes` task.


 <dl>
    <dt>
      <code>-g</code>
    </dt>
    <dd>
      <p>allows you to <u>grep</u> the output and filter for any routes that partially match the URL helper method name, the HTTP verb, or the URL path.</p>
      <hr>
      Example:
      <code style="display: block; white-space: pre;">
        rails routes -g new_comment
        rails routes -g POST
        rails routes -g admin
      </code>
    </dd>
    <dt>
      <code>-c</code>
    </dt>
    <dd>
      <p>allows you to filter output by controller name.</p>
      <hr>
      Example:
      <code style="display: block; white-space: pre;">
        rails routes -c users
        rails routes -c admin/users
        rails routes -c Posts
        rails routes -c Devise::Sessions
      </code>
    </dd>
    <dt>
      <code>--expanded</code>
    </dt>
    <dd>
      <p>makes the output easier to view in smaller terminals.</p>
      <hr>
      Example:
      <code style="display: block">rails routes --expanded</code>
    </dd>
    <dt>
      <code>--unused</code>
    </dt>
    <dd>
      <p>lists routes that are "unused" in your application. An "unused" route in Rails is a route that is defined in the <code>config/routes.rb</code> file but is not referenced by any controller action or view in your application</p>
      <hr>
      Example:
      <code style="display: block; white-space: pre;">rails routes --unused</code>
    </dd>
</dl> 

[Rails guide source](https://guides.rubyonrails.org/routing.html#searching-routes)
