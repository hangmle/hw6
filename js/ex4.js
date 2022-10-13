// example 4

const addLink = () => {
  const newLink = document.createElement("li");
  newLink.id = "cob"
  newLink.textContent = "College of Business"
  document.getElementById("links").insertBefore(newLink, document.getElementById("is"));
  document.getElementById("cob").href = "https://www.csulb.edu/college-of-business";
}

addLink();

// NOT COMPLETED