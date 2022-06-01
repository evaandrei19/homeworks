var animalContainerElem = document.getElementById("animalContainer");

// Se apeleaza cand se face click pe buton
function getPhoto() {
  var selectElem = document.getElementById("pet-select");
  var selectedAnimal = selectElem.value;

  if (
    selectedAnimal != "dog" &&
    selectedAnimal != "cat" &&
    selectedAnimal != "fox"
  ) {
    alert("Please choose an animal from the list!");
  } else {
    getAnimal(selectedAnimal);
  }
}

// Se apeleaza o functie  cu parametrul "dog", "cat" sau "fox"
function getAnimal(animal) {
  // Write a text info to inform that the image/video is getting from API
  animalContainerElem.innerHTML = "Getting image...";

  switch (animal) {
    case "dog":
      getDog();
      break;
    case "cat":
      getCat();
      break;
    case "fox":
      getFox();
      break;
    default:
      break;
  }
}

// Se apeleaza cu url.ul pentru Dog
function getDog() {
  var link = "https://random.dog/woof.json";
  fetch(link)
    .then((res) => res.json())
    .then((data) => {
      var dogUrl = data.url;

      // Url.ul din json poate sa fie imagine (.jpg, .png, etc), fie video ('.mp4).
      // De aceea trebuie creat fie tag HTML de <img> fie tag de <video>
      var dogUrlIsImage =
        dogUrl.endsWith("jpg") ||
        dogUrl.endsWith("JPG") ||
        dogUrl.endsWith("png") ||
        dogUrl.endsWith("PNG") ||
        dogUrl.endsWith("jpeg") ||
        dogUrl.endsWith("gif");
      var dogUrlIsVideo = dogUrl.endsWith("mp4");

      if (dogUrlIsImage === true) {
        renderImage(dogUrl);
      } else if (dogUrlIsVideo === true) {
        renderVideo(dogUrl);
      }
    });
}

// Se apeleaza cu url.ul pentru Cat
function getCat() {
  var link = "https://some-random-api.ml/img/cat";
  fetch(link)
    .then((res) => res.json())
    .then((data) => {
      var catUrl = data.link;
      renderImage(catUrl);
    });
}

// Se apeleaza cu url.ul pentru Fox
function getFox() {
  var link = "https://randomfox.ca/floof/";
  fetch(link)
    .then((res) => res.json())
    .then((data) => {
      var foxUrl = data.image;
      renderImage(foxUrl);
    });
}

// Functie ajutatoare care creaza un tag <img> cu url.ul primit ca parametru
function renderImage(imageUrl) {
  animalContainerElem.innerHTML = `<img src="${imageUrl}" height="240">`;
}

// Functie ajutatoare care creaza un tag <video> cu url.ul primit ca parametru
function renderVideo(videoUrl) {
  animalContainerElem.innerHTML = `
    <video controls>
    	<source src="${videoUrl}" type="video/mp4">
    </video>
	`;
}
