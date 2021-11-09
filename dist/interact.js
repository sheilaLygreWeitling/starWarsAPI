"use strict";

var touchCoordinateStart;
var touchCoordinateMove;
var touchCoordinateEnd;
var touchElement;
var parentElement;
var deleteButtonWidth = window.screen.width * 40 / 100;
var recycle = JSON.parse(localStorage.getItem('deletedItems'));
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

  parentElement.querySelector(".animate__animated-recycledItem").onclick = function (e) {
    var userObject = {
      id: parentElement.id,
      name: parentElement.querySelector(".animate__animated-jokeItem").textContent
    };
    recycle = recycle.filter(function (item) {
      return userObject.id != item.id;
    });
    localStorage.setItem("deletedItems", JSON.stringify(recycle));
    parentElement.classList.add("animate__fadeOutLeft");
    setTimeout(function () {
      parentElement.classList.add("collapsed");
    }, 800);
    setTimeout(function () {
      parentElement.remove();
    }, 900);
  };
});
/* trash = trash.filter((item) => userObject.id != JSON.parse(item).id); */
//skaber et nyt array, det filtrer det klikkede objekt væk og laver en ny array uden det klikkede objekt. 

/* if (!trash.includes(JSON.stringify(userObject))) {
    trash.splice(JSON.stringify(deletedItemID));
}; */