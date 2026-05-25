

This project contains multiple JavaScript assignments that demonstrate the usage of:

* Variables
* Operators
* Conditional Statements
* Arrays
* Objects
* Array Methods
* Object Methods
* Functional Programming Concepts

The assignments are designed to improve understanding of core JavaScript concepts through real-world examples like shopping carts, students, employees, movies, banking transactions, and settings management.

---

#  Assignments Included

## Assignment 1 – Billing System

### Description

A simple billing system that performs:

* Addition of product prices
* Discount calculation
* GST calculation
* Final bill generation

### Concepts Used

* Variables
* Arithmetic Operators
* Console Output

### Important Definitions

#### Variable

A container used to store data values.

Example:

```js
let totalAmount = 0;
```

#### Arithmetic Operators

Used to perform mathematical calculations.

| Operator | Meaning        |
| -------- | -------------- |
| `+`      | Addition       |
| `-`      | Subtraction    |
| `*`      | Multiplication |
| `/`      | Division       |

---

# Assignment 3 – Conditional Statements

## Hands-on 1: Login System

Checks:

* User login status
* Profile completion status

### Concepts Used

* `if`
* `else if`
* Boolean values
* Logical Operators

---

## Hands-on 2: Course Pricing

Categorizes courses into:

* Budget Course
* Standard Course
* Premium Course

---

## Hands-on 3: Enrollment Eligibility

Uses a ternary operator to check enrollment eligibility.

### Important Definitions

#### Conditional Statements

Used to execute different blocks of code based on conditions.

Example:

```js
if (condition) {
   // code
}
```

---

#### Logical AND (`&&`)

Returns true only if both conditions are true.

Example:

```js
hasPaid && hasCompletedBasics
```

---

#### Ternary Operator

Short form of `if-else`.

Syntax:

```js
condition ? trueValue : falseValue
```

---

# Assignment 4 – Array Methods

This assignment demonstrates commonly used JavaScript array methods.

---

##  Array Methods Used

### 1. `filter()`

Used to create a new array with elements that satisfy a condition.

Example:

```js
let above35 = temperatures.filter(temp => temp > 35);
```

---

### 2. `map()`

Used to transform array elements.

Example:

```js
let upperCourses = courses.map(course => course.toUpperCase());
```

---

### 3. `reduce()`

Used to reduce an array into a single value.

Example:

```js
let total = numbers.reduce((acc, num) => acc + num, 0);
```

---

### 4. `find()`

Returns the first matching element.

Example:

```js
courses.find(course => course === "react");
```

---

### 5. `findIndex()`

Returns the index of the matching element.

Example:

```js
marks.findIndex(mark => mark === 92);
```

---

## Programs Included

### 🌡 Temperature Analysis

* Filter high temperatures
* Convert Celsius to Fahrenheit
* Calculate average temperature

---

### Course Operations

* Filter long course names
* Convert to uppercase
* Combine course names

---

### Student Marks Analysis

* Find passed students
* Add grace marks
* Find highest marks

---

#  Assignment 5 – Arrays of Objects

This assignment demonstrates handling complex data structures using arrays of objects.

---

##  Topics Covered

* Shopping Cart System
* Student Management
* Employee Payroll
* Movie Database
* Banking Transactions

---

#  Shopping Cart System

### Features

* Filter in-stock products
* Calculate total prices
* Find products
* Calculate grand total

### Concepts Used

* Objects
* Arrays
* Higher-order functions

---

#  Student Management System

### Features

* Filter passed students
* Assign grades
* Calculate average marks

### Grade Criteria

| Marks    | Grade |
| -------- | ----- |
| 90+      | A     |
| 75–89    | B     |
| 60–74    | C     |
| Below 60 | D     |

---

#  Employee Payroll System

### Features

* Filter IT employees
* Add 10% bonus
* Calculate total payout

---

#  Movie Database

### Features

* Filter Sci-Fi movies
* Format movie titles
* Calculate average ratings

---

#  Banking Transaction System

### Features

* Filter credit transactions
* Calculate final balance
* Find debit transactions

---

#  Assignment 6 – Objects in JavaScript

This assignment demonstrates object manipulation.

---

#  User Object Management

### Features

* Access object properties
* Add new properties
* Modify existing properties
* Delete properties

### Example

```js
user.role = "admin";
delete user.isActive;
```

---

#  Marks Object Analysis

### Features

* Calculate total and average marks
* Find highest scoring subject
* Add new subjects dynamically

---

#  Settings Object

### Features

* Toggle theme
* Enable autoSave
* Delete notifications
* Freeze object

---

## Important Definitions

### Object

An object stores data in key-value pairs.

Example:

```js
const user = {
  name: "Ravi",
  role: "student"
};
```

---

### Object.keys()

Returns all keys of an object as an array.

Example:

```js
Object.keys(user);
```

---

### Object.freeze()

Prevents modification of an object.

Example:

```js
Object.freeze(settings);
```

---

#  JavaScript Concepts Covered

| Concept         | Description           |
| --------------- | --------------------- |
| Variables       | Store values          |
| Arrays          | Store multiple values |
| Objects         | Store key-value data  |
| Conditions      | Decision making       |
| Functions       | Reusable code blocks  |
| Array Methods   | Process array data    |
| Object Methods  | Manipulate objects    |
| Arrow Functions | Short function syntax |

---

#  Learning Outcomes

After completing these assignments, the following concepts are understood:

* JavaScript fundamentals
* Functional programming
* Array manipulation
* Object handling
* Data transformation
* Conditional logic
* Real-world problem solving

---

# Technologies Used

* JavaScript (ES6)
* VS Code
* Node.js / Browser Console

