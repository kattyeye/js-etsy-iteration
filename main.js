function findAvgPrice(items) {
  let sum = 0;
  items.forEach(function (element, index, arr) {
    sum += element.price; //adds up all the items prices in each array
    // console.log(element.price); //for each item, log the price
  });
  return (sum / items.length).toFixed(2);
}
console.log(`The average price is`, `$` + findAvgPrice(items)); //log the average price
//average price function using reduce
let initial = 0;
let avg = items.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue.price / items.length;
}, initial);
console.log(`The average price is`, `$` + avg.toFixed(2));


let arr = []; //leaving blank array to make a new one
const itemList = items;
const priceRange = itemList.filter(function (arr) {
  //priceRange is the name of the new array, the function will filter out any items that are above or below $14 and $18
  return arr.price >= 14 && arr.price < 18;
});
console.log(`Items that cost between $14.00 USD and $18.00 USD:`, priceRange);

// make new array, filter all items by currency code, put the GBP currency code item in new array by itself
let item = [];
const britArr = items.filter(function (item) {
  return item.currency_code == "GBP";
});
console.log(`1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18`, britArr);

// create a new function woodItems that filters all items and returns the ones that have wood in their materials values
const woodItems = items.filter(function (item, i) {
  return item.materials.includes("wood");
});
console.log(woodItems);
//takes each item title and adds is made of wood
woodItems.forEach(function (item) {
  console.log(`${item.title} is made of wood.`);
});

const eightOrMore = items.filter(function (el) {
  return el.materials.length >= 8; //returns only the items with a materials array with a length >= 8
});
console.log(eightOrMore);

eightOrMore.forEach(function (el) {
  console.log(`${el.title}${el.materials}`);
});

let el = [];
const sellerMade = items.filter(function (el) {
  return el.who_made === "i_did";
});

console.log(sellerMade, `were made by their sellers.`);
