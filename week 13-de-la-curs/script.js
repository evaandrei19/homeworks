// document.cookie = "Language = romanian";
// let myCookie;
// const cookies = document.cookie.split('; ');
// cookies.forEach((cookie) => {
//   if(cookie.startsWith('Language=')) {
//     const cookieData = cookie.split('=') ;
//     myCookie = cookieData[1];
//   };
// });

// console.log(myCookie);
let myLang = window.localStorage.getItem("language");
const input1 = document.querySelector(`input[value = "${myLang}"]`);
input1.checked = true;
// console.log(input1);

document.querySelectorAll("input").forEach((element) => {
  element.addEventListener("change", (elem) => {
    window.localStorage.setItem("language",elem.target.value);
    console.log(elem.target.value);
  });
});







// window.addEventListener("popstate", (event) => {
//   console.log(
//     "location: " + document.location + ", state: " + JSON.stringify(event.state)
//   );
// });

// function goto() {
//   const val = document.getElementById("name-goto").value;
//   var value = "#" + val;
//   history.pushState({ page: 1 }, "title 1", value);
// }

// function back() {
//   window.history.back();
// }
// function forward() {
//   window.history.forward();
// }

// function replaceWith() {
//   const val = document.getElementById("name-replace").value;
//   var value = "#" + val;
//   history.replaceState({ page: 1 }, "title 1", value);
// }
