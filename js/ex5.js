// example 5

for (i=1; i<=12; i++) {
  const number = document.createElement("p");
  // number.id = "num"
  number.textContent = i;
  document.getElementById("output").appendChild(number);
}

// NOT COMPLETED