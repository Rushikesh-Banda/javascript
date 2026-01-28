// assignment 4
//1
let temperatures = [32, 35, 28, 40, 38, 30, 42];

let above35 = temperatures.filter(temp => temp > 35);
console.log(above35); // temperatures above 35

let fahrenheitTemps = temperatures.map(temp => (temp * 9/5) + 32);
console.log(fahrenheitTemps); // temperatures in Fahrenheit

let totalTemp = temperatures.reduce((acc, temp) => acc + temp, 0);
let averageTemp = totalTemp / temperatures.length;
console.log(averageTemp); // average temperature

let firstAbove40 = temperatures.find(temp => temp > 40);
console.log(firstAbove40); // first temperature above 40

let indexOf28 = temperatures.findIndex(temp => temp === 28);
console.log(indexOf28); // index of 28

//2
const courses = ["javascript", "react", "node", "mongodb", "express"];

let longCourses = courses.filter(course => course.length > 5);
console.log(longCourses); // length > 5

let upperCourses = courses.map(course => course.toUpperCase());
console.log(upperCourses); // uppercase names

let courseString = upperCourses.reduce(
    (acc, course) => acc + " | " + course
);
console.log(courseString); // combined string

let foundCourse = courses.find(course => course === "react");
console.log(foundCourse); // react

let nodeIndex = courses.findIndex(course => course === "node");
console.log(nodeIndex); // index of node

//3
const marks = [78, 92, 35, 88, 40, 67];

let passMarks = marks.filter(mark => mark >= 40);
console.log(passMarks); // passed students

let graceMarks = marks.map(mark => mark + 5);
console.log(graceMarks); // marks after grace

let highestMark = marks.reduce((max, mark) => max > mark ? max : mark);
console.log(highestMark); // highest mark

let firstBelow40 = marks.find(mark => mark < 40);
console.log(firstBelow40); // first failed mark

let indexOf92 = marks.findIndex(mark => mark === 92);
console.log(indexOf92); // index of 92


