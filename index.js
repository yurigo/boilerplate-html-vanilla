console.log("Hello world!");

const campana = document.getElementById("campana");
const header = document.getElementById("cabecera");

console.log(campana);

const handleClick = (e) => {
  e.stopPropagation();
  //   console.log("hc");
  //   header.style.display = "block";
  header.classList.remove("invisible");
};
const handleClickDocument = (e) => {
  console.log("hcd");
  //   header.style.display = "none";
  header.classList.add("invisible");
};

campana.addEventListener("click", handleClick);

document.addEventListener("click", handleClickDocument);
