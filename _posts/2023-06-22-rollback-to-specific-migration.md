---
layout: post
title: Rails Rollback to Specific Migration
tags: rails db
---

Occassionally, when working on an app with a lot of active branches that affect the database I run into an issue where I can't rollback.

I'll get an error like this:

>rails aborted!
>ActiveRecord::UnknownMigrationVersionError: 
>
>No migration with version number 20230620205505.

This usually happens when I switch to another branch and I want to rollback a change I made to update/remove the migration. I assume the migration referenced in database doesn't exist on the current branch.

If this happens, you can roll back to the last migration on the branch with:

```bash
rails db:migrate:down VERSION=n
```

where `n` is the timestamp from the latest migration (something like `20230607135355`).

This is only applicable for non-sqlite3 databases, since the database doesn't live in the project directory.

- [Rails Guide](https://edgeguides.rubyonrails.org/active_record_migrations.html#running-specific-migrations)
- [SO answer](https://stackoverflow.com/a/6635407)
