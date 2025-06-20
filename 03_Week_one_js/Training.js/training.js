console.log("Welcome to the interative menssaging system");

//Capture user data
let name = prompt("Please, enter your name: ");
let age = prompt("Please, enter your age: ");

//Convert age to number
age = parseInt(age)

//Code and message validation
if(isNaN(age)) {
    console.error("Error, please enter valid age in numbers");
} else if (age < 18){
    alert(`Hi ${name},you are under-age, ¡Keep learning and enjoying the code! `);
} else {
    alert(`Hi, ${name}, you are an adult, prepare for great opportunities in the developing world`);
}