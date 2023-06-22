---
layout: post
title: Unusual Case Statement Behavior
tags: ruby
---

TIL something weird.

I expected this to print "Integer", but it doesn't:

```ruby
mystery_class = Integer
case mystery_class
when Integer
  p "Integer"
else
  p "Unknown"
end
# => "Unknown"
```

This was weird because a similar example appears to behave differently:

```ruby
mystery_instance = 0
case mystery_instance
when 0
  p "Y"
else
  p "N"
end
# => "Y"
```

Apparently this is because []`case` uses `===` under the hood](https://stackoverflow.com/a/3908411) and `===` has kind of silly behavior when comparing classes.

For example:
```rb
Array === Array # false
0 === 0         # true
Class === Array # true
```

apparently `case` also works different with `ActiveRecord` classes, since they'll use `is_a?` instead which _might_ also behave differently??? 😱

Anyway, if you want to use `case` with classes for `ActiveRecord` object you need to do this:

```rb
mystery_class = User.last
case mystery_class
when User
  p "User"
else
  p "Unknown"
end
# => "User"
```



