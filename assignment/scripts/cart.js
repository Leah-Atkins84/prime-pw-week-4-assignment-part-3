console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket= [];
console.log('empty basket array:', basket);


let items= (['banana', 'apples', 'oranges']);
function addItem(items){
  console.log('in addItem', items);
  basket.push(items);
  return true;

}


console.log('basket has items', addItem(items));
console.log('Adding cucumber(expect true)', addItem('cucumber'));
basket.push('broccoli');
console.log('basket has these items:', basket);


let listItems= basket

listItems.forEach(element => console.log(element));

function empty(basket){
    basket.splice(0, basket.length);
}

console.log('empty basket:', empty(basket));
console.log(basket);






























//stretch goals
const maxItems = 5;
console.log('maxItems:', maxItems);
