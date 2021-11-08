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
    var trashIconDiv = document.createElement("div");
    trashIconDiv.classList.add("trashIconDiv");
    var trashIcon = document.createElement("a");
    trashIcon.classList.add("fas", "fa-trash-alt");
    jokeSectionAnimate__animated.appendChild(jokeAnimate__animatedDeleteItem);
    jokeSectionAnimate__animated.appendChild(jokeAnimate__animatedJokeItem);
    mainJoke.appendChild(jokeSectionAnimate__animated);
    jokeAnimate__animatedJokeItem.appendChild(joke);
    trashIconDiv.appendChild(trashIcon);
  });
});