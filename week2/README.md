This repository contains multiple JavaScript mini-projects and assignments that demonstrate:

* Array Methods
* Object Manipulation
* ES6 Features
* Functional Programming
* Modules (`import/export`)
* Validation Functions
* Date & Time Handling
* Shallow Copy Concepts
* Real-world Data Processing

The project is organized into multiple practical examples like:

* User Management
* Course Management
* Shopping Cart System
* Task Manager
* Date Utilities
* Object Cloning

---

#  Project Structure

```bash id="a4vk1r"
e-commerce/
│
├── app.js
├── cart.js
├── product.js
├── payment.js
├── validator.js
├── task.js
└── README.md
```

---

#  Features

## User Management System

Operations performed:

* Get active users
* Extract active usernames
* Check admin existence
* Find users by ID
* Deactivate users

### Concepts Used

* `filter()`
* `map()`
* `some()`
* `find()`
* Object spread operator

---

## Course Management System

Operations performed:

* Fetch live courses
* Sort courses by cost
* Generate course overview
* Calculate live course value
* Add new courses dynamically

### Concepts Used

* `sort()`
* `reduce()`
* Array cloning using `slice()`

---

## Shopping Cart System

Operations performed:

* Merge cart with course data
* Calculate cart total
* Increase quantity
* Remove courses from cart
* Check paid courses

### Concepts Used

* `map()`
* `find()`
* `every()`
* `filter()`

---

## Task Management System

Operations performed:

* Add tasks
* Validate task details
* Complete tasks
* Retrieve all tasks

### Concepts Used

* ES6 Modules
* Validation
* Dynamic task creation

---

#  Important JavaScript Definitions

---

# Array Methods

## `filter()`

Creates a new array containing elements that satisfy a condition.

### Example

```js id="v2g3hx"
users.filter(user => user.active);
```

---

## `map()`

Transforms each element of an array and returns a new array.

### Example

```js id="74l7i7"
users.map(user => user.name);
```

---

## `reduce()`

Reduces an array into a single value.

### Example

```js id="8ktiz8"
numbers.reduce((sum, num) => sum + num, 0);
```

---

## `find()`

Returns the first matching element.

### Example

```js id="ytc6sa"
users.find(user => user.id === 2);
```

---

## `some()`

Checks whether at least one element matches a condition.

### Example

```js id="m7lxno"
users.some(user => user.role === "admin");
```

---

## `every()`

Checks whether all elements satisfy a condition.

### Example

```js id="vvqjsn"
cart.every(item => item.price > 0);
```

---

# Object Concepts

## Object

An object stores data in key-value pairs.

### Example

```js id="zkt0m7"
const user = {
  name: "Ravi",
  role: "student"
};
```

---

## Spread Operator (`...`)

Used to copy or update objects and arrays.

### Example

```js id="mjlwmn"
{ ...user, active: false }
```

---

## Shallow Copy

Copies only the first level of an object.

Nested objects still share the same reference.

### Example

```js id="vpfkg7"
const copy = { ...original };
```

---

#  ES6 Modules

## `export`

Used to export functions or variables from a file.

### Example

```js id="rtk9jw"
export { addTask };
```

---

## `import`

Used to import functions or variables from another file.

### Example

```js id="pqwnic"
import { addTask } from "./task.js";
```

---

#  Date Object

## Date

JavaScript `Date` object is used to work with dates and times.

### Example

```js id="n7nng4"
const today = new Date();
```

---

## Common Date Methods

| Method          | Description          |
| --------------- | -------------------- |
| `getFullYear()` | Returns year         |
| `getMonth()`    | Returns month        |
| `getDate()`     | Returns day of month |
| `getDay()`      | Returns weekday      |
| `getHours()`    | Returns hours        |
| `getMinutes()`  | Returns minutes      |

---

#  Modules Included

---

#  validator.js

## Purpose

Contains validation functions for:

* Title validation
* Priority validation
* Due date validation

---

## Validation Rules

### Title Validation

* Minimum 3 characters required

### Priority Validation

Allowed values:

* low
* medium
* high

### Due Date Validation

* Must be a valid future date

---

#  task.js

## Purpose

Handles task operations:

* Add task
* Get all tasks
* Complete task

---

#  app.js

## Purpose

Main execution file that:

* Adds tasks
* Displays tasks
* Completes tasks

---

#  Date Assignments

## Features

* Display current date and time
* Extract year/month/day
* Check enrollment deadlines
* Validate dates
* Calculate age from DOB

---

#  Object & Cloning Assignments

## Features

* Create shallow copies
* Modify nested objects
* Understand reference sharing

---

#  Real-World Examples Included

| Module            | Real-World Use              |
| ----------------- | --------------------------- |
| User Management   | User authentication systems |
| Course Management | Online learning platforms   |
| Shopping Cart     | E-commerce applications     |
| Task Manager      | Productivity apps           |
| Validation System | Form validation             |
| Date Utilities    | Scheduling systems          |

---

#  Technologies Used

* JavaScript (ES6)
* Node.js
* VS Code

---



#  Conclusion

This project demonstrates practical JavaScript programming using modern ES6 features and real-world scenarios. It provides hands-on experience with arrays, objects, modules, validation, dates, and data manipulation techniques commonly used in modern web development.
