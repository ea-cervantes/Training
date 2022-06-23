import darkStyle from './darkStyle.js';
import tableStyle from './tableStyle.js';

/**
 * @param {string} OnOff
 * @return {string}
 */
export default function darkMode(OnOff) {
  const page = document.getElementsByTagName('body')[0];
  const currPoke = document.getElementById('tempIMG');
  const movesTable = document.getElementById('movesTable');
  const dexHeader = document.getElementById('pokedexHeader');
  const statsTable = document.getElementById('statsTable');
  const about = document.getElementById('about');
  // let all = {page,currPoke,movesTable,dexHeader,statsTable};

  // console.log(all);
  if (OnOff.value == 'On') {
    page.style.backgroundColor = '#20B2AA';

    // darkStyle(all.keys()); object manipulation help pls
    if (about == null) {
      tableStyle(currPoke);
      tableStyle(movesTable);
      tableStyle(dexHeader);
      tableStyle(statsTable);
      dexHeader.style.textAlign = 'center';
      dexHeader.style.alignContent = 'center';
      dexHeader.style.padding = '10px';
    }
    OnOff.value = 'Off';
  } else {
    page.style.backgroundColor = '#1F2125';
    if (about == null) {
      darkStyle(currPoke);
      darkStyle(movesTable);
      darkStyle(dexHeader);
      darkStyle(statsTable);
      dexHeader.style.textAlign = 'center';
      dexHeader.style.alignContent = 'center';
      dexHeader.style.padding = '10px';
    }
    OnOff.value = 'On';
  }
  console.log(OnOff);
  return OnOff;
}
