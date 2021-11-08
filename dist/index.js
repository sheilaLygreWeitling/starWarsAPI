"use strict";

var touchCoordinateStart;
var touchCoordinateMove;
var touchCoordinateEnd;
var touchElement;
var parentElement;
var deleteButtonWidth = window.screen.width * 40 / 100;
var trash = [];
document.querySelector("main").addEventListener("touchstart", function (e) {
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
  parentElement.querySelector(".animate__animated-recycledItem").addEventListener("click", function (e) {
    var userObject = {
      id: parentElement.id,
      name: parentElement.querySelector(".animate__animated-jokeItem").textContent
    };

    if (!trash.includes(JSON.stringify(userObject))) {
      trash.push(JSON.stringify(userObject));
    }

    ;
    localStorage.setItem(".animate__animated-recycledItem", JSON.stringify(trash));
    parentElement.classList.add("animate__fadeOutLeft");
    /*         console.log(localStorage); */

    setTimeout(function () {
      parentElement.classList.add("collapsed");
    }, 800);
    setTimeout(function () {
      parentElement.remove();
    }, 900);
  });
});