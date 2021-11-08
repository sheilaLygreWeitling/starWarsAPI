"use strict";

var deletedItemJoke = JSON.parse(localStorage.getItem("animate__animated-deleteItem"));
deletedItemJoke.forEach(function (deletedItemsJokes, key) {
  var parseDeletedItemJoke = JSON.parse(deletedItemsJokes);
  var mainJoke = document.querySelector(".Main");
  var joke = document.createTextNode(user.name);
  var jokeSectionAnimate__animated = document.createElement("section");
  jokeSectionAnimate__animated.classList.add("animate__animated"); //class på "jokeSectionAnimate__animated", som er "section"

  jokeSectionAnimate__animated.setAttribute("id", key); //Her sætter vi en identifier(id), på "section"

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
/* const mainJoke = document.querySelector(".Main");

let joke = document.createTextNode(user.name);

let jokeSectionAnimate__animated = document.createElement("section");
jokeSectionAnimate__animated.classList.add("animate__animated");//class på "jokeSectionAnimate__animated", som er "section"
jokeSectionAnimate__animated.setAttribute("id", user.id);//Her sætter vi en identifier(id), på "section"

let jokeAnimate__animatedDeleteItem = document.createElement("div");
jokeAnimate__animatedDeleteItem.classList.add("animate__animated-deleteItem");

let jokeAnimate__animatedJokeItem = document.createElement("article");
jokeAnimate__animatedJokeItem.classList.add("animate__animated-jokeItem");

let localStorageOutoutFieldset = document.createElement("fieldset");
localStorageOutoutFieldset.classList.add("localStorageOutput")

let legendFieldset = document.createElement("legend")
legendFieldset.classList.add("legend")



jokeSectionAnimate__animated.appendChild(jokeAnimate__animatedDeleteItem);
jokeSectionAnimate__animated.appendChild(jokeAnimate__animatedJokeItem)
mainJoke.appendChild(jokeSectionAnimate__animated)
jokeAnimate__animatedJokeItem.appendChild(joke)
 */

/* deletedItems.forEach(element => {
    let result = JSON.parse(element);

}); */