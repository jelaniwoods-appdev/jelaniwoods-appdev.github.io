---
layout: post
title: Serving static files with Rack
tags: ruby rack
---

You can use a `Proc` like this to serve static files.

```ruby
# config.ru
map '/' do
  path = '/index.html'
  default_homepage = File.read(path)
  app = proc do |env|
    [200, { 'Content-Type' => 'text/html' }, [default_homepage]]
    # last argument needs to be an array
  end
  run app
end
```

The `proc` keyword is the equivalent to `Proc.new`.
