import darkStyle from './darkStyle.js';
import tableStyle from './tableStyle.js';
import typeStyle from './typeStyle.js';

export default function dexEntryCreate(data, OnOff,dexHeader,dexNum) {
  // Update text content with pokemon name
  pokeName.textContent = data.name.toUpperCase();
  dexNO.textContent = 'National Dex No.';
  dexNO.append(dexNum);

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
  if (OnOff.value == "Off") {
    tableStyle(dexHeader);
  }
  else {
    darkStyle(dexHeader);
  }
  dexHeader.style.textAlign = "center";
  dexHeader.style.alignContent = "center";
  dexHeader.style.padding = "10px";

  return;
}