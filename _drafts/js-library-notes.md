---
layout: post
title: >
  JS Library Notes
tags: javascript
---

Main library should be defined as a function:

```js
function LibObjectName() {
    const OBJ_NAME = {
        "methodName": (parameters) => {
           // Code goes here
        }
    };
    return OBJ_NAME;
};

// Make a constant of the library name with the library object.
const LibName = new LibObjectName();

// The library name constant can be put in or out of the library script. Some libraries use it inside the library script and some of the libraries need it out of the library script. When it is out, it is like an API Key. 
```

like this:
```js
function HelloWorld() {
    const HW_OBJ = {
        "sayMessage": () => {
                alert("Hello World!")
        }
    };
    return HW_OBJ;
};
const helloworld = new HelloWorld();
helloworld.sayMessage();

```

- https://dev.to/js-libraries/how-to-create-a-library-and-use-it-in-javascript-k30
- https://codezup.com/javascript-library-creation-guide/
- https://dev.to/101arrowz/creating-a-modern-js-library-writing-good-code-170a
- https://github.com/yanhaijing/jslib-base
