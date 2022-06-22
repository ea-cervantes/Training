import fetchPoke from './fetchPoke.js';
import tableStyle from './tableStyle.js';
import typeStyle from './typeStyle.js'



// import main elements from html for manip
let currPoke = document.getElementById("tempIMG");
let pokeName = document.getElementById("pokeName");
let about = document.getElementById("about");
let tableDiv = document.getElementById("aboutDiv");
let satsDiv = document.getElementById("statsDiv");
let dexNO = document.getElementById("dexNO");
let dexHeader = document.getElementById("pokedexHeader");

let button = document.querySelector("button");
console.log("button", button);
button.addEventListener("click", (e) => {
    console.log("click", e)

    // 1. RNG for pokedex entries Gen 1-3
    var dexNum = Math.ceil((Math.random() * 386));
    //console.log(dexNum);
    // 2. Start API data fetch for pokedex search
    var pokeSearch = new fetchPoke();
    var dexURL = pokeSearch.url(dexNum); // get url for RNG pokedex entry

    // Async function to execute API request
    var pokeJSON = async () => {
        pokeSearch.pull(dexURL).then(onMasterball, onEscape);
        console.log(pokeSearch.pull(dexURL));
    }
    // .then() condition for succesfully fufilled Promise
    var onMasterball = (data) => {
        // Update text content with pokemon name
        pokeName.textContent = data.name.toUpperCase();
        // Update placeholder image with pokemon sprite
        // Chance of getting a shiny!
        var shinyLim = 100;
        var chancey = Math.ceil(Math.random() * 10000);
        if (shinyLim >= chancey) {
            currPoke.src = data.sprites.front_shiny;
        }
        else {
            currPoke.src = data.sprites.front_default;
        }
        // 
        dexNO.textContent = 'National Dex No.';
        dexNO.append(dexNum);
        tableStyle(currPoke);
        currPoke.style.width = '250px';
        currPoke.style.height = '200px';


        var movesTable = document.getElementById("movesTable")
        if (movesTable != null) {
            movesTable.remove();
        }

        // Check for existing moves table, clear if exists
        // RNG in range of available moves list
        // Exclude duplicates, add to table
        var movesTable = document.createElement("table");
        movesTable.id = "movesTable";
        tableStyle(movesTable);
        movesTable.style.padding = "0px 20 px";
        movesTable.style.margin = "auto";

        var ind = 0;
        for (var i = 0; i < 2; i++) {
            var trow = movesTable.insertRow(-1);
            for (var j = 0; j < 2; j++) {
                var movesMax = data.moves.length;
                var randMove = Math.floor(Math.random() * movesMax);
                var moveIN = data.moves[randMove]
                var cell = trow.insertCell(-1);
                cell.innerHTML = moveIN.move.name;
                data.moves.splice(randMove, 1);

                console.log(cell.innerHTML);
                ind++;
            }
        }
        tableDiv.appendChild(movesTable);

        // Check for type table, clear existing table, create and fill
        var typeTab = document.getElementById("typeTab");
        if (typeTab != null) {
            typeTab.remove();
        }
        var typeTab = document.createElement("table");
        typeTab.id = "typeTab";
        typeTab.style.color = "white";
        typeTab.style.margin = "auto";

        var ttrow = typeTab.insertRow(-1);
        var typeTabLen = data.types.length;
        for (var i = 0; i < typeTabLen; i++) {
            var cell = ttrow.insertCell(-1);
            cell.innerHTML = data.types[i].type.name;
            cell.style.backgroundColor = typeStyle(data.types[i].type.name);
        }

        dexHeader.appendChild(typeTab);
        tableStyle(dexHeader);
        dexHeader.style.textAlign = "center";
        dexHeader.style.alignContent = "center";
        dexHeader.style.padding = "10px";

        // Check for stats table, clear existing table, create and fill

        var statsTab = document.getElementById("statsTable");
        if (statsTab != null) {
            statsTab.remove();
        }
        var statsTab = document.createElement("table");
        statsTab.id = "statsTable";
        var statsLen = 6;
        var statsSum = 0;
        for (var i = 0; i < statsLen; i++) {
            var strow = statsTab.insertRow(-1);
            var cell = strow.insertCell(-1);
            cell.innerHTML = data.stats[i].stat.name;
            var cell = strow.insertCell(-1);
            cell.innerHTML = data.stats[i].base_stat;
            statsSum = statsSum + data.stats[i].base_stat;
            if (i == 5) {
                var strow = statsTab.insertRow(-1);
                var cell = strow.insertCell(-1);
                cell.innerHTML = "sum";
                var cell = strow.insertCell(-1);
                cell.innerHTML = statsSum;
            }
        }
        tableStyle(statsTab);
        satsDiv.appendChild(statsTab);


        // remove about blurb from initial screen
        if (about != null) {
            about.remove();
        }


    }

    // .then() condition for unfulfilled promise
    var onEscape = (error) => {
        console.log(error);
    }
    // Execute API fetch
    pokeJSON();
})