"use strict";

var touchCoordinateStart;
var touchCoordinateMove;
var touchCoordinateEnd;
var touchElement;
var parentElement;
var deleteButtonWidth = window.screen.width * 40 / 100;
var recycle = JSON.parse(localStorage.getItem('deletedItems'));
document.querySelector("main").addEventListener("touchstart", function (e) {
  if (e.target.tagName === "ARTICLE") {
    touchElement = e.target;
    parentElement = e.target.closest("section");
    touchCoordinateStart = e.touches[0].clientX;
    touchElement.addEventListener("touchmove", function (e) {
      if (touchElement.tagName === "ARTICLE") {
        touchCoordinateMove = Math.floor(e.touches[0].clientX);

        if (touchCoordinateMove < touchCoordinateStart && touchCoordinateMove > touchCoordinateStart - deleteButtonWidth) {
          touchElement.style.transform = "translateX(".concat(touchCoordinateMove - touchCoordinateStart, "px)");
        }
      }
    });
    touchElement.addEventListener("touchend", function (e) {
      if (touchElement.tagName == "ARTICLE") {
        touchCoordinateEnd = Math.floor(e.changedTouches[0].clientX);

        if (touchCoordinateEnd < touchCoordinateStart - deleteButtonWidth / 2) {
          touchElement.style.transform = "translateX(-".concat(deleteButtonWidth, "px)");
        } else {
          touchElement.style.transform = "translateX(0)";
        }
      }
    });

    parentElement.querySelector(".animate__animated-recycledItem").onclick = function () {
      var userObject = {
        id: parentElement.id,
        name: parentElement.querySelector(".animate__animated-jokeItem").textContent
      };
      /*             recycle.push(userObject); */

      localStorage.setItem("deletedItems", JSON.stringify(recycle));
      parentElement.querySelector(".animate__animated-recycledItem").onclick = null;
      parentElement.classList.add("animate__fadeOutLeft");
      setTimeout(function () {
        parentElement.classList.add("collapsed");
      }, 800);
      setTimeout(function () {
        parentElement.remove();
      }, 900);
    };
  }

  ;
});