---
layout: post
title: Heroku - Copying Databases
tags: heroku
---

Heroku has the CLI command

```bash
heroku pg:copy SOURCE TARGET -a <value>
```

Which takes a source database and copies the contents to the target database. The problem is that apparently the only way I can specify the database of a specific app is to use the key word `DATABASE` for _both_ apps.

_copying production data to staging_

```bash
heroku pg:copy my-app-production::DATABASE DATABASE --app my-app-staging       
```

Doing this makes the confirmation message extremely confusing:


![css-float-docs-demo.gif](/public/images/heroku-cli-pg-copy.png)

It's not really clear from the warning message _which_ `DATABASE` will be deleted. You just kinda have to trust that it's not the source db. The docs seem out of date since they suggested using things like `CRIMSON` and `ORANGE` as identifiers for the database but it looks like Heroku stopped that naming convention for database add-ons, or it's optional and the app pipeline I was working wasn't using it.

Either way, this command does do what is should do and when it says "This command will remove everything from DATABASE" it means from the target db, not the source db.
