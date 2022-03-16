---
layout: post
title: Rails Serialize a column
---

I never used [`serialize`](https://apidock.com/rails/ActiveRecord/Base/serialize/class) before since Postgres supports `:json` and `:jsonb` columns which are better. But it's helpful that I can still store Hash data in the sqlite db. Especially if my students aren't using Postgres but want to do complicated stuff like OAuth.
