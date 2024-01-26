---
layout: post
title: Ruby Refinements
tags: ruby
---

Whenever I've had a predifined class and wanted to add/modify a method to it, I've always patched it or seen people make a [Concern](https://api.rubyonrails.org/classes/ActiveSupport/Concern.html) or something.

Apparently, Ruby has a built in thing for this exactly that is better called Refinements.

```rb
# Instead of a monkey patch

class String
  def to_a
    return [] if blank?

    str = dup
    str.slice!("[")
    str.slice!("]")
    str.split(",")
  end
end

# Do this instead


module StringToArray
  refine String do
    def to_a
      return [] if blank?

      str = dup
      str.slice!("[")
      str.slice!("]")
      str.split(",")
    end
  end
end

# Then in module or class that you use it
module ResourceCreator
  using StringToArray
end
```

- [Mastering refinements in Ruby](https://talaatmagdyx.medium.com/mastering-refinements-in-ruby-a-comprehensive-guide-to-safer-monkey-patching-531dfdb86608)
- [Ruby Refinements](https://www.alchemists.io/articles/ruby_refinements)
