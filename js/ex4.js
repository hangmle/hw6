// example 4

const addLink = () => {
  const newLink = document.createElement("li");
  newLink.id = "cob"
  const a = document.createElement("a");
  const aText = document.createTextNode("College of Business");
  a.appendChild(aText);
  a.href = "https://www.csulb.edu/college-of-business";
  document.getElementById("links").insertBefore(newLink, document.getElementById("is"));
  newLink.appendChild(a);
}

addLink();
