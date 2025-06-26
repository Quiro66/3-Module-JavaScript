// Part 1: Arrays focused on the DOM

// 1.1 - Colors with messages
const colors = ["red", "green", "blue"];
const messages = colors.map(color => `The color ${color} is very beautiful`);
document.getElementById("ej1").innerHTML = "<h2>1. Colors</h2>" + messages.map(m => `<p>${m}</p>`).join("");

// 1.2 - Motivational phrases wrapped in <p>
const phrases = ["Keep going", "Never give up", "Believe in yourself"];
const phrasesHTML = phrases.map(f => `<p>${f}</p>`);
document.getElementById("ej2").innerHTML = "<h2>2. Motivational Phrases</h2>" + phrasesHTML.join("");

// 1.3 - Numbers to <li>
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(n => `<li>${n}</li>`);
document.getElementById("ej3").innerHTML = "<h2>3. Number List</h2><ul>" + listItems.join("") + "</ul>";

// Part 2: Objects to be displayed

// 2.1 - Person object → card
const person = {
    name: "Juan",
    age: 25,
    occupation: "Developer"
};
const personCardHTML = `
        <div class="card">
            <h2>${person.name}</h2>
            <p>Age: ${person.age}</p>
            <p>Occupation: ${person.occupation}</p>
        </div>`;
document.getElementById("ej4").innerHTML = "<h2>4. Person Card</h2>" + personCardHTML;

// 2.2 - Song object → <div>
const song = {
    title: "LVL",
    artist: "A$AP Rocky",
    duration: "3:40"
};
const songDivHTML = `
        <div class="song">
            <h3>${song.title}</h3>
            <p>Artist: ${song.artist}</p>
            <p>Duration: ${song.duration}</p>
        </div>`;
document.getElementById("ej5").innerHTML = "<h2>5. Song</h2>" + songDivHTML;

// 2.3 - Product object → list <ul>
const product = {
    name: "T-shirt",
    price: 25000,
    stock: 10
};
const productList = `
        <ul>
            <li>Name: ${product.name}</li>
            <li>Price: $${product.price}</li>
            <li>Stock: ${product.stock}</li>
        </ul>`;
document.getElementById("ej6").innerHTML = "<h2>6. Product Details</h2>" + productList;

// Part 3: Object lists focused on visualization

// 3.1 - Users → contact cards
const users = [
    { name: "Ana", email: "ana@mail.com" },
    { name: "Luis", email: "luis@mail.com" }
];
const userCards = users.map(user => `
        <div class="user">
            <h4>${user.name}</h4>
            <p>${user.email}</p>
        </div>`).join("");
document.getElementById("ej7").innerHTML = "<h2>7. Users</h2>" + userCards;

// 3.2 - Books → formatted string in <li>
const books = [
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", year: 1967 }
];
const bookList = books.map(book => `<li>${book.title} (${book.year}) - ${book.author}</li>`).join("");
document.getElementById("ej8").innerHTML = "<h2>8. Book List</h2><ul>" + bookList + "</ul>";

// 3.3 - Tasks with ✅ or ❌
const tasks = [
    { description: "Study JavaScript", completed: true },
    { description: "Do exercise", completed: false }
];
const tasksHTML = tasks.map(task => {
    const icon = task.completed ? "✅" : "❌";
    return `<p>${icon} ${task.description}</p>`;
}).join("");
document.getElementById("ej9").innerHTML = "<h2>9. Task List</h2>" + tasksHTML;

