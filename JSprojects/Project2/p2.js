import darkMode from './darkMode.js';
import dexEntryCreate from './dexEntryCreate.js';
import fetchPoke from './fetchPoke.js';
import movesCreate from './movesCreate.js';
import spriteUpdate from './spriteUpdate.js';
import statsCreate from './statsCreate.js';


// import main elements from html for manip
const currPoke = document.getElementById('tempIMG');
const about = document.getElementById('about');
const tableDiv = document.getElementById('aboutDiv');
const statsDiv = document.getElementById('statsDiv');
const dexHeader = document.getElementById('pokedexHeader');

// event listener for toggling darkmode
const OnOff = document.getElementById('darkModeButton');
console.log(OnOff);
darkModeButton.addEventListener('click', (e) => {
  console.log('dark click');
  darkMode(OnOff);
});


const button = document.getElementById('dexButton');
console.log('dexButton', button);
button.addEventListener('click', (e) => {
  console.log('click', e);

  // 1. RNG for pokedex entries Gen 1-3
  var dexNum = Math.ceil((Math.random() * 386));
  // console.log(dexNum);
  // 2. Start API data fetch for pokedex search
  var pokeSearch = new fetchPoke();
  var dexURL = pokeSearch.url(dexNum); // get url for RNG pokedex entry

  // Async function to execute API request
  var pokeJSON = async () => {
    pokeSearch.pull(dexURL).then(onMasterball, onEscape);
    console.log(pokeSearch.pull(dexURL));
  };
  // .then() condition for succesfully fufilled Promise
  var onMasterball = (data) => {
    // function to change img for pokemon
    spriteUpdate(data, OnOff, currPoke);
    // create header for pokedex entry
    dexEntryCreate(data, OnOff, dexHeader, dexNum);

    // function to create moves table
    movesCreate(data, OnOff, tableDiv);

    // function to create stats table
    statsCreate(data, OnOff, statsDiv);

    // remove about blurb from initial screen
    if (about != null) {
      about.remove();
    }
  };
  // .then() condition for unfulfilled promise
  var onEscape = (error) => {
    console.log(error);
  };
  // Execute API fetch
  pokeJSON();
});
