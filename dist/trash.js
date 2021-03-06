"use strict";

var recycle = JSON.parse(localStorage.getItem("animate__animated-deleteItem"));
recycle.forEach(function (recycledItem) {
  var parseRecycledItemJoke = JSON.parse(recycledItem);
  var mainJoke = document.querySelector(".Main");
  var joke = document.createTextNode(user.name);
  var jokeSectionAnimate__animated = document.createElement("section");
  jokeSectionAnimate__animated.classList.add("animate__animated"); //class på "jokeSectionAnimate__animated", som er "section"

  jokeSectionAnimate__animated.setAttribute("id", key); //Her sætter vi en identifier(id), på "section"

  var jokeAnimate__animatedRecycledItem = document.createElement("div");
  jokeAnimate__animatedRecycledItem.classList.add("animate__animated-recycledItem");
  var jokeAnimate__animatedJokeItem = document.createElement("article");
  jokeAnimate__animatedJokeItem.classList.add("animate__animated-jokeItem");
  var trashIconDiv = document.createElement("div");
  trashIconDiv.classList.add("trashIconDiv");
  var trashIcon = document.createElement("a");
  trashIcon.classList.add("fas", "fa-trash-alt");
  jokeSectionAnimate__animated.appendChild(jokeAnimate__animatedRecycledItem);
  jokeSectionAnimate__animated.appendChild(jokeAnimate__animatedJokeItem);
  mainJoke.appendChild(jokeSectionAnimate__animated);
  jokeAnimate__animatedJokeItem.appendChild(joke);
  trashIconDiv.appendChild(trashIcon);
});