
let total = 0;

function findAvgPrice(items) {
    let sum = 0;
    items.forEach(function(element, index, arr){
        sum += element.price; //adds up all the items prices in each array
        console.log(element.price);//for each item, log the price
    });
    return sum / items.length;
};
console.log(findAvgPrice(items)); //log the average price




