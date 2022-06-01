fetch("https://rickandmortyapi.com/api/episode")
.then(function(response) {
 return response.json();
}).then(function (response) {
  console.log(response);
  response.results.forEach(function (episode) {
createEpisode(episode);
  })

});

  function createEpisodeContent(text){
    var elem = document.createElement("div");
    elem.innerText = text;
    return elem;
  };

  function createEpisode (episode) {
    var episodeContainer = document.createElement("div");
    var episodeName = createEpisodeContent(episode.name);
    var episodeNumber = createEpisodeContent(episode.episode);
    var episodeAirDate = createEpisodeContent(episode.air_date);
    episodeContainer.appendChild(episodeName);
    episodeContainer.appendChild(episodeNumber);
    episodeContainer.appendChild(episodeAirDate);
    episodesContainer.appendChild(episodeContainer);
  };
  var episodesContainer = document.querySelector("#episodes-container");




