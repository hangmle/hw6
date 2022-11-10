// example 7

// const n1 = prompt("Enter first integer number");
// const n2 = prompt("Enter second integer number");

// const n1Int = Number(n1);
// const n2Int = Number(n2);

// const display = () => {
//   for (let i=0; i < 2; i++) {
//     const spanEl = document.createElement("span");
//     document.getElementById("content")[0].appendChild(n1);
//     document.getElementById("content")[1].appendChild(n2);
//     if (Number.isInteger(n1Int) && Number.isInteger(n2Int)) {
//       document.getElementsByTagName("span")[i].style.color = "red";
//       document.getElementsByTagName("span")[i].style.fontWeight = "700";
//     } else {
//       console.log(`Error! You must enter integers. You entered "${n1}" and "${n2}". Try again.`)
//     }
//   }  
// }

// display();



// SOLUTION
// Query user for 2 integers
const n1 = prompt("Enter first integer number");
const n2 = prompt("Enter second integer number");

// Validate input
const numN1 = Number(n1);
const numN2 = Number(n2);

// Get contentElement
const contentElement = document.getElementById("content")

if (Number.isInteger(numN1) && Number.isInteger(numN2)) {
  //Good input
  // Add the starting string
  const startString = document.createTextNode(`${n1} + ${n2} = `);
  //Create a span for the sum
  const sumEl = document.createElement("span");
  sumEl.style.color = "red";
  sumEl.textContent = numN1 + numN2;
// Append to contentElement
contentElement.appendChild(startString);
contentElement.appendChild(sumEl);
} else {
  //Bad input
  // Create feedback string
  // span for ERROR in red
  const errorElement = document.createElement("span");
  errorElement.textContent = "Error!";
  errorElement.style.color = "red";
  // Append error to content
  contentElement.appendChild(errorElement);
  // Add remaining error info to content
  contentElement.appendChild(document.createTextNode(` You must enter integers. You entered "${n1}" and "${n2}"`))
}
