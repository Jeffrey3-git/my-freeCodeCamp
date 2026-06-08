const inventory = [];

function findProductIndex(productName){
  return inventory.findIndex(product => product.name.toLowerCase() === productName.toLowerCase());
}

function addProduct(newProduct){
  let index = findProductIndex(newProduct.name);
  if (index !== -1){
    inventory[index].quantity += newProduct.quantity;
    console.log(`${newProduct.name.toLowerCase()} quantity updated`);
  } else {
    inventory.push({
      name: newProduct.name.toLowerCase(),
      quantity: newProduct.quantity
    });
    console.log(`${newProduct.name.toLowerCase()} added to inventory`);
  }
}

function removeProduct(productName, productQuantity){
  let index = findProductIndex(productName);
  
  if (index === -1){
    console.log(`${productName.toLowerCase()} not found`);
    return; 
  }
  
  let currentQuantity = inventory[index].quantity;

  if (productQuantity > currentQuantity){
    console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${currentQuantity}`);
    return; 
  }
  
  if (productQuantity === currentQuantity){
    inventory.splice(index, 1);
    console.log(`${productName.toLowerCase()} completely removed from inventory`);
    return; 
  }

  inventory[index].quantity -= productQuantity;
  console.log(`Remaining ${productName.toLowerCase()} pieces: ${inventory[index].quantity}`);
}
