//function to convert fahrenheit to celsius and viceversa

function ftc(f) {
    var c = (5*(f-32))/9;
    console.log("Corresponding Celsius scale = " , c);
}

function ctf(c) {
    var f = ((9*c)/5) + 32;
    console.log("Corresponding Fahrenheit Scale = " , f);
}

ftc(-40);
ctf(-40);


//shopping cart object with items as properties and a function to calculate total price of the products as a method

var shoppingCart = {
    items: [
        {name: "dress", price: 2000},
        {name: "handbag", price: 1000},
        {name: "necklace", price: 5000}
    ],

    totalPrice: function() {
        var priceSum = 0;
        for(var i in this.items){
            priceSum = priceSum + parseInt(this.items[i].price);
        }
        console.log("Total price =  Rs. ", priceSum);
    },
}

shoppingCart.totalPrice();

//a ToDO app that takes input from the user and appends the input (as an object) to an array.

var num = prompt("Enter the number of ToDos you have: ")

var ToDos = [];

for (var i = 0 ; i  < num ; i++) {
    var title = prompt("Enter Title: ");
    var description = prompt("Enter Description: ");
    let todoObj = {
        title: title,
        description: description
    }
    ToDos.push(todoObj);
}

console.log(ToDos);
