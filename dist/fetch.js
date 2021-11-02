"use strict";

/*Lige nu generer vi HTML via .innerHTML, 
men når vi laver projekter i praktik, 
så skal vi lave createElement og appendChild*/
axios.get("https://jsonplaceholder.typicode.com/users/").then(function (response) {
  var users = response.data;
  users.forEach(function (user) {
    var mainJoke = document.querySelector(".Main");
    var joke = document.createTextNode(user.name);
    var jokeSectionAnimate__animated = document.createElement("section");
    jokeSectionAnimate__animated.classList.add("animate__animated");
    var jokeAnimate__animatedDeleteItem = document.createElement("div");
    jokeAnimate__animatedDeleteItem.classList.add("animate__animated-deleteItem");
    var jokeAnimate__animatedJokeItem = document.createElement("article");
    jokeAnimate__animatedJokeItem.classList.add("animate__animated-jokeItem");
    jokeSectionAnimate__animated.appendChild(jokeAnimate__animatedDeleteItem);
    jokeSectionAnimate__animated.appendChild(jokeAnimate__animatedJokeItem);
    mainJoke.appendChild(jokeSectionAnimate__animated);
    jokeAnimate__animatedJokeItem.appendChild(joke);
  });
  var jokeItem = document.querySelector(".animate__animated-jokeItem");
  var touchCoordinateStart;
  var touchCoordinateMove;
  var touchCoordinateEnd;
  var deleteButtonWidth = window.screen.width * 40 / 100;
  document.querySelector(".animate__animated-deleteItem").addEventListener("click", function () {
    document.querySelector(".animate__animated").classList.add("animate__fadeOutLeft"); //når den grønne boks er faded ud til venstre

    setTimeout(function () {
      //efter 800 milisekunder, skal "section" bruge class "collapsed"
      document.querySelector(".animate__animated").classList.add("collapsed"); //der er lavet en class i SCSS der hedder collapsed
    }, 800);
    setTimeout(function () {
      document.querySelector(".animate__animated").remove(); //efter 2200 milisekunder, så bruger vi querySelector til at fjerne section
    }, 2200);
  });
  jokeItem.addEventListener('touchstart', function (e) {
    touchCoordinateStart = e.touches[0].clientX;
  });
  jokeItem.addEventListener('touchmove', function (e) {
    touchCoordinateMove = Math.floor(e.touches[0].clientX); //console.log(`${touchCordinateMove - touchCordinateStart}`)

    if (touchCoordinateMove < touchCoordinateStart && touchCoordinateMove > touchCoordinateStart - deleteButtonWidth) {
      jokeItem.style.transform = "translateX(".concat(touchCoordinateMove - touchCoordinateStart, "px)");
    }
  });
  jokeItem.addEventListener('touchend', function (e) {
    touchCoordinateEnd = Math.floor(e.changedTouches[0].clientX);

    if (touchCoordinateEnd < touchCoordinateStart - deleteButtonWidth / 2) {
      jokeItem.style.transform = "translateX(-".concat(deleteButtonWidth, "px)");
    } else {
      jokeItem.style.transform = "translateX(".concat(e.target.offsetLeft, ")");
    }
  });
});