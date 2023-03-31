---
layout: post
title: Amending Git Commits
tags: git
---

So one way or another, you hecked up and now GitHub says one user authored the commit while a _different_ user committed the commit.

![git-commit-by-two-users.png](/public/images/git-commit-by-two-users.png)

How to fix?

The only way I know is to amend or rebase, which <u>will change commit Hashes</u> and mess up other users commit History.

If you don't care about that, proceed.

## Change Committer

Pass `GIT_COMMITTER_EMAIL` and `GIT_COMMITTER_NAME` to amend with email and GitHub username respectively.

```bash
GIT_COMMITTER_EMAIL=joemama@example.com GIT_COMMITTER_NAME=joemama git commit --amend --no-edit
```

## Change Author

Pass `GIT_AUTHOR_EMAIL` and `GIT_AUTHOR_NAME` to amend with email and namerespectively.

```bash
GIT_COMMITTER_EMAIL=joemama@example.com GIT_COMMITTER_NAME=joemama git commit --amend --no-edit
```

You can always find out the name by running `git show ...` on the commit that they made:

```bash
commit b65f3160e773ff2a18cc6e4993c278d50cedea94
Author: Joe Mama <joemama@example.com>
Date:   Thu Mar 2 11:55:40 2023 -0600

    Joe Mama's commit message 😎
```

## Change Date

Useful if you editing several commits at once and want the origninal dates to not get updated to the current time.

Prepend `GIT_COMMITTER_DATE` env variable to your `git ammend --no-edit` command

```bash
GIT_COMMITTER_DATE="Wed Mar 29 20:32:01 2023 -0600" git commit --amend --no-edit --date="Wed Mar 29 20:32 2023 -0600"
```

`--date` will set the author date, which should also be the same as the committer date.


### Amending a commit that's not the most recent commit

You'll need to rebase, `git rebase -i HEAD~3` to edit the third most recent commit.

```
pick 93ef79f Dynamically resize textarea
pick cca2dd2 Display full titles on menu link hover
pick a372bc3 Use JS autosize for query field
```

You'll want to choose `edit` for the commit you want to amend.

Note, if you only amend the author or committer for a past commit, all dates will be updated to current time.

If you want to keep the existing dates for these commits, it's helpful to keep another Terminal tab open with the current `git log` and choose  `edit` for each commit. Amend the author or committer for the desired commit and edit the date for the rest to be what the were before.
