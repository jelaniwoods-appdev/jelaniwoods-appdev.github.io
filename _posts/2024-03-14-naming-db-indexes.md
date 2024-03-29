---
layout: post
title: Naming DB indexes
tags: rails db postgres
---

Rails 7 apps have a limit on autogenerated index names of 63 characters.

```bash
ArgumentError: Index name
'index_codeblock_submission_on_user_id_and_lesson_id_and_block_id_and_internal_submission_id' on table
'codeblock_submission' is too long; the limit is 63 characters.
```

To work around this you can choose a name to use instead of the autogenerated one.

update the  migration with the `name` key and value:

```rb
    add_index :codeblock_submissions, [:user_id, :lesson_id, :block_id, :internal_submission_id], unique: true, name: "index_codeblock_submissions_on_block_lesson_user_submission"
  end
```

[Source](https://blog.saeloun.com/2023/10/24/rails-index-name-too-long/)
