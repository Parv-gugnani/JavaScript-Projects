function search_animal() {
  let input = document.getElementById("searchbar").value.toLowerCase();
  let x = document.getElementsByClassName("animals");
  let animalsArray = Array.from(x);

  animalsArray.forEach((animal) => {
    if (!animal.textContent.toLowerCase().includes(input)) {
      animal.style.display = "none";
    } else {
      animal.style.display = "list-item";
    }
  });
}
