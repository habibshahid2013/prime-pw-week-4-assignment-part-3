console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []
console.log('This basket is currently empty', basket);

function addItem(item){ //this function is adding a local varible "item"
  basket.push(item); //the local varible is being pushed into the basket array varible
  return true;
}

console.log(`testing the basket ${basket}`);
console.log('add some candy to the basket', addItem('candy'));
console.log(`Checking added ${basket}`, basket);
console.log('lets add some chicken',addItem('chicken'));
console.log('lets add some chocolate', addItem('chocolate'));

function listItems() {
  for( let items of basket){
    console.log('here the items in the basket', items);
  }
}
listItems() //testing the list item function.

function empty(items){
 for(basket.pop of basket);
  return 'Complete';
  }

console.log('checking to see deleted ', empty());

console.log('checking basket list', listItems());
console.log(basket);
