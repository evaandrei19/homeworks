fetch("https://rickandmortyapi.com/api/episode")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    var episodeContainer = document.querySelector("#episode-container");
    response.results.forEach(function (episode) {
      var episodeRow = createEpisode(episode);
      episodeContainer.appendChild(episodeRow);
    });
  });

function createEpisode(episode) {
  var episodeRow = document.createElement("tr");

  var episodeName = createEpisodeContent(episode.name);
  var episodeNumber = createEpisodeContent(episode.episode);
  var episodeAirDate = createEpisodeContent(episode.air_date);
  var episodeLink = createCharacterLink(episode.characters);

  episodeRow.appendChild(episodeName);
  episodeRow.appendChild(episodeNumber);
  episodeRow.appendChild(episodeAirDate);
  episodeRow.appendChild(episodeLink);

  return episodeRow;
}

function createEpisodeContent(text) {
  var elem = document.createElement("td");
  elem.innerText = text;
  return elem;
}

function createCharacterLink(characters) {
  var elem = document.createElement("td");

  var characterLink = document.createElement("a");
  characterLink.className = "link-primary";
  characterLink.href = "#";
  characterLink.innerHTML = `View ${characters.length} characters`;
  characterLink.onclick = function (event) {
    event.preventDefault();
    createCharacters(characters);
  };

  elem.appendChild(characterLink);
  return elem;
}

function createCharacters(characters) {
  var characterContainer = document.querySelector("#character-container");
  // Remove the content inside character container
  characterContainer.innerHTML = "";

  for (characters of characters) {
    fetch(characters)
      .then((response) => response.json())
      .then(function (response) {
        var characterElem = createCharacter(response);
        characterContainer.appendChild(characterElem);
      });
  }
}

function createCharacter(character) {
  var characterElem = document.createElement("section");

  var imageElem = document.createElement("img");
  imageElem.className = "character-img";
  imageElem.src = character.image;

  var nameElem = document.createElement("label");
  nameElem.innerHTML = character.name;

  characterElem.appendChild(imageElem);
  characterElem.appendChild(nameElem);
  return characterElem;
}
