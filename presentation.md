<!-- background: #f1c40f -->
<!-- color: #2c3e50 -->
<!-- font: tradegothic -->

# **Papier: A list paper app**

- M Haidar Hanif
- Freddy Arviando
- Alvin

* * *

# This slide: http://bit.ly/papierpres

* * *

# The documentation: http://documentup.com/mhaidarh/papier

* * *

# Virtual Paper

* * *

<!-- background: #fff -->
<!-- color: #2c3e50 -->

# Just simply manage your list

![Papier Screenshot](https://storage.googleapis.com/a.swipeusercontent.com/6Zq5hvAPw3VbJLc7ZTDAuIQYk8nkeY-600.jpg)

* * *

## **Papier** is a todo list app for a _very simple_ list or note management

* * *

# The app: http://bit.ly/papierexp

* * *

# Topics

- Requirements
- Architecture
- Technical
- Usage

* * *

<!-- background: #f1c40f -->
<!-- color: #2c3e50 -->

# Requirements

* * *

<!-- background: #fff -->
<!-- color: #2c3e50 -->

# Agile Development Process

Quickly converts idea into design and working app/code

* * *

# Design Interface Segments

Title + Form + Buttons + Status + Style

* * *

# Features

**You can:**

- Write: Type then press `Enter`
- or edit: Double click a list then retype
- or mark: Click the `green check` button
- or mark all: Click the `down chevron` button on the input form
- or delete: Click the `red cross` button
- or clear: Click the `clear completed` button
- or filter: Click `all`, `active`, `completed`
- or count all

* * *

# Early Mockup

![Papier Mockup](https://storage.googleapis.com/a.swipeusercontent.com/x1h9k9uujXx6juzSuYz8zs04OQBMZQ-500.jpg)

* * *

<!-- background: #f1c40f -->
<!-- color: #2c3e50 -->

# Let's have a demo?

## (Offline or Online!)

* * *

# Architecture

* * *

<!-- background: #fff -->
<!-- color: #2c3e50 -->

# Components

It's built based on:

- A todo list style
- A one page JavaScript application, with HTML and CSS
- A JavaScript MVW (Model-View-Whatever) framework called [AngularJS](https://angularjs.org)
- A browser's local storage

* * *

# AngularJS

Extends HTML for application by declaring dynamic views in web-applications

- Model: State the specification and behavior, direct the ViewModel and be updated by that.
- View: Render the display and layout, managed by the ViewModel and send the information to the ViewModel.
- ViewModel: Or previously defined as Controller, as the logic of interaction. It modifies the View and reacted to action or change in the app.

* * *

# Framework

![MVC](https://storage.googleapis.com/a.swipeusercontent.com/pGUxKswDJ2mMjnTR0aAOboP2ZtI7MH-414.jpg)

![MVVM](https://storage.googleapis.com/a.swipeusercontent.com/V7ovoQQhWeYKDWqXNnxA2W3OegDRqZ-533.jpg)

* * *

# Extras

- Dependency Management: [Bower](http://bower.io)
- Storage: `localStorage` or HTML5 Web Storage
- Routing: `#/` (all as default), `#/active`, `#/completed`

* * *

# JSON Data

```
Storage {
  todos-papier: "[
    {"title":"Software","completed":false},
    {"title":"Development","completed":false},
    {"title":"Process","completed":false}
  ]",
  length: 2
}
```

* * *

# Technical

- Write
- Edit
- Mark
- Mark all
- Delete
- Clear
- Filter
- Count all

* * *

<!-- background: #f1c40f -->
<!-- color: #2c3e50 -->

# Source code and usage: https://github.com/mhaidarh/papier

* * *

# MIT Licensed

* * *

# Questions?

* * *

# Thank you!

