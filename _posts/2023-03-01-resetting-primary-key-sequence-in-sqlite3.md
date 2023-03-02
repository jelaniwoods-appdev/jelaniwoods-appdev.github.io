---
layout: post
title: Reset primary key sequence SQLite3
tags: rails db sqlite3
---

I was trying to reset the primary key sequence in a development Rails environment and realized the usual:

```rb
ActiveRecord::Base.connection.reset_pk_sequence!('users')
```

did _not_ work. (I think that is a postgres exclusive method)

I did some digging and found that executing this raw SQL did work:

```rb
ActiveRecord::Base.connection.execute("UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='table_name'")
```

I learned from [this post](https://9to5answer.com/sqlite-reset-primary-key-field).

