// example 5

// for (i=1; i<=12; i++) {
//   const number = document.createElement("p");
//   // number.id = "num"
//   number.textContent = i;
//   document.getElementById("output").appendChild(number);
// }

// // NOT COMPLETED



// Create the table outside the loop, create row inside loop

// Create table
const tableElement = document.createElement("table");

// In the loop, create rows and add to the table
for (let i = 1; i <= 12; i++) {
  const rowElement = document.createElement("tr");
  const tdElement = document.createElement("td");
  tdElement.textContent = i;

  // Check if i is divisible by 4. If so, use blue background
  if (i%4 === 0) {
    tdElement.classList.add("div4blue");
  }

  // Add td to tr. Add tr to table
  rowElement.appendChild(tdElement);
  tableElement.appendChild(rowElement);
}

// Add the table to HTML doc
document.getElementById("output").appendChild(tableElement);