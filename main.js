// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
// (function() {
//     var burger = document.querySelector('.burger');
//     var menu = document.querySelector('#'+burger.dataset.target);
//     burger.addEventListener('click', function() {
//         burger.classList.toggle('is-active');
//         menu.classList.toggle('is-active');
//     });
// })();

let API_URL = "https://api.spotify.com";
const INTERVAL_DELAY = 5000;
let currentImages = [];
let currentIndex = 0;
let interval;

// Force JavaScript to wait to run its code until all the DOM has been loaded
document.addEventListener("DOMContentLoaded", function () {
  // Hook up a submit event listener to submit button
  document
    .getElementById("search-form")
    .addEventListener("submit", fetchFromReddit);

  // Hook up a click event listener to the STOP button
  document.getElementById("stop").addEventListener("click", stopSlides);
});