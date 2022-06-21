import fetchPoke from './fetchPoke.js';
import typeStyle from './typeStyle.js'

let currPoke = document.getElementById("tempIMG");

// declare current image description text
let pokeName = document.getElementById("pokeName");
let about = document.getElementById("about");
let tableDiv = document.getElementById("aboutDiv");
let satsDiv = document.getElementById("statsDiv");
let typeDiv = document.getElementById('typeBar');
let dexNO = document.getElementById("dexNO");

let button = document.querySelector("button");
console.log("button", button);
button.addEventListener("click", (e) => {
    console.log("click", e)

    // 1. RNG in fetchPoke 
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
        dexNO.textContent = 'National Dex No.';
        dexNO.append(dexNum);
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
        movesTable.style.border = "thin solid #92C6F4";
        movesTable.style.borderWidth = "3px 5px";
        movesTable.style.borderRadius = "10px"
        movesTable.style.color = "black";
        movesTable.style.backgroundColor = "white";
        movesTable.style.width = "400px"
        movesTable.style.padding = "0px 20 px"
        movesTable.style.margin = "auto"

        var ind = 0;
        for (var i = 0; i < 2; i++) {
            var trow = movesTable.insertRow(-1);
            for (var j = 0; j < 2; j++) {
                var movesMax = data.moves.length;
                var randMove = Math.floor(Math.random() * movesMax);
                var moveIN = data.moves[randMove]
                var cell = trow.insertCell(-1);
                cell.innerHTML = moveIN.move.name;
                data.moves.splice(randMove,1);

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

        typeTab.style.border = "thin solid #92C6F4";
        typeTab.style.borderWidth = "3px 5px";
        typeTab.style.borderRadius = "10px"
        typeTab.style.backgroundColor = "white";
        typeTab.style.color = "white";
        typeTab.style.textAlign = "center";


        var ttrow = typeTab.insertRow(-1);
        var typeTabLen = data.types.length;
        for (var i = 0; i < typeTabLen; i++) {
            var cell = ttrow.insertCell(-1);
            cell.innerHTML = data.types[i].type.name;
            cell.style.backgroundColor = typeStyle(data.types[i].type.name);
        }

        typeDiv.appendChild(typeTab);

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
            if(i==5){
                var strow = statsTab.insertRow(-1);
                var cell = strow.insertCell(-1);
                cell.innerHTML = "sum";
                var cell = strow.insertCell(-1);
                cell.innerHTML = statsSum;
            }
        }

        statsTab.style.textAlign = "left";
        statsTab.style.border = "thin solid #92C6F4";
        statsTab.style.borderWidth = "3px 5px";
        statsTab.style.borderRadius = "10px"
        statsTab.style.backgroundColor = "white";
        statsTab.style.color = "black";
        statsTab.style.width = "400px"
        statsTab.style.marginInline = "auto";
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