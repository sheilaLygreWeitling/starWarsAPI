axios.get("https://jsonplaceholder.typicode.com/users/").then((response) => {
    const users = response.data;

    users.forEach((user) => {
        const mainJoke = document.querySelector(".Main");

        let joke = document.createTextNode(user.name);

        let jokeSectionAnimate__animated = document.createElement("section");
        jokeSectionAnimate__animated.classList.add("animate__animated");//class på "jokeSectionAnimate__animated", som er "section"
        jokeSectionAnimate__animated.setAttribute("id", user.id);//Her sætter vi en identifier(id), på "section"

        let jokeAnimate__animatedRecycledItem = document.createElement("div");
        jokeAnimate__animatedRecycledItem.classList.add("animate__animated-recycledItem");

        let jokeAnimate__animatedJokeItem = document.createElement("article");
        jokeAnimate__animatedJokeItem.classList.add("animate__animated-jokeItem");

        let trashIconDiv = document.createElement("div");
        trashIconDiv.classList.add("trashIconDiv");

        let trashIcon = document.createElement("a");
        trashIcon.classList.add("fas", "fa-trash-alt")

        jokeSectionAnimate__animated.appendChild(jokeAnimate__animatedRecycledItem);
        jokeSectionAnimate__animated.appendChild(jokeAnimate__animatedJokeItem)
        mainJoke.appendChild(jokeSectionAnimate__animated)
        jokeAnimate__animatedJokeItem.appendChild(joke)
        trashIconDiv.appendChild(trashIcon)
    });
});




