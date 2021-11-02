/* let list = document.querySelector(".Article__p")
const jokes = []; */

let jokeItem = document.querySelector(".animate__animated-jokeItem");

let touchCoordinateStart;
let touchCoordinateMove;
let touchCoordinateEnd;

let deleteButtonWidth = (window.screen.width * 40) / 100;

document.querySelector(".animate__animated-deleteItem").addEventListener("click", () => {
    document.querySelector(".animate__animated").classList.add("animate__fadeOutLeft");//når den grønne boks er faded ud til venstre
    setTimeout(() => { //efter 800 milisekunder, skal "section" bruge class "collapsed"
        document.querySelector(".animate__animated").classList.add("collapsed"); //der er lavet en class i SCSS der hedder collapsed
    }, 800);
    setTimeout(() => {
        document.querySelector(".animate__animated").remove();//efter 2200 milisekunder, så bruger vi querySelector til at fjerne section
    }, 2200);
});

jokeItem.addEventListener('touchstart', (e) => {
    touchCoordinateStart = e.touches[0].clientX;
});

jokeItem.addEventListener('touchmove', (e) => {
    touchCoordinateMove = Math.floor(e.touches[0].clientX);
    //console.log(`${touchCordinateMove - touchCordinateStart}`)

    if (touchCoordinateMove < touchCoordinateStart &&
        touchCoordinateMove > touchCoordinateStart - deleteButtonWidth) {
        jokeItem.style.transform = `translateX(${touchCoordinateMove - touchCoordinateStart}px)`;
    }
});

jokeItem.addEventListener('touchend', (e) => {
    touchCoordinateEnd = Math.floor(e.changedTouches[0].clientX);

    if (touchCoordinateEnd < touchCoordinateStart - deleteButtonWidth / 2) {
        jokeItem.style.transform = `translateX(-${deleteButtonWidth}px)`;
    } else {
        jokeItem.style.transform = `translateX(${e.target.offsetLeft})`;
    }
});






/* for (let index = 0; index < 10; index++) {
    axios.get("https://icanhazdadjoke.com/", {
        headers: {
            accept: 'application/json'
        }
    })
        .then(response => {
            jokes.push({
                id: response.data.id, joke: response.data.joke
            })
        })

}
console.log(jokes); */

/* jokes.forEach(element => {
    console.log(element);
}); */

/*
jokes.push({
    id: response.data.id, joke: response.data.joke
});
console.log(jokes);

            list.textContent = response.data.joke
            console.log(response.data.joke);
*/




/* Hvis man skal hente API'et flere gange, så kan man lave en function udenom
const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(response => {
        const users = response.data.data;
        console.log(`GET users`, users);
    })
        .catch(error => console.error(error));
};

getUsers();
*/