function findAvgPrice(items) {
  let sum = 0;
  items.forEach(function (element, index, arr) {
    sum += element.price; //adds up all the items prices in each array
    console.log(element.price); //for each item, log the price
  });
  return (sum / items.length).toFixed(2);
}
console.log(`The average price is`,`$`+findAvgPrice(items)); //log the average price

let arr = []; //leaving blank array to make a new one
const itemList = items;
const priceRange = itemList.filter(function (arr) { //priceRange is the name of the new array, the function will filter out any items that are above or below $14 and $18
  return arr.price >= 14 && arr.price < 18;
});
console.log(`Items that cost between $14.00 USD and $18.00 USD:`, priceRange);


// make new array, filter all items by currency code, put the GBP currency code item in new array by itself
let item = [];
const britArr = items.filter(function(item) {
    return item.currency_code == 'GBP';
}); 
console.log(britArr);






  // used for looping over keys of an object
//   const student = {
//     name: "Sally",
//     age: 100,
//     isCool: true,
//   };

//   for (const prop in student) {
//     console.log(`${prop} is ${student[prop]}`);
//   }