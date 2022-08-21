// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

//to create array of fruits,then to write code to pick the details with fruit name.

let fruits = [

    {
        "Name":"Apple",
        "Color":"Red",
        "Price":300
    }
    ,
    {
        "Name":"Kiwi",
        "Color":"Green",
        "Price":250
    }
    ,
    {
        "Name":"Banana",
        "Color":"Yellow",
        "Price":50
    }
    ,
    {
        "Name":"Grapes",
        "Color":"Purple",
        "Price":150
    }
    ,
    {
        "Name":"Strawberry",
        "Color":"Pink",
        "Price":350
    }
]

// console.log(fruits);
   // To get in table
// console.table(fruits);
// getting input to get color and price
var fruits_name = "strawberry"

  // to search with lower case and deriving them as object
var search = fruits.find(element => element.Name.toLowerCase() == fruits_name.toLowerCase());
// console.log(search);

    //Increase price
// console.log("Price:" +increase +" perKg");
// var increase = search.Price + 10
  // Displaying the values
console.log("Fruit Name:" +search.Name);
console.log("Color:" +search.Color);
console.log("Price:" +search.Price +" perKg");
