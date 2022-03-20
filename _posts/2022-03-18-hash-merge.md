---
layout: post
title: Hash#merge and setting defaults
---

When writing a method with an options Hash, how best do you specify default key/value pairs that can be safely overwritten?

Well, if it's just one this should be fine:

```ruby
def foo(k: 1)
  p k
end

foo({ k: 'apple'})
```

but if you're dealing with a **double spat**, `Hash#merge` is your friend.

```ruby
# Can also use a constant here to help document what the defaults are
DEFAULTS = {
  fruit: 'apple',
  color: 'lavendar',
  feels: 'sleepy'
}

def blog(**options)
  options = DEFAULT.merge(options)
  # ...
end
```

`merge` works like this:

```ruby
h1 = { "a" => 100, "b" => 200 }
h2 = { "b" => 254, "c" => 300 }
h1.merge(h2)   #=> {"a"=>100, "b"=>254, "c"=>300}
h1             #=> {"a"=>100, "b"=>200}
```

prioritizing the values in the Hash argument.

There's also apparently [`Hash#reverse_merge` in Rails](https://apidock.com/rails/Hash/reverse_merge), which handles duplicate values the other way— prioritizing the entries in the Hash calling the method.

```ruby
h1 = { "a" => 100, "b" => 200 }
h2 = { "b" => 254, "c" => 300 }
h1.reverse_merge(h2)   # => {"b"=>200, "c"=>300, "a"=>100} 
```

- [Read more](https://rubyquicktips.com/post/5186906190/merge-or-reversemerge-a-hash)
- [Read more](https://codereview.stackexchange.com/questions/39017/setting-defaults-in-a-ruby-options-hash)
