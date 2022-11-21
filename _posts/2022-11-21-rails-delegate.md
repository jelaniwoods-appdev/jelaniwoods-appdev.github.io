---
layout: post
title: Rails Delegate
tags: rails
---

It's fairly common that I'm in a situation like this:


```rb
class Submission < ApplicationRecord
  belongs_to :student
end


class Student < ApplicationRecord
  has_many :submissions
end
```

And I need to do something like:

```rb
submission.student.full_name
```

which really isn't the _worst_. BUT there is a neat way you can Rails will let you call `full_name` directly on `submission`, using `delegate` (which I always forget about).

```rb
class Submission < ApplicationRecord
  belongs_to :student
  delegate :full_name, to: :student
end


class Student < ApplicationRecord
  has_many :submissions
end
```

and that makes it possible to do `submission.full_name` 
