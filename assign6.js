//assignment 6
//1
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

console.log(user.name)
console.log(user.email);

user.lastLogin = "2026-01-01";// adding new property
user.role = "admin";// modifying existing property
delete user.isActive;// deleting property
let userKeys = Object.keys(user);
console.log(userKeys);

//2
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

let totalMarks =
  marks.maths +
  marks.physics +
  marks.chemistry +
  marks.english;
console.log(totalMarks);

let averageMarks = totalMarks / Object.keys(marks).length;
console.log(averageMarks);// average marks

let highestSubject = "";
let highestMarks = 0;

for (let subject in marks) {
  if (marks[subject] > highestMarks) {
    highestMarks = marks[subject];
    highestSubject = subject;
  }
}
console.log(highestSubject, highestMarks);// highest subject and marks
marks.computer = 90;
console.log(marks);

//3
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

settings.theme = settings.theme === "light" ? "dark" : "light";// Toggle theme

settings.autoSave = true;// Enable autoSave

delete settings.notifications;// Disable notifications

Object.freeze(settings);// freeze settings object

console.log(settings);

