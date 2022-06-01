fetch("https://rickandmortyapi.com/api/character")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    response.results.forEach(character => {
      console.log(character);
      creatItem(character);
    });
  })
  ;

function creatItem(character) {
  var figureItem = document.createElement("figure");
  var childDiv = document.createElement("div");
  var childDivImg = document.createElement("div");
  figureItem.appendChild(childDiv);
  figureItem.appendChild(childDivImg);
  childDiv.innerText = (character.name);
  var img = document.createElement("img");
  img.src = character.image;
  
  childDivImg.appendChild(img);

  var container = document.querySelector("#characters-container");
  container.appendChild(figureItem);
}
