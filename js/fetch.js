axios.get("https://jsonplaceholder.typicode.com/users/").then((response) => {
    const users = response.data;

    users.forEach((user) => {
        const mainJoke = document.querySelector(".Main");

        let joke = document.createTextNode(user.name);

        let jokeSectionAnimate__animated = document.createElement("section");
        jokeSectionAnimate__animated.classList.add("animate__animated");//class på "jokeSectionAnimate__animated", som er "section"
        jokeSectionAnimate__animated.setAttribute("id", user.id);//Her sætter vi en identifier(id), på "section"

        let jokeAnimate__animatedDeleteItem = document.createElement("div");
        jokeAnimate__animatedDeleteItem.classList.add("animate__animated-deleteItem");

        let jokeAnimate__animatedJokeItem = document.createElement("article");
        jokeAnimate__animatedJokeItem.classList.add("animate__animated-jokeItem");

        jokeSectionAnimate__animated.appendChild(jokeAnimate__animatedDeleteItem);
        jokeSectionAnimate__animated.appendChild(jokeAnimate__animatedJokeItem)
        mainJoke.appendChild(jokeSectionAnimate__animated)
        jokeAnimate__animatedJokeItem.appendChild(joke)
    });
});

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
        let userid = parentElement.id
        /*   let retrieveObject = localStorage.getItem(`${userid}`);
        localStorage.setItem(
            `${userid}`,
            `${parentElement.document.querySelector(".animate__animated-jokeItem")}`
          ) */
        parentElement.classList.add("animate__fadeOutLeft");
        setTimeout(() => {
            parentElement.classList.add("collapsed");
        }, 800);
        setTimeout(() => {
            parentElement.remove();
        }, 900);
    });
});

/* if (e.target != deleteButtonWidth) {
    document.querySelector("section").classList.add("animate__fadeOutLeft");
    setTimeout(() => {
        document.querySelector("section").classList.add("collapsed");
    }, 800);
    setTimeout(() => {
        document.querySelector("section").remove();
    }, 1200);
} */



/* touchElement.addEventListener("touchmove", (e) => {
    touchCoordinateMove = Math.floor(e.touches[0].clientX);
    if (
        touchCoordinateMove < touchCoordinateStart &&
        touchCoordinateMove > touchCoordinateStart - deleteButtonWidth
    ) {
        touchElement.style.transform = `translateX(${touchCoordinateMove - touchCoordinateStart}px)`
    }
});

touchElement.addEventListener("click", () => {
    section.style.display = "none"  *///fungerer på første element, både inden og udenfor axios
/* }); */
//jeg tænker jeg skal lave et loop... MEN HVIKLETTTTTTT

