// example 7

const n1 = prompt("Enter first integer number");
const n2 = prompt("Enter second integer number");
// convert inputs to number
const n1Int = Number(n1);
const n2Int = Number(n2);
// check integer and conditions
// if (Number.isInteger(n1Int) && Number.isInteger(n2Int) && n1Int > 0 && n2Int > n1Int) {
//   console.log(`The sum of the numbers starting with "${n1}" and ending with "${n2}" is ${sumNotDiv3or4(n1Int, n2Int)}`);
// } else {
//   console.log("error")
// }

spanEl.textContent[0] = n1;
document.getElementById("content")[0].appendChild(n1);
spanEl.textContent[1] = n2;
document.getElementById("content")[1].appendChild(n2);


const display = () => {
  for (let i=0; i < 2; i++) {
    const spanEl = document.createElement("span");
    document.getElementsByTagName("span")[i].style.color = "red";
    document.getElementsByTagName("span")[i].style.fontWeight = "700";
  }  
}

display();