---
layout: post
title: Array#sample accepts an argument
tags: ruby array
---

TIL you can pass an argument to [`Array#sample`](https://apidock.com/rails/Array/sample) to return more than one random element.

```ruby
[1,2,3,4,5,6].sample     # => 4
[1,2,3,4,5,6].sample(3)  # => [2, 4, 5]
[1,2,3,4,5,6].sample(-3) # => ArgumentError: negative array size
           [].sample     # => nil
           [].sample(3)  # => []
```
