import darkStyle from './darkStyle.js';
import tableStyle from './tableStyle.js';

/**
 *
 * @param {Object} data
 * @param {string} OnOff
 * @param {HTMLElement} tableDiv
 */
export default function movesCreate(data, OnOff, tableDiv) {
  var movesTable = document.getElementById('movesTable');
  if (movesTable != null) {
    movesTable.remove();
  }

  // Check for existing moves table, clear if exists
  // RNG in range of available moves list
  // Exclude duplicates, add to table
  var movesTable = document.createElement('table');
  movesTable.id = 'movesTable';
  if (OnOff.value == 'Off') {
    tableStyle(movesTable);
  } else {
    darkStyle(movesTable);
  }
  movesTable.style.padding = '0px 20 px';
  movesTable.style.margin = 'auto';

  for (var i = 0; i < 2; i++) {
    var trow = movesTable.insertRow(-1);
    for (var j = 0; j < 2; j++) {
      var movesMax = data.moves.length;
      var randMove = Math.floor(Math.random() * movesMax);
      var moveIN = data.moves[randMove];
      var cell = trow.insertCell(-1);
      cell.innerHTML = moveIN.move.name;
      data.moves.splice(randMove, 1);
      console.log(cell.innerHTML);
    }
  }
  tableDiv.appendChild(movesTable);
  return;
}

