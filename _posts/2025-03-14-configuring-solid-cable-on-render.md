---
layout: post
title: Configuring Solid Cable on Render
tags: rails deployment
---

Rails 8 added a lot of new features. **Solid Cable** comes as a drop in replacement to **Action Cable** and, by default, it uses the database instead of requiring Redis.

I generated a new app (with Postgres), added some tables and turbo streams and then deployed to [Render](https://render.com/). The deployment failed!

> Exited with status 1 while building your code.

![ArgumentError: No unique index found for id (ArgumentError)
          raise ArgumentError, "No unique index found for #{name_or_columns}"](/public/images/solid-cable-render-deploy-failure.png)

This error message wasn't very clear! But the line of code pointed to a `broadcasts_to` in my `Comment` model, so I was pretty sure it was Solid Cable related.

```rb
after_create_commit -> { broadcast_before_to "...", target: "...", partial: "..." }
```


I learned that Solid Cable runs in a separate database, which I assume Render didn't like. I followed [the instructions in the Solid Cable README](https://github.com/rails/solid_cable?tab=readme-ov-file#single-database-configuration) to configure Solid Cable to work with a single database and I was able to deploy to Render!

1. Copy the contents of `db/cable_schema.rb` into a normal migration and delete `db/cable_schema.rb`
2. Remove connects_to from `config/cable.yml`
3. `bin/rails db:migrate`

🎉
