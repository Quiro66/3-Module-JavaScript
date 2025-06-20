// Veterinarymals functions
// By: Juan Quiroz, Andres Severino

console.log("Hi, welcome to Veterinarymals");

// -------------------
// 1. Data (Global list of pets)
// -------------------
let pets = [];

// -------------------
// 2. Logic (Arrow Functions)
// -------------------

// Function to register a new pet
const registerPets = () => {
  const name = prompt("Enter pet's name:");
  const species = prompt("Enter the pet species (dog, cat, iguana):");
  const age = parseInt(prompt("Enter the pet age:"), 10);
  const vaccinated = prompt("Is the pet vaccinated? (yes/no):")
                      .toLowerCase() === "yes";

  // Add the pet to the list
  pets.push({ name, species, age, vaccinated });
  console.log("✅ Pet added successfully.");
};

// Function to search a pet by name
const searchByName = () => {
  const name = prompt("Enter name to search:");
  const result = pets.find(
    p => p.name.toLowerCase() === name.toLowerCase()
  );

  // Display result
  result
    ? console.log("🔍 Pet found:", result)
    : console.log("⚠️ Pet not found.");
};

// Function to filter vaccinated pets
const filterVaccinated = () => {
  const vaccinatedPets = pets.filter(p => p.vaccinated);
  console.log("💉 Vaccinated pets:");
  console.log(vaccinatedPets);
};

// Function to calculate the average age of all pets
const calculateAverageAge = () => {
  if (pets.length === 0) {
    console.log("❌ No pets registered.");
    return;
  }

  const sumAges = pets.reduce((sum, p) => sum + p.age, 0);
  const avg = sumAges / pets.length;

  console.log(`📊 Average age of pets: ${avg.toFixed(2)}`);
};

// Function to sort pets by age (ascending)
const sortByAge = () => {
  const ordered = [...pets].sort((a, b) => a.age - b.age);
  console.log("📋 Pets ordered by age:");
  console.log(ordered);
};

// -------------------
// 3. Presentation (Main Menu)
// -------------------
const showMenu = () => {
  let option;
  do {
    option = prompt(
      "🐾 Veterinarymals Menu:\n" +
      "1. Register pet\n" +
      "2. Search by name\n" +
      "3. Show vaccinated pets\n" +
      "4. Calculate average age\n" +
      "5. Show all pets ordered by age\n" +
      "6. Exit\n\n" +
      "Select an option (1–6):"
    );

    // Handle menu selection
    switch (option) {
      case "1":
        registerPets();
        break;
      case "2":
        searchByName();
        break;
      case "3":
        filterVaccinated();
        break;
      case "4":
        calculateAverageAge();
        break;
      case "5":
        sortByAge();
        break;
      case "6":
        console.log("👋 Exiting Veterinarymals...");
        break;
      default:
        console.log("❌ Invalid option. Please try again.");
    }
  } while (option !== "6");
};

// -------------------
// 4. Start the program
// -------------------
showMenu();
