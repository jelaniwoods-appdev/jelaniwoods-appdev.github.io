---
layout: post
title: How to reconfigure a Rails app to not use a database
tags: rails db heroku
---

Since the removal of the free Heroku plan, most of my throw-away prototype apps that I deployed have been shutdown. However, there are a few of them that don't use a database that I expected to continue to work when Heroku shut off the database but didn't.

I did a little research and found that you can reconfigure a Rails app to not use a database. This allowed my apps to run purely on the new Eco dynos, without paying for the database connection.

[The steps I followed](https://stackoverflow.com/a/26065959) to reconfigure my Rails 6 app are as follows:

Comment out/remove the following:
```js
// package.json
"@rails/activestorage": "^6.0.0",

// app/javascript/packs/application.js
require("@rails/activestorage").start()
```

```bash
# bin/setup
system! 'bin/rails db:prepare'
```

```rb
# config/environments/development.rb
config.active_storage.service = :local # For Rails >= 5.2
config.active_record.migration_error = :page_load
config.active_record.verbose_query_logs = true

# config/environments/test.rb
config.active_storage.service = :test # For Rails >= 5.2

# config/environments/production.rb
config.active_storage.service = :local # For Rails >= 5.2
config.active_record.dump_schema_after_migration = false

# spec/rails_helper.rb
ActiveRecord::Migration.maintain_test_schema!

# test/test_helper.rb
fixtures :all # In case you're using fixtures

# Only for Rails >= 5.0
#config/initializers/new_framework_defaults.rb
Rails.application.config.active_record.belongs_to_required_by_default = true
```

Delete `app/models/application_record.rb`.

---

You can run your [Rails app in production mode locally](https://thoughtfulapps.com/articles/rails/rails-in-production-mode-locally) to make sure there are no errors.

```bash
RAILS_ENV=production rails assets:clobber
RAILS_ENV=production rails webpacker:compile # assuming you have webpacker
RAILS_SERVE_STATIC_FILES=1 RAILS_ENV=production rails s
```

If there are no errors (with the exception of missing Heroku `ENV` keys), then you should be good to go!

If you are creating a _new_ Rails app from scratch and **don't** want to use a database, you can run `rails new` with the `--skip-active-record` flag.
