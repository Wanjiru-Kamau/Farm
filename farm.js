class Farmer{
    constructor(){
    this.farms = [];

    this.groceryVendors = [];
    this.products = [];
    this.addFarm = (farmId, name, farmer, phone, address) => {
    this.farms.push({farmId,name,farmer,phone,address})
    }
    this.removeFarm = (farmId) => {
    let specificItem = this.farms.find(item => item.farmId ===farmId);
    let farmIndex = this.farms.indexOf(specificItem);
    this.farms.splice(farmIndex, 2);
    }
    this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
    let specificFarm = this.farms.find(item => item.farmId ===farmId)
    specificFarm.farmId =newFarmId;
    specificFarm.farmName =newFarmName;
    specificFarm.farmer =newFarmerName;
    specificFarm.phone =newPhone;
    specificFarm.address =newAddress;
    }
    this.getFarm = (Id)=>{
    console.log(this.farms.find(object=>object.farmId===Id))
    }
    this.addProduct = (productId, productName, price) => {
    this.product.push({productId,productName,price})
}
this.removeProduct = (productId) => {
let specific = this.product.find(item => item.productId ===productId);
let productIndex = this.product.indexOf(specific);
this.product.splice(productIndex, 2);
}
this.updateProduct = function(productId,newProductId,newProductName,newPrice){
let specificProduct = this.product.find(item => item.productId ===productId)
specificProduct.productId =newProductId;
specificProduct.productName = newProductName;
specificProduct.price = newPrice;
}
this.getProduct = (Id)=>{
console.log(this.product.find(object=>object.productId===Id))
}
this.printProducts = ()=>{
console.log(this.product)
}
this.calculateOrderCost = (productId,quantity)=>{
let specificProduct = this.product.find(object=>object.productId===productId);
console.log(`${quantity} ${specificProduct.productName} for KES ${quantity*specificProduct.price}`);
}
}
}

let farmA = new Farmer();
farmA.addFarm("255","Juma","Abel","0712229042", "Q1470");
    farmA.addFarm("123","Maureen","Juma","0753262827", "YOLO494");
    farmA.addFarm("524","Agnes","Kamau","0723748348", "AAA605");
    farmA.addFarm("545","Cate","Mwende","074365359", "KYV516");
    console.log(farmA.farms);

    farmA.removeFarm("022");
    console.log()