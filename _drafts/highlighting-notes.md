---
layout: post
title: Highlighting Notes
tags: js
---


Medium does a cool thing like this when you highlight text of a post:

<img width="505" alt="Screen Shot 2022-03-21 at 11 23 07 AM" src="https://user-images.githubusercontent.com/17581658/159305866-a22e19fa-d61f-4ed0-8b01-ce8848b3fba1.png">

which gives you options to just highlight it or also add notes to the highlighed section.

<img width="1228" alt="medium-highlight-comment" src="https://user-images.githubusercontent.com/17581658/159311524-cac7d60c-a3e1-4453-9683-862f6b68d55b.png">

I want something like this in my app.

I need to figure out:

1. How to open a tooltip after text is selected
   - tooltip should contain links/buttons to "highlight" or "note-take"
   - tooltip should be positioned over the selected text
2. How to save the start index and selected text length when "highlight" is pressed.
   - use `mark` element to highlight
   - can toggle button to unmark
3. How to open a side panel to enter a note when "note-take" is pressed
   - also highlights selected text.


### Step 1: open a tooltip after text is selected

### Step 2: save selected text

### Step 3: open a side panel to enter a note

<div class=&quot;btn-group btn-group-lg&quot; role=&quot;group&quot; aria-label=&quot;Hightlight options&quot;><a class=&quot;btn btn-secondary&quot;><i class=&quot;fa-solid fa-highlighter&quot;></i></a><a class=&quot;btn btn-secondary&quot;><i class=&quot;fa-regular fa-comment&quot;></i></a></div>

<a href=&quot;&quot; class=&quot;tooltip-link&quot;><i class=&quot;fa-solid fa-highlighter&quot;></i></a><a href=&quot;&quot; class=&quot;tooltip-link&quot;><i class=&quot;fa-regular fa-comment&quot;></i></a>
