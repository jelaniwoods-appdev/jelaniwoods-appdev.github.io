---
layout: post
title: Inline Editing with Hotwire
tags: rails hotwire turbo
---

- Wrap turbo frame tag around content that should be editable
	-  provide dom_id for object, prefixed with field
	- wrap turbo frame around field in edit form with same id as before
- Add link_to inside turbo frame, direct to edit route that renders the edit form
---

### Go back from "edit mode" to normal view

- in the turbo frame for the form field, add link_to to the show page or which ever was the starting page

- In turbo frame for form field, add form.button "Save field"
- in show, (starting page), add form_with *around* the turbo frame for the field
	- from should have the data: {turbo_frame: FRAME_ID }, attribute to prevent full page refresh

- hide the buttons/links with css on the edit/form page but display on every other page

https://gorails.com/episodes/inline-editing-turbo-frames

## Inline update

- use the frame id on the show page 
