// Clasificador de triángulo

// Pedir los lados al usuario y convertirlos a números
let side1 = Number(prompt("Insert the length of the first side"));
let side2 = Number(prompt("Insert the length of the second side"));
let side3 = Number(prompt("Insert the length of the third side"));

// Validar si es un triángulo
if((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)){
    console.log("Is a triangle");

    // Clasificar el triángulo
    if(side1 === side2 && side1 === side3){
        console.log("Your triangle is Equilateral");
    } else if(side1 === side2 || side1 === side3 || side2 === side3){
        console.log("Your triangle is Isosceles");
    } else {
        console.log("Your triangle is Scalene");
    }
} else {
    console.error("Is not a triangle");
}

//list in javascript
//Array

//Exercise 1
const Fruits = ["strawberry", "pineapple", "apple", "pear", "blackberry"]; 
const ultimate = Fruits.pop();


//Exercise 2
const myArray2 = [{ name: "Object 1" }, { name: "Object 2" }];
const newObject = { name: "Object 3" };

miArra2.push(newObject);
console.log(myArray2)

//Exercise 3
let frutas = ["apple", "pear"];
frutas.unshift("orange"); // Add "orange" at first 

//Exercise 4
let colors = ["red", "blue", "green", "yellow"];
let lastColor = colors.pop();

//Exercise 5
let listNum = [1,2,3,4,5,6,7,8,9,10];
// let extractNum = listNum.slice(2,4);
let  extractNum = listNum.filter(2,4)

//Exercise 6
let myArray6 = [10, 20, 30, 40, 50];
let indice = 2;
let newValue = 25;

miArray.splice(indice, 1, newValor);

//Excercise 7
const words = ["Hello", "world", "from", "Belén"];
const text = words.join(" ");
console.log(text); 

//Exercise 8 
let names = ["Juan", "Ana", "Pedro", "María"];
names.sort();
console.log(names);

//Exercise 8
let names2 = ["Juan", "Ana", "Pedro", "María"];
names.reverse();
console.log(names2);

//Exercise 9
const array = [1, 2, 3, 4, 5];
const value = 3;

if (array.includes(value)) {
    console.log(`The value ${value} is in the array.`);
} else {
    console.log(`The value ${value} is not in the array.`);
}

//Exercises with for / for in / for of 
let word = "esternocleidomastoideo";

for (let letter in word) {
    console.log(letter);
}

//count of one at five
let i = 1;

for (i == 5; i <= 5; i++) {
    console.log("Number:" + i);
}

//Mostrar la posición de cada letra en una palabra usando
let word2 = "esternocleidomastoideo";
for (let i = 0; i < word2.length; i++) {
    console.log(`The letter ${word2[i]} is in the position ${i}`);
}

//

let word3 = "tralalero";
for (let index in word3){
    console.log(`Position: ${index}, Character: ${word3[index]}`);
}

//exercise  wearing objects 
// create object person

const person = {
    name : "Capu",
    Age : 20,
    City : "Medellin"
}
console.log(person);

//show value name of the object person
console.log("Name of the person is: "+ person.name)

//object book 
const book = {
    name : "Book JS logic",
    autor : "Capu zzino asesin",
    publication : 1967
};

//modification
book.publication = 1966;
console.log("The year of the publication of book is:" + book.publication);

//Adding a new property to an object  
const auto = {
    marca: "Toyota",
    modelo: "Corolla"
};

auto.color = "Red"; // Agregando la propiedad color
console.log("Car color :", auto.color);

// Loop through a student object and display keys and values
const student = {
    name: "Maria",
    career: "Ingeniería",
    semester: 5
};

for (const clave in student) {
    if (student.hasOwnProperty(clave)) {
        console.log(clave + ": " + student[clave]);
    }
}

//Funtions

//Function to greet
function salute(name) {
    return "Hi ,"+ name + "!";
}

let greeting = salute("Juancho");
console.log (greeting);

//function to add
function sum (num1, num2){
    return num1 + num2;
}

number = sum(2,4);
console.log("the result is: "+number);

//function to calculate area of the retangle
function calArea(base, height){
    return base * height
};

area = calArea(60,20);
console.log("the area of the retangle is: "+ area);

//function convertion celsius to fahrenheit 
function Convertiongradus(){
    celsius * 1.8 + 32;
};

fahrenheit = Convertiongradus(18);
console.log("the convertion in celsius to fahrenheit is ")


