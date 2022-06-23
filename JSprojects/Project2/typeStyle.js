/**
 *
 * @param {string} type
 * @return {string}
 */
export default function typeStyle(type) {
  var typesObj = {
    'normal': '#B1AE82',
    'fighting': '#C62B30',
    'flying': '#A595E7',
    'poison': '#93459F',
    'ground': '#C6BC8F',
    'rock': '#A98E2B',
    'bug': '#ABB422',
    'ghost': '#77678E',
    'fire': '#F2892E',
    'water': '#688EEA',
    'grass': '#7FBF58',
    'electric': '#F6D326',
    'fairy': '#E2A0E6',
    'psychic': '#E06087',
    'ice': '#92D6DA',
    'dragon': '#7C4EDE',
    'steel': '#B7B6CB',
    'dark': '#715547'
  };



  return typesObj[type];
}
