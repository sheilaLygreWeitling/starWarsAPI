let touchCoordinateStart;
let touchCoordinateMove;
let touchCoordinateEnd;
let touchElement;
let parentElement;
let deleteButtonWidth = (window.screen.width * 40) / 100;
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

    parentElement.querySelector(".animate__animated-recycledItem").addEventListener("click", (e) => {
        let deletedItemID = e.target.parentElement.id;
        let userObject = {
            id: parentElement.id,
            name: parentElement.querySelector(".animate__animated-jokeItem").textContent,
        };


        /* trash = trash.filter((item) => userObject.id != JSON.parse(item).id); */
        //skaber et nyt array, det filtrer det klikkede objekt væk og laver en ny array uden det klikkede objekt. 
        /* if (!trash.includes(JSON.stringify(userObject))) {
            trash.splice(JSON.stringify(deletedItemID)); 
    }; */
        localStorage.setItem("animate__animated-recycledItem", JSON.stringify(trash));
        parentElement.classList.add("animate__fadeOutLeft")
        setTimeout(() => {
            parentElement.classList.add("collapsed");
        }, 800);
        setTimeout(() => {
            parentElement.remove();
        }, 900);
    });
});