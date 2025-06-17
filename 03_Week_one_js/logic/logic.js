// clasificador de triagulo 

//the users agg las longitudes de los lados de un triangulo
let side1 = prompt("insert the length of the first side")
let side2 = prompt("insert the length of the second side")
let side3 = prompt("insert the length of the third side")

if((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)){
    console.log("Is a triangle");
    if(side1 === side2 && side1 === side3){
    console.log("your triangle is Equilateral");

    }else if(side1 == side2 || side1 == side3){
    console.log("your traingle is Isosceles");

    }else{
    console.log("your traingle is Escaleno");
}}
else{
    console.error("is not a triangle");
};

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
let extractNum = listNum.slice(2,1);

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