import darkStyle from './darkStyle.js';
import tableStyle from './tableStyle.js';

/**
 *
 * @param {Object} data
 * @param {string} OnOff
 * @param {HTMLElement} currPoke
 */
export default function spriteUpdate(data, OnOff, currPoke) {
  // Update placeholder image with pokemon sprite
  // Chance of getting a shiny!
  var shinyLim = 100;
  var chancey = Math.ceil(Math.random() * 10000);
  if (shinyLim >= chancey) {
    currPoke.src = data.sprites.front_shiny;
  } else {
    currPoke.src = data.sprites.front_default;
  }
  //
  if (OnOff.value == 'Off') {
    tableStyle(currPoke);
    console.log(OnOff.value);
  } else {
    darkStyle(currPoke);
  }
  currPoke.style.width = '250px';
  currPoke.style.height = '200px';
  return;
}
