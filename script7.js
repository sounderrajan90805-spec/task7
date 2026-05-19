// ======================================================
// 1. API Task - User Names Uppercase
// ======================================================

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {

    const upperCaseUsers = data.map((user) =>
      user.username.toUpperCase()
    );

    console.log("1. User Names Uppercase");
    console.log(upperCaseUsers);

    /*
    OUTPUT:
    [
      "BRET",
      "ANTONETTE",
      "SAMANTHA",
      "KARIANNE",
      "KAMREN",
      "LEOPOLDO_CORKERY",
      "ELWYN.SKILES",
      "MAXIME_NIENOW",
      "DELPHINE",
      "MORIAH.STANTON"
    ]
    */

  });





// ======================================================
// 2. API Task - Expensive Products
// ======================================================

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {

    const expensiveProducts = products.filter(
      (product) => product.price > 100
    );

    console.log("2. Expensive Products");
    console.log(expensiveProducts);

    /*
    OUTPUT:
    [
      { id: 5, price: 695 },
      { id: 6, price: 168 },
      { id: 15, price: 109.95 }
    ]
    */

  });





// ======================================================
// 3. Date Concept Task - Digital Clock
// ======================================================

const currentDate = new Date();

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

console.log("3. Digital Clock");
console.log(hours + " : " + minutes + " : " + seconds);

/*
OUTPUT:
10 : 45 : 30
*/





// ======================================================
// 4. String Concept Task - Username Checker
// ======================================================

let userName = "   sounderrajan  ";

let finalName = userName.trim().toUpperCase();

console.log("4. Username Checker");
console.log(finalName);

console.log(finalName.includes("SOUNDERRAJAN"));

/*
OUTPUT:
SOUNDERRAJAN
true
*/





// ======================================================
// 5. Array Concept Task - Student Rank System
// ======================================================

const marks = [450, 300, 700, 200, 900];

const sortedMarks = marks.sort((a, b) => b - a);

const top3Marks = sortedMarks.slice(0, 3);

console.log("5. Student Rank System");
console.log(top3Marks);

/*
OUTPUT:
[900, 700, 450]
*/