//assignment 5
//1
let cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
let inStockProducts = cart.filter(item => item.inStock);
console.log(inStockProducts); // products in stock

let productPrices = inStockProducts.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));
console.log(productPrices); // name & total price

let grandTotal = cart.reduce(
  (total, item) => total + (item.price * item.quantity),
  0
);
let mouseDetails = cart.find(item => item.name === "Mouse");
console.log(mouseDetails); // mouse details

let keyboardIndex = cart.findIndex(item => item.name === "Keyboard");
console.log(keyboardIndex); // keyboard position

//2
let students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

let passedStudents = students.filter(student => student.marks >= 40);
console.log(passedStudents); // passed students

let studentsWithGrades = students.map(student => {
  let grade;

  if (student.marks >= 90) grade = "A";
  else if (student.marks >= 75) grade = "B";
  else if (student.marks >= 60) grade = "C";
  else grade = "D";

  return {
    ...student,
    grade: grade
  };
});
console.log(studentsWithGrades); // students with grades

let totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
let averageMarks = totalMarks / students.length;
console.log(averageMarks); // average marks

let student92 = students.find(student => student.marks === 92);
console.log(student92); // student with 92 marks

let kiranIndex = students.findIndex(student => student.name === "Kiran");
console.log(kiranIndex); // index of Kiran

//3
let employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

let itEmployees = employees.filter(emp => emp.department === "IT");
console.log(itEmployees); // IT employees

let employeesWithNetSalary = employees.map(emp => ({
  ...emp,
  netSalary: emp.salary + (emp.salary * 0.10)
}));
console.log(employeesWithNetSalary); // salary with bonus

let totalPayout = employees.reduce((total, emp) => total + emp.salary, 0);
console.log(totalPayout); // total salary payout

let employee30000 = employees.find(emp => emp.salary === 30000);
console.log(employee30000); // employee with salary 30000

let nehaIndex = employees.findIndex(emp => emp.name === "Neha");
console.log(nehaIndex); // index of Neha

//4
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

let sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
console.log(sciFiMovies); // Sci-Fi movies

let movieLabels = movies.map(
  movie => `${movie.title} (${movie.rating})`
);
console.log(movieLabels); // formatted movie titles

let totalRating = movies.reduce((sum, movie) => sum + movie.rating, 0);
let averageRating = totalRating / movies.length;
console.log(averageRating); // average rating

let jokerMovie = movies.find(movie => movie.title === "Joker");
console.log(jokerMovie); // Joker movie details

let avengersIndex = movies.findIndex(movie => movie.title === "Avengers");
console.log(avengersIndex); // index of Avengers

//5
let transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

let creditTransactions = transactions.filter(txn => txn.type === "credit");
console.log(creditTransactions); // credit transactions

let transactionAmounts = transactions.map(txn => txn.amount);
console.log(transactionAmounts); // amounts only

let finalBalance = transactions.reduce((balance, txn) => {
  return txn.type === "credit"
    ? balance + txn.amount
    : balance - txn.amount;
}, 0);
console.log(finalBalance); // final balance

let firstDebit = transactions.find(txn => txn.type === "debit");
console.log(firstDebit); // first debit transaction

let indexOf10000 = transactions.findIndex(txn => txn.amount === 10000);
console.log(indexOf10000); // index of amount 10000

