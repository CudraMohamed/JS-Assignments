// Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
// 'orange' the program should fetch its price (30.00) and multiply with the quantity 
// requested (2) and return total cost in this printed format (2 Oranges for KES 60.00). 
// calculateFruitCost(fruitName, quantity)
// For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES 60.00"
let price=30;
function calculateFruitCost(fruitName,quantity){
    const fruitObj=[
        {fruit:"Oranges",price:30.00},
        {fruit:"Bananas",price:20.00}
    ]
    fruitObj.find(item => item.fruit===fruitName)
    let fruitPrice=price
    console.log(`${quantity} ${fruitName} for KES ${fruitPrice*quantity}`)
}
calculateFruitCost("Orange",3)

// Write a class KioskCalc that has the following fruitsPriceList object.
// this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
// and takes two parameters (fruit, quantity) when initialized i.e. var kioskCalc = new KioskCalc(“orange”, 2);
// Thereafter, it allows one to calculate the total cost of the fruit by accessing the getTotalCost( ) method. 
// kioskCalc.getTotalCost( )  // returns “2 orange for KES 60”

class KioskCalc{
    constructor(fruit,quantity){
        this.fruit=fruit;
        this.quantity=quantity;
        this.fruitPriceList={"Orange":30, "Strawberry":60,"Raspberry":50};
        this.getCost=function(){
            return`${quantity} ${fruit} for KES ${quantity*this.fruitPriceList.Orange}`
        }
    }
}

var kioskOne=new KioskCalc("Orange",2);
console.log(kioskOne.getCost());