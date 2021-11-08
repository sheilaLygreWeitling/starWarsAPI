let touchCoordinateStart;
let touchCoordinateMove;
let touchCoordinateEnd;
let touchElement;
let parentElement;
let deleteButtonWidth = (window.screen.width * 40) / 100;

let deletedItems = window.localStorage;
let trash = [];

document.querySelector("main").addEventListener("touchstart", (e) => {
    touchElement = e.target;
    parentElement = e.target.parentElement;
    touchCoordinateStart = e.touches[0].clientX;

    touchElement.addEventListener("touchmove", (e) => {
        touchCoordinateMove = Math.floor(e.touches[0].clientX);
        if (touchCoordinateMove < touchCoordinateStart && touchCoordinateMove > touchCoordinateStart - deleteButtonWidth) {
            touchElement.style.transform = `translateX(${touchCoordinateMove - touchCoordinateStart}px)`
        }
    });

    touchElement.addEventListener("touchend", (e) => {
        touchCoordinateEnd = Math.floor(e.changedTouches[0].clientX);
        if (touchCoordinateEnd < touchCoordinateStart - deleteButtonWidth / 2) {
            touchElement.style.transform = `translateX(-${deleteButtonWidth}px)`;
        } else {
            touchElement.style.transform = `translateX(0)`;
        }
    });

    parentElement.querySelector(".animate__animated-deleteItem").addEventListener("click", (e) => {
        let userObject = {
            id: parentElement.id,
            name: parentElement.querySelector(".animate__animated-jokeItem").textContent,
        };
        if (!trash.includes(JSON.stringify(userObject))) {
            trash.push(JSON.stringify(userObject));
        };
        localStorage.setItem("animate__animated-deleteItem", JSON.stringify(trash));
        parentElement.classList.add("animate__fadeOutLeft")
        /*         console.log(localStorage); */
        setTimeout(() => {
            parentElement.classList.add("collapsed");
        }, 800);
        setTimeout(() => {
            parentElement.remove();
        }, 900);
    });
});