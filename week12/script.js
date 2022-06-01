window.addEventListener("popstate", (event) => {
  console.log(
    "location: " + document.location + ", state: " + JSON.stringify(event.state)
  );
});

function goto() {
  const val = document.getElementById("name-goto").value;
  var value = "#" + val;
  history.pushState({ page: 1 }, "title 1", value);
}

function back() {
  window.history.back();
}
function forward() {
  window.history.forward();
}

function replaceWith() {
  const val = document.getElementById("name-replace").value;
  var value = "#" + val;
  history.replaceState({ page: 1 }, "title 1", value);
}
