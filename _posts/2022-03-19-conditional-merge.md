---
layout: post
title: Conditional Hash#merge
tags: ruby hash
---

I was in a situation where a key may or may not be present in a Hash (`options`), and I needed to do two different, but very similar things. The general `if`/`else` seemed like too much:

```ruby
if options[:uniqueness]
  if options[:scope]
    validates attribute, :uniqueness => { :case_sensitive => true, :scope => options[:scope] }
  else
    validates attribute, :uniqueness => { :case_sensitive => true }
  end
  # ...
end
```

So I found a nice one-liner that cleaned it up!

```ruby
if options[:uniqueness]
  uniqueness_options = {
    :case_sensitive => true,
    :scope => ( options[:scope] if options.has_key?(:scope))
  }.compact

  validates attribute, :uniqueness => uniqueness_options
end
```

Another approach was to use `tap` (which I need to lookup more about)

```ruby
{ :a => 'animal' }.tap { |hash|
  hash[:b] = 'banana' if true
}
```

which maybe is better since it supports earlier Ruby version and is still very readable.

- [Read more](https://stackoverflow.com/questions/5750770/conditional-key-value-in-a-ruby-hash)
