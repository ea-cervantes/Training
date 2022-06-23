import darkStyle from './darkStyle.js';
import tableStyle from './tableStyle.js';

/**
 *
 * @param {Object} data
 * @param {string} OnOff
 * @param {HTMLElement} statsDiv
 */
export default function statsCreate(data, OnOff, statsDiv) {
  var statsTab = document.getElementById('statsTable');
  if (statsTab != null) {
    statsTab.remove();
  }
  var statsTab = document.createElement('table');
  statsTab.id = 'statsTable';
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
      cell.innerHTML = 'sum';
      var cell = strow.insertCell(-1);
      cell.innerHTML = statsSum;
    }
  }
  if (OnOff.value == 'Off') {
    tableStyle(statsTab);
  } else {
    darkStyle(statsTab);
  }

  statsDiv.appendChild(statsTab);
  return;
}
