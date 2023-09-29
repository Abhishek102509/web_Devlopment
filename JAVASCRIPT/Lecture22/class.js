
//Declaring a Class


class Product{
    constructor(itemName,price,discount,Productcode){
        this.itemName=itemName;
        this.price=price;
        this.discount=discount;
        this.Productcode=Productcode;
    }
}
let Pencil =new Product('pencil',20,2,'p10')


const Product1 =class Product{
    constructor(itemName,price,discount,Productcode){
        this.itemName=itemName;
        this.price=price;
        this.discount=discount;
        this.Productcode=Productcode;
    }
    get getDiscountValue(){
        return this.discount;
    }
    set setDiscountValue(value){
        this.discount = value;
    }
};
let  Apple =new Product1('Apple',20,2,'p10')