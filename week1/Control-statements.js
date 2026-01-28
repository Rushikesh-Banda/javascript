//Assignment 3
// hands-on 1
let isLoggedIn = true;
let isProfileComplete = false;

let message;

if (!isLoggedIn) {
    message = "Please login";//not logged in
}
else if (isLoggedIn && !isProfileComplete) {
    message = "Complete your profile";// logged in but profile not complete
}

else if (isLoggedIn && isProfileComplete) {
    message = "Welcome back!";// logged in and profile complete
}
console.log(message);

//hands-on 2
let price = 1299;

let courseTag;

if (price < 500) {
    courseTag = "Budget Course";//price less than 500
}
else if (price >= 500 && price <= 1000) {
    courseTag = "Standard Course";// price between 500 and 1000
}
else if (price > 1000) {
    courseTag = "Premium Course";// price greater than 1000
}
console.log(courseTag);

//hands-on 3
let hasPaid = true;
let hasCompletedBasics = false;

let enrollMessage = (hasPaid && hasCompletedBasics)//ternary operator
    ? "Enroll Now"
    : "Complete Requirements";

console.log(enrollMessage);
