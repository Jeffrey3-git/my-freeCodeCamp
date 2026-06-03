const rawData = [
  "A10|Tomatoes|5|2027-01-01",        // no zone field
  "B21|Bananas|10|2027-01-01|fridge", // zone: "fridge"
  "C32|Eggs|3|2027-01-01|pantry",     // zone: "pantry"
];

const pantry = [
  { sku: "C32", name: "Eggs", qty: 3, expires: "2027-01-01", zone: "pantry" }
];



function parseShipment(rawData){
  let inventory = [];
  for (const data of rawData){
    let seperate = data.split("|")
    let [sku, name, qty, expires, zone = "general"] = seperate;
    let alreadyExist = inventory.some(item => item.sku === sku)
    if (!alreadyExist){
      inventory.push({sku, name, qty: Number(qty), expires, zone});
    }
  }
  return inventory;
}

//console.log(parseShipment(rawData));

function planRestock(pantry, shipment){
  let actions = [];
  let label = "";
  for (const ship of shipment){
    let matchInPantry = pantry.find(pantryItem => pantryItem.sku === ship.sku)
    if (ship.qty <= 0){
      label = "discard";
    } else if (matchInPantry)  {
      label = "restock"
    } else {
      label = "donate"
    }
    actions.push({type: label, item:ship})
  }
  return actions
}

function groupByZone(actions){
  let storage = {};
  for (const action of actions){
    let currentZone = action.item.zone;
    if (!storage[currentZone]){
      storage[currentZone] = [];
    }
    storage[currentZone].push(action)
  }
  return storage;
}

function clonePantry(pantry){
  let array = [];
  for (const pan of pantry){
    array.push({...pan});
  }
  return array;
}

let shipment = parseShipment(rawData);
//console.log(shipment);

let pantryCopy = clonePantry(pantry);
//console.log(pantryCopy);
let restock = planRestock(pantryCopy, shipment);
let grouped = groupByZone(restock);

console.log(grouped);

