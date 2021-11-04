"use strict";

axios.get("https://jsonplaceholder.typicode.com/users/").then(function (response) {
  var users = response.data;
  users.forEach(function (user) {
    var mainJoke = document.querySelector(".Main");
    var joke = document.createTextNode(user.name);
    var jokeSectionAnimate__animated = document.createElement("section");
    jokeSectionAnimate__animated.classList.add("animate__animated"); //class på "jokeSectionAnimate__animated", som er "section"

    jokeSectionAnimate__animated.setAttribute("id", user.id); //Her sætter vi en identifier(id), på "section"

    var jokeAnimate__animatedDeleteItem = document.createElement("div");
    jokeAnimate__animatedDeleteItem.classList.add("animate__animated-deleteItem");
    var jokeAnimate__animatedJokeItem = document.createElement("article");
    jokeAnimate__animatedJokeItem.classList.add("animate__animated-jokeItem");
    jokeSectionAnimate__animated.appendChild(jokeAnimate__animatedDeleteItem);
    jokeSectionAnimate__animated.appendChild(jokeAnimate__animatedJokeItem);
    mainJoke.appendChild(jokeSectionAnimate__animated);
    jokeAnimate__animatedJokeItem.appendChild(joke);
  });
  var touchCoordinateStart;
  var touchCoordinateMove;
  var touchCoordinateEnd;
  var deleteButtonWidth = window.screen.width * 40 / 100;
  document.querySelector("main").addEventListener("touchstart", function (e) {
    /* let section = document.querySelector(".animate__animated") */

    /* let jokeItem = document.querySelector(".animate__animated-jokeItem") */
    touchElement = e.target;
    parentElement = e.target.parentElement;
    touchCoordinateStart = e.touches[0].clientX;
    document.querySelector("main").addEventListener("touchmove", function (e) {
      touchCoordinateMove = Math.floor(e.touches[0].clientX);

      if (touchCoordinateMove < touchCoordinateStart && touchCoordinateMove > touchCoordinateStart - deleteButtonWidth) {
        touchElement.style.transform = "translateX(".concat(touchCoordinateMove - touchCoordinateStart, "px)");
      }
    });
    document.querySelector("main").addEventListener("touchend", function (e) {
      touchCoordinateEnd = Math.floor(e.changedTouches[0].clientX);

      if (touchCoordinateEnd < touchCoordinateStart - deleteButtonWidth / 2) {
        touchElement.style.transform = "translateX(-".concat(deleteButtonWidth, "px)");
      } else {
        touchElement.style.transform = "translateX(".concat(e.target.offsetLeft, ")");
      }
    });
    document.querySelector("section").addEventListener("click", function (e) {
      if (e.target != deleteButtonWidth) {
        document.querySelector("section").classList.add("animate__fadeOutLeft");
        setTimeout(function () {
          document.querySelector("section").classList.add("collapsed");
        }, 800);
        setTimeout(function () {
          document.querySelector("section").remove();
        }, 1200);
      }
    });
  });
});
/* touchElement.addEventListener("touchmove", (e) => {
    touchCoordinateMove = Math.floor(e.touches[0].clientX);
    if (
        touchCoordinateMove < touchCoordinateStart &&
        touchCoordinateMove > touchCoordinateStart - deleteButtonWidth
    ) {
        touchElement.style.transform = `translateX(${touchCoordinateMove - touchCoordinateStart}px)`
    }
});

touchElement.addEventListener("click", () => {
    section.style.display = "none"  */
//fungerer på første element, både inden og udenfor axios

/* }); */
//jeg tænker jeg skal lave et loop... MEN HVIKLETTTTTTT