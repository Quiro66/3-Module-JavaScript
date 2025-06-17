## TALLER PRÁCTICO  JS WEEK ONE

# Part one:

## 1.1

## What is JavaScript:

- JavaScrip es un lenguaje no tipado que sirve para crear sitios web dala funcionalida y diseño, interatividad a los htmls.

- La diferencia que tiene a html es que html es solo puras etiquetas para agregarle texto y orden a una pagina, y css es solo para darle estilo y interactividad al html 

## 1.2
## Que puedes hacer con js ?

- craer interactividadcon funcvionalidad en el diseño de html
- crear funciones para hacer funcial el html/front-end
- crear funciones para guardar los datos en 

## 1.3

- JavaScript es un lenguaje de programación interpreatdo y dinamico que fue creado para añadir interactividad a las paginas de paginas web y ha evolucionado tando que ahora es un lenguaje de alto nivel, multiparadigma , que soporta estilos de programación orientados a objetos, imperativos y funcionales. 

# Part two

## 2.1
```
// Declare a variable
let luckyNumber = 66;

// Print the variable
console.log(luckyNumber);

```
## 2.2
```
let wholeNumber = 10;
let decimalNumber = 3.14;
let greeting = "Hello, world";

console.log(wholeNumber, decimalNumber, greeting);

```

## 2.3

```
const PI = 3.1416;
PI = 3.141414; // This will cause an error
console.log(PI); 

```

## 2.4

```
let x;
console.log(x); // undefined

```

## 2.5
```
let valueNull = null;
let isActive = true;

console.log(valueNull);   // null
console.log(isActive);    // true
```


## Part three

## 3.1
```
let age = prompt("How old are you?");
console.log("You are " + age + " years old.");

```

## 3.2
```
alert("You're welcome, friend!");
```

## 3.3
```
let wantsToContinue = confirm("Do you want to continue?");
console.log(wantsToContinue);
```

## Part four

## 4.1
```
let num1 = 34;
let num2 = 10;

console.log("Subtraction: " + (num1 - num2));
console.log("Addition: " + (num1 + num2));
console.log("Multiplication: " + (num1 * num2));
console.log("Division: " + (num1 / num2));
```

## 4.2
```
let part1 = "Hello ";
let part2 = "World";
let completeMessage = part1 + part2;

console.log(completeMessage);
```

## 4.3
```
console.log(5 == "5");     // true
console.log(5 === "5");    // false
console.log(true && false); // false
console.log(false || true); // true
console.log(!true);        // false
```

## Part five

## 5.1
```
let num = prompt("Enter a number:");
num = Number(num);

if (num > 10) {
  console.log("The number is greater than 10");
} else if (num < 10) {
  console.log("The number is less than 10");
} else if (num === 10) {
  console.log("The number is equal to 10");
}
```

## 5.2
```
let name = prompt("What is your name?");

if (name === "Admin") {
  alert("Welcome, Admin!");
} else {
  alert("Hello " + name + ", welcome to our page.");
}
```

## 5.3
```
let number = prompt("Enter a number:");
number = Number(number);

let message = (number % 2 === 0) ? "The number is even" : "The number is odd";
console.log(message);

```

## Part six

## 6.1
```
console.info("This is an informational message");
console.warn("Warning! Check your input.");
console.error("An error occurred");

// Group of messages
console.group("Message Group");
console.log("Message 1 inside the group");
console.log("Message 2 inside the group");
console.groupEnd();

// Measure execution time
console.time("Execution time");
for (let i = 0; i < 1000000; i++) {
  Math.sqrt(i);
}
console.timeEnd("Execution time");
```

## Part seven

## 7.1
```
// This is a single-line comment
let number = 5; // This variable stores the number 5

/*
  This block calculates the square of a number
  and logs the result in the console.
*/
let square = number * number;
console.log("The square of " + number + " is: " + square);
```

## Part eight

## 8.1
### index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Final Challenge</title>
</head>
<body>
  <h1>Check the console</h1>

  <!-- Link to external JS file -->
  <script src="script.js"></script>
</body>
</html>
```

### script.js
```
let name = prompt("What is your name?");
let age = prompt("How old are you?");
let city = prompt("Which city do you live in?");

console.log("Hello " + name + ", you are " + age + " years old and live in " + city + ".");
```





