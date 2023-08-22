---
layout: post
title: Ruby Array Intersection
tags: ruby
---

TIL you can find the intersection of two Arrays easily with `&`.

```rb
a = [18, 22, 33, 4, 5, 6]

b = [5, 4, 22, 1, 88, 9]

c = [18, 22, 33, 40, 50, 6]

# a intersecting b
puts "intersection of a and b : #{a & b}\n\n"
# => intersection of a and b : [22, 4, 5]

# a intersecting c
puts "intersection of a and c : #{a & c}\n\n"
# =>intersection of a and c : [18, 22, 33, 6]

# b intersecting c
puts "intersection of b and c : #{b & c}\n\n"
# => intersection of b and c : [22]
```

— [Source](https://www.geeksforgeeks.org/ruby-array-intersection-operation/#)
