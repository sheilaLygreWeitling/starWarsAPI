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
    let section = document.querySelector(".animate__animated")
    /* let jokeItem = document.querySelector(".animate__animated-jokeItem") */
    touchElement = e.target;
    touchCoordinateStart = e.touches[0].clientX;

    touchElement.addEventListener("touchmove", (e) => {
        touchCoordinateMove = Math.floor(e.touches[0].clientX);
        if (
            touchCoordinateMove < touchCoordinateStart &&
            touchCoordinateMove > touchCoordinateStart - deleteButtonWidth
        ) {
            touchElement.style.transform = `translateX(${touchCoordinateMove - touchCoordinateStart}px)`
        }
    });

    touchElement.addEventListener("click", () => {
        section.style.display = "none" //fungerer på første element, både inden og udenfor axios
    }); //jeg tænker jeg skal lave et loop... MEN HVIKLETTTTTTT
});

