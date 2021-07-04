console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
const maxItems = 5 
let basket = []
console.log('This basket is currently empty', basket);

function isFull(){  //creating a function to loop through array to check if it full
  for ( let i = 0; i < basket.length; i++){
  if (basket[i] <= maxItems){
      return false;
    }
      return true;
  }
}

function addItem(item){ //this function is adding a local varible "item"
  basket.push(item); //the local varible is being pushed into the basket array varible
  return true;
}

console.log(`testing the basket ${basket}`);
console.log('add some candy to the basket', addItem('candy'));
console.log(`Checking added ${basket}`, basket);
console.log('lets add some chicken',addItem('chicken'));
console.log('lets add some chocolate', addItem('chocolate'));
console.log('lets add some tomato',addItem('tomato'));
console.log('lets add some milk', addItem('milk'));

function listItems() {     //creating function to list items in basket
  for( let items of basket){
    console.log('here the items in the basket', items);
  }
}
listItems() //testing the list item function.

function empty(){   //creating a function to empty out the current array
  let items = basket.splice(0, basket.length);
  return items;
  }

console.log('checking to see if items are deleted ', empty());
console.log('basket is now empty',basket);
console.log('no room for the items', isFull());
