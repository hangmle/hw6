// example 3

// const s = document.querySelector("p")

const newStyle = () => {
  for (let i=0; i < document.getElementsByTagName("p").length; i++) {
    document.getElementsByTagName("p")[i].style.backgroundColor = "yellow";
    document.getElementsByTagName("p")[i].style.fontWeight = "700";
  }
}

newStyle();