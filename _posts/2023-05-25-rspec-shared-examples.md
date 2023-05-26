---
layout: post
title: Better Rspec tests with shared examples
tags: rspec
---

TIL about shared examples in Rspec!

They're primarily good for reducing duplicate code.

They work well with `subject` and `let`.

This is a made up example:

```rb
describe "Todos" do
  context 'when on the edit page' do
    subject { Todo.create(title: "Day 1", body: "Hello, World!") }
    let(:path) { edit_todo_path(subject) }

    it "displays form" do
      visit path

      expect(page).to have_css("form")
    end
    
    it "redirects after submitting update form" do
      visit path

      click_on "Update #{subject.class}"

      expect(page.current_url).not_to be path
    end
  end
end
```

You could write _very_ similar tests for other models.

With shared examples you could do something like this:

```rb
shared_examples_for "Editing a resource" do
  it "displays form" do
    visit path
    expect(page).to have_css("form")
  end

  it "redirects after submitting update form" do
    visit path
    click_on "Update #{subject.class}"
    expect(page.current_url).not_to be path
  end
end

describe "Todos" do
  context 'when on the edit page' do
    subject { Todo.create(title: "Day 1", body: "Hello, World!") }
    let(:path) { edit_todo_path(subject) }

    it_behaves_like "Editing a resource"
  end
end
```

Then in the future when you need a test that does something similar, you can make/reference a a shared example group.

- [Shared Examples](https://rspec.rubystyle.guide/#shared-examples)
- [RSpec(Pt. 2): Hooks, Subject, Shared Examples](https://dev.to/ethanmgustafson/rspec-hooks-subject-shared-examples-h19)
