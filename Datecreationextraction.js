//Assignment 1
let date = Date(Date.now());
console.log("Current Date & Time:", date);

let currentDate = new Date();//creating date object
let year = currentDate.getFullYear();//extracting year
let month = currentDate.getMonth() + 1;//extracting month
let date2= currentDate.getDate();//extracting date
let dayOfWeek = currentDate.getDay();//extracting day of the week
let hours = currentDate.getHours();//extracting hours
let minutes = currentDate.getMinutes();//extracting minutes
let seconds = currentDate.getSeconds();//extracting seconds
console.log("Year:", year);
console.log("Month:", month);
console.log("Date:", date2);
console.log("Day of Week:", dayOfWeek);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);

//Assignment 2
let enrollmentDeadline = new Date("2026-01-20");//setting enrollment deadline
let today = new Date();
if (today < enrollmentDeadline) {//comparing dates
    console.log("Enrollment Open");
}
else {
    console.log("Enrollment Closed");
}

let date3=("2026-02-30");
let dateObj = new Date(date3);     
if (dateObj.getDate() != 30) {
    console.log(date3 + " is an invalid date.");
}
else {
       console.log(date3 + " is a valid date.");
}

//assignment 3

let dob="2005-05-15"
let birthDate=new Date(dob);//creating date object for dob
let currentDate2=new Date();
let age=currentDate2 - birthDate;
let ageDate=new Date(age);
let ageInYears=ageDate.getUTCFullYear()-1970;//calculating age in years
console.log("Age in years:",ageInYears);
