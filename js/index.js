let touchCoordinateStart;
let touchCoordinateMove;
let touchCoordinateEnd;

let deleteButtonWidth = (window.screen.width * 40) / 100;

document.querySelector("main").addEventListener("touchstart", (e) => {
    /* let section = document.querySelector(".animate__animated") */
    /* let jokeItem = document.querySelector(".animate__animated-jokeItem") */
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
        const userid = parentElement.id
        const animate__animatedDeleteItemButton = document.querySelector(".animate__animated-deleteItem");
        const lsOutput = document.querySelector(".localStorageOutput")

        function deleteJokeButton() {
            const deleteButton = animate__animatedDeleteItemButton.value;
            const userID = userid.value;

            if (deleteButton && userID) {
                localStorage.setItem(userID, deleteButton);
                location.reload();
            }
        } deleteJokeButton();

        for (let index = 0; index < localStorage.length; index++) {
            const userID = localStorage.key(index);
            const deleteButton = localStorage.getItem(userID);

            lsOutput.innerHTML += `${deleteButton}`

        }


        parentElement.classList.add("animate__fadeOutLeft");
        setTimeout(() => {
            parentElement.classList.add("collapsed");
        }, 800);
        setTimeout(() => {
            parentElement.remove();
        }, 900);
    });
});