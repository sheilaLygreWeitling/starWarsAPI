let deletedItems = JSON.parse(localStorage.getItem("deletedItems"));

deletedItems.forEach((deletedItem) => {
    const mainJoke = document.querySelector(".Main");

    let joke = document.createTextNode(deletedItem.name);

    let jokeSectionAnimate__animated = document.createElement("section");
    jokeSectionAnimate__animated.classList.add("animate__animated");//class på "jokeSectionAnimate__animated", som er "section"
    jokeSectionAnimate__animated.setAttribute("id", deletedItem.id);//Her sætter vi en identifier(id), på "section"

    let jokeAnimate__animatedRecycledItem = document.createElement("div");
    jokeAnimate__animatedRecycledItem.classList.add("animate__animated-recycledItem");

    let jokeAnimate__animatedJokeItem = document.createElement("article");
    jokeAnimate__animatedJokeItem.classList.add("animate__animated-jokeItem");

    jokeSectionAnimate__animated.appendChild(jokeAnimate__animatedRecycledItem);
    jokeSectionAnimate__animated.appendChild(jokeAnimate__animatedJokeItem)
    mainJoke.appendChild(jokeSectionAnimate__animated)
    jokeAnimate__animatedJokeItem.appendChild(joke)

});
