window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const animalInput = document.getElementById("animal").value;
    const colorInput = document.getElementById("color").value;
    const gameInput = document.getElementById("game").value;

    let favorites = [];
    favorites.push(animalInput, colorInput, gameInput);
  };


}