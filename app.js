let userName = prompt("Please enter your name:");

let userGender = prompt("Please enter your gender (male or female):");

if (userGender.toLowerCase() === "male") {
    alert("Welcome, Mr. " + userName);
} else if (userGender.toLowerCase() === "female") {
    alert("Welcome, Ms. " + userName);
} else {
    alert("Welcome, " + userName); 
}

let drinkType = prompt("Would you like a hot or cold drink?");
let drinkName = prompt("Please enter the name of the drink you want:");

alert("Your " + drinkType + " " + drinkName + " is getting prepared.");

let confirmMessage = "Hello, " + userName + "! You ordered a " + drinkType + " " + drinkName + ".";
if (confirm(confirmMessage)) {
    console.log(confirmMessage);
} else {
    console.log("User canceled the order.");
}
