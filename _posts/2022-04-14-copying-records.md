---
layout: post
title: Copying records
tags: rails activerecord
---

When I was setting up Ruby assignment[^1] this week, I wanted to copy all of the exercises and specs from last quarter and associate them with the assignment for this quarter.

I came up with a pretty nice solution using `.attributes` which returns a Hash of the existing attributes for a record that I can pass straight to the `.create` method.

```ruby
new_assignment = Assignment.find(...)
old_assignment = Assignment.find(...)
old_assignment.exercises.each do |e|
  copy = e.attributes
  new_e = new_assignment.exercises.create(copy)
end
```

BUT this `.attributes` includes the `id` too, so this doesn't work yet. You can exclude key/value pairs from a Hash using `.except`. You can provide multiple keys at the same time as well.

```ruby
new_assignment = Assignment.find(...)
old_assignment = Assignment.find(...)
old_assignment.exercises.each do |e|
  copy = e.attributes.except("created_at", "updated_at", "id")
  new_e = new_assignment.exercises.create(copy)
end
```

[^1]: This "assignment" is a Rails app, where an "assignment" is a model, and each assignment has many exercises, and each exercise has many specs.
