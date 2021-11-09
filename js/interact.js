let touchCoordinateStart;
let touchCoordinateMove;
let touchCoordinateEnd;
let touchElement;
let parentElement;
let deleteButtonWidth = (window.screen.width * 40) / 100;
let recycle = JSON.parse(localStorage.getItem('deletedItems'));

document.querySelector("main").addEventListener("touchstart", (e) => {
    if (e.target.tagName === "ARTICLE") {
        touchElement = e.target;
        parentElement = e.target.closest("section");
        touchCoordinateStart = e.touches[0].clientX;

        touchElement.addEventListener("touchmove", (e) => {
            if (touchElement.tagName === "ARTICLE") {
                touchCoordinateMove = Math.floor(e.touches[0].clientX);
                if (touchCoordinateMove < touchCoordinateStart && touchCoordinateMove > touchCoordinateStart - deleteButtonWidth) {
                    touchElement.style.transform = `translateX(${touchCoordinateMove - touchCoordinateStart}px)`
                }
            }
        });

        touchElement.addEventListener("touchend", (e) => {
            if (touchElement.tagName == "ARTICLE") {
                touchCoordinateEnd = Math.floor(e.changedTouches[0].clientX);
                if (touchCoordinateEnd < touchCoordinateStart - deleteButtonWidth / 2) {
                    touchElement.style.transform = `translateX(-${deleteButtonWidth}px)`;
                } else {
                    touchElement.style.transform = `translateX(0)`;
                }
            }
        });

        parentElement.querySelector(".animate__animated-recycledItem").onclick = (e) => {
            let userObject = {
                id: parentElement.id,
                name: parentElement.querySelector(".animate__animated-jokeItem").textContent,
            };
            recycle = recycle.filter((item) => userObject.id != item.id);

            if (recycle.length > 0) {
                localStorage.setItem("deletedItems", JSON.stringify(recycle));
            } else {
                localStorage.clear();
            }

            parentElement.classList.add("animate__fadeOutLeft")
            setTimeout(() => {
                parentElement.classList.add("collapsed");
            }, 800);
            setTimeout(() => {
                parentElement.remove();
            }, 900);
        };
    };
});