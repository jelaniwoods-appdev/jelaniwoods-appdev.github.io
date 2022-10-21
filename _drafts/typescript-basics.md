---
layout: post
title: Typescript basics
tags: typescript js ts
---


> Typescript exists to improve the JavaScript experience

> Typescript is a superset of JavaScript

> Typescript compiles to JavaScript

### Main Benefits

- Static Types
- Organizational Support
- Tooling

### Static types

Vanilla JavaScript is flexible about defining variables.

One variable could start with a String value at the beginning of the program could change to an Integer, Array, Function, `null`, or even `undefined` (which is confusingly _different_ than `null`).

This can cause unpredictable behaviour.

Static types are what C++ and Java have by default. You have to specify a data type that for all variables and arguments. Once a data type has been set, you cannot change it or provide different arguments. Incorrect types will cause compile error.

### Organizational Tools

Things like Classes!

Yes JS has classes since (ES5), but ts classes are better in that they can be compiled to older versions of JS that don't support ES5 classses.

Also namespaces and modules are added, allowing us to easier scope our code.

Interfaces too, which are a declaration of expected methods and properties, but w/out implementation.

### Tooling

Things like IDE's experience, testing, and debugging are better.
- static type analysis
- many instant errors
- detect unused data/unreachable code
- soure maps (debug directly in typescript)


tsconfig.json
