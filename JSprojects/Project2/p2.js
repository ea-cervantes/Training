import fetchPoke from './fetchPoke.js';

let currPoke = document.getElementById("tempIMG");
// test is stand in for fetched image
let test = document.getElementById("headerIMG");
// let nextPoke = json_image;

// declare current image description text
let about = document.getElementById("about");



let button = document.querySelector("button");
console.log("button", button);
button.addEventListener("click", (e) => {
    console.log("click", e)
    // 1. RNG in fetchPoke 
    var dexNum = Math.ceil((Math.random() * 386));
    //console.log(dexNum);
    // 2. Pull API data for pokedex search
    var pokeSearch = new fetchPoke();
    var dexURL = pokeSearch.url(dexNum); // get url for RNG pokedex entry
    var pokeData = pokeSearch.pull(dexURL);
    console.log(pokeData.)
    //var dataText = JSON.parse(dataJSON);
    // 3. Retrieve relevant images/text from json data
        // Name - JSON/name
        // Img - JSON/sprites/front_default (maybe add 1/10000 chance of shiny sprite lol)
        //console.log(dataText.name)
    // 4. Update images and text
    test.src = currPoke.src;
    //about.textContent = json.textconttent
})