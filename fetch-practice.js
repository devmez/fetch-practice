let fetch = require("node-fetch");

fetch(`https://pokeapi.co/api/v2/pokemon`)
  .then(response => {
    if (response.ok) {
      console.log(`SUCCESS`);
    } else {
      console.log(`Failure to fetch from API url.`);
    }

    console.log(response);

    response.json();
  })
  .then(data => {});
