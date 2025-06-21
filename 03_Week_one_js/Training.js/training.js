// interactive_system.js

// Request user's name and age
function great() {
    const userName = prompt("Please enter your name:");
    const userAgeInput = prompt("Hi " + userName + ", please enter your age:");

    // Try converting age to a number
    const userAge = Number(userAgeInput);

    // Validate if the age is a valid number
    if (isNaN(userAge) || userAgeInput.trim() === "") {
        console.error("Error: Please enter a valid age using numbers.");
    } else if (userAge < 18) {
        alert(`Hi ${userName}, you are underage. Keep learning and enjoying coding!`);
        console.log(`Hi ${userName}, you are underage. Keep learning and enjoying coding!`);
    } else {
        alert(`Hi ${userName}, you are an adult. Get ready for great opportunities in the programming world!`);
        console.log(`Hi ${userName}, you are an adult. Get ready for great opportunities in the programming world!`);
    }
}