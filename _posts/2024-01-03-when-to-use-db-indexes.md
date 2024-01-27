---
layout: post
title: When to use DB Indexes
tags: rails postgresql db
---

Indexes are something I don't really think about a lot, but know that they can have dramatic impacts on performance.



> A good rule of thumb is to create database indexes for everything that is referenced in the WHERE, HAVING and ORDER BY parts of your SQL queries. 
[— Igor Šarčević](https://semaphoreci.com/blog/2017/05/09/faster-rails-is-your-database-properly-indexed.html)


You should pretty much add indexes to all foreign keys.

> An index for a certain column/columns in a database works similarly to an index in a book. Instead of scanning every page of a book for all instances of a subject, we flip to the index, which is usually alphabetized in some fashion, and find the subject in there. The subject entry points us to the relevant pages of the book.
[— source](https://medium.com/@mera.stackhouse/what-are-indexes-and-how-to-add-them-to-your-rails-app-dc066d538771)

Another case is for uniqueness.

For example, if a users table has a uniqueness validation for combination email and username.

(i.e. there cannot be more than one user with the same email/username combo)

> Indexing the email attribute will allow our database to abort any save operation on a non-unique email, giving us a second line of defense against the wild users of your site. 

```rb
add_index :table_name, [:column_name_a, :column_name_b], unique: true
```

[source](https://stackoverflow.com/a/1449466)
