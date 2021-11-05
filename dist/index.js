"use strict";

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
  touchElement.addEventListener("touchmove", function (e) {
    touchCoordinateMove = Math.floor(e.touches[0].clientX);

    if (touchCoordinateMove < touchCoordinateStart && touchCoordinateMove > touchCoordinateStart - deleteButtonWidth) {
      touchElement.style.transform = "translateX(".concat(touchCoordinateMove - touchCoordinateStart, "px)");
    }
  });
  touchElement.addEventListener("touchend", function (e) {
    touchCoordinateEnd = Math.floor(e.changedTouches[0].clientX);

    if (touchCoordinateEnd < touchCoordinateStart - deleteButtonWidth / 2) {
      touchElement.style.transform = "translateX(-".concat(deleteButtonWidth, "px)");
    } else {
      touchElement.style.transform = "translateX(0)";
    }
  });
  parentElement.querySelector(".animate__animated-deleteItem").addEventListener("click", function (e) {
    var userid = parentElement.id;
    var animate__animatedDeleteItemButton = document.querySelector(".animate__animated-deleteItem");
    var lsOutput = document.querySelector(".localStorageOutput");

    function deleteJokeButton() {
      var deleteButton = animate__animatedDeleteItemButton.value;
      var userID = userid.value;

      if (deleteButton && userID) {
        localStorage.setItem(userID, deleteButton);
        location.reload();
      }
    }

    deleteJokeButton();

    for (var index = 0; index < localStorage.length; index++) {
      var userID = localStorage.key(index);
      var deleteButton = localStorage.getItem(userID);
      lsOutput.innerHTML += "".concat(deleteButton);
    }

    parentElement.classList.add("animate__fadeOutLeft");
    setTimeout(function () {
      parentElement.classList.add("collapsed");
    }, 800);
    setTimeout(function () {
      parentElement.remove();
    }, 900);
  });
});