// example 2

// Display text for 400 level courses

const displayText400 = () => {
  for (let i =  0; i < document.getElementsByClassName("400level").length; i++) {
    console.log(document.getElementsByClassName("400level")[i].textContent);
  }
}

displayText400();
