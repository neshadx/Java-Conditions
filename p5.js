/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


// let age = 12;
// let isStudent = false;
// let ticket = 800;

// if (age < 10) {
//     console.log('Free');
// } else if (isStudent) {
//     let discount = ticket * 50 / 100;
//     let payAmount = ticket - discount;
//     console.log(payAmount); 
// } else if (age >= 60) {
//     let discount = ticket * 15 / 100;
//     let payAmount = ticket - discount;
//     console.log(payAmount);
// } else {
//     console.log(ticket);
// }

let age = 50;
let children = true;
let isStudent = false;
let seniorCitizen = true;
let ticket = 800;

if (age < 10 && children === true) {
    console.log('Free');
} else if (!isStudent === true) {
    let discount = ticket * 50 / 100;
    let payAmount = ticket - discount;
    console.log(payAmount); 
} else if (age >= 60 && seniorCitizen === true) {
    let discount = ticket * 15 / 100;
    let payAmount = ticket - discount;
    console.log(payAmount);
} else if (age >= 60 && seniorCitizen === true) {
    console.log(ticket);
} else {
    console.log(ticket);
}