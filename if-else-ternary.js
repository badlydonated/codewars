// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, 
// function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, 
// different numbers have different prices (refer to the following table), 
// return how much money will the customer spend to buy that number of hotdogs.

// number of hotdogs	price per unit (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
// You can use if..else or ternary operator to complete it.

//my attempt
function saleHotdogs(n){
    if(n < 5){
        return 100 * n
    } else if(n >= 5 && n < 10){
        return 95 * n
    } else if(n >= 10){
        return 90 * n
    }
}

console.log(saleHotdogs(  1)) //,  100);
console.log(saleHotdogs(  4)) //,  400);
console.log(saleHotdogs(  5)) //,  475);
console.log(saleHotdogs(  9)) //,  855);
console.log(saleHotdogs( 10)) //,  900);
console.log(saleHotdogs(100)) //, 9000);

//codewars solutions
function saleHotdogs(n){
    return n*(n<5?100:n<10?95:90);
  }