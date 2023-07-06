---
layout: post
title: Active Record methods for associations
tags: db
---

I learned about a few useful methods that I hadn't heard of before.

## `reflect_on_association`

[This method](https://api.rubyonrails.org/classes/ActiveRecord/Reflection/ClassMethods.html) allows you to check if an association exists, <u>without</u> making a database query.

- Will return `nil` if no associated records are found.
- Will return an `AggregateReflection` object if records are found.

```rb
class Post < ActiveRecord::Base
  has_many :upvotes
end
class Upvote < ActiveRecord::Base
  belongs_to :post
end

Post.reflect_on_association(:upvotes)
```

## `extract_associated`

Useful if you need to get all associated objects from an `ActiveRecord::Relation`.

Assuming:
```rb
class Author < ActiveRecord::Base
  has_many :books
end

class Book < ActiveRecord::Base
  belongs_to :author
end
```

and we want to get all the books from a list of authors...

Normally, my first thought we be to do something like this:

```rb
Author.all.includes(:books).map(&:books) 
```

but there is a more readable way to do this with `extract_associated`.

```rb
Author.all.extract_associated(:books)
```

which actually does [something similar](https://api.rubyonrails.org/classes/ActiveRecord/QueryMethods.html#method-i-extract_associated), so the benefit is mostly the readability.

## `missing`

Ever need to find records with no associated records?

For example:

```rb
class City < ActiveRecord::Base
  has_many :photos
end

class Photo < ActiveRecord::Base
  belongs_to :city
end
```

if I want to find all cities that have no photos, previously, I thought you needed to do something like this:

```rb
City.includes(:photos).where(photos: { city_id: nil })
```

[`missing` does this](https://blog.saeloun.com/2020/01/21/rails-6-1-adds-query-method-missing-to-find-orphan-records/).

```rb
City.where.missing(:photos)
```

## `associated`

New in Rails 7. Sort of the inverse of `missing`, but `associated` [checks for the presence of an association](https://blog.saeloun.com/2021/02/15/rails-7-adds-query-method-associated-to-check-association-presence/).

Finding all the cities that have photos is as simple as:

```rb
City.where.associated(:photos)
```


