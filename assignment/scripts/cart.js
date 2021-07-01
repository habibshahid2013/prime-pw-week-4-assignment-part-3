console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []
console.log('This basket is currently empty', basket);

function addItem(item){
  basket.push(item);
  return true;
}

console.log(`testing the basket ${basket}`);
console.log('add some candy to the basket', addItem('candy'));
console.log(`Checking added ${basket}`, basket);

function listItems(array) {
  for( let i = 0; i < array.length; i++){
console.log(`Item ${i + 1}: ${array[i]}`);
  }
}
listItems();
