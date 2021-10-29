"use strict";

var list = document.querySelector(".Article__p");
var jokes = [];

for (var index = 0; index < 10; index++) {
  axios.get("https://icanhazdadjoke.com/", {
    headers: {
      accept: 'application/json'
    }
  }).then(function (response) {
    jokes.push({
      id: response.data.id,
      joke: response.data.joke
    });
  });
}

console.log(jokes);
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