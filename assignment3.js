class Mkulima{
    constructor(){
    this.farms = [];
    this.groceryVendors = [];
    this.products = [];
    
    this.addFarm = (farmId, farmName, farmer, phone, address) => {
    this.farms.push({farmId,farmName,farmer,phone,address})
    }
    this.removeFarm = (farmId) => {
    let specificObj = this.farms.find(item => item.farmId ===farmId);
    let farmIndex = this.farms.indexOf(specificObj);
    this.farms.splice(farmIndex, 1);
    }
    this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmersName,newPhone,newAddress){
    let specificFarm = this.farms.find(item => item.farmId ===farmId)
    specificFarm.farmId =newFarmId;
    specificFarm.farmName =newFarmName;
    specificFarm.farmer =newFarmersName;
    specificFarm.phone =newPhone;
    specificFarm.address =newAddress;
    }
    this.getFarm = (Id)=>{
    console.log(this.farms.find(object=>object.farmId===Id))
    }
    this.addProduct = (productId, productName, price) => {
    this.products.push({productId,productName,price})
    
    }
    this.removeProduct = (productId) => {
    let specific = this.products.find(item => item.productId ===productId);
    let productIndex = this.products.indexOf(specific);
    this.product.splice(productIndex, 2);
    }
    this.updateProduct = function(productId,newProductId,newProductName,newPrice){
    let specificProduct = this.products.find(item => item.productId ===productId)
    specificProduct.productId =newProductId;
    specificProduct.productName = newProductName;
    specificProduct.price = newPrice;
    }
    this.getProduct = (Id)=>{
    this.products.find(object=>object.productId===Id)
    }
    this.printProducts = ()=>{
    console.log(this.products)
    }
    this.calculateOrderCost = (productId,quantity)=>{
    let specificProduct = this.products.find(object=>object.productId===productId);
    console.log(`${quantity} ${specificProduct.productName} for Kshs ${quantity*specificProduct.price}`);
    }
    }
    }
    
    let myFarm= new Mkulima();
    myFarm.addFarm("5A 0.52ha","Cudra","Mohamed","+254 767 783 890", "089-987");
    myFarm.addFarm("9C 0.93ha","Rudra","Morehermade","+254 767 890 890", "098-345");
    myFarm.addFarm("8B 0.25ha","Gudra","Moreher","+254 890 765 789", "234-567");
    console.log(myFarm.farms);
    
    myFarm.removeFarm("8B 0.25ha");
    console.log(myFarm.farms);

    myFarm.addProduct("12a","Bag of Maize",20000)
    console.log(myFarm)

    myFarm.updateFarm("5A 0.52ha","5A 0.45ha","Lima Farm","Qudra","+254 777 777 777","098-097");
    console.log(myFarm.farms)

    myFarm.getProduct("12a");
    console.log(myFarm.farms);

    myFarm.printProducts();

    myFarm.calculateOrderCost("12a",1);