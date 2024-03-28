const mongoose = require ('mongoose');


main()
.then(()=>{
    console.log("Connection Succesfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const bookSchema = new mongoose.Schema({
  titel:{
    type:String,
    require:true,
  },
  author: {
    type:String
  }, 
  price: {
    type:Number
  },

});
const Book = mongoose.model("Book" , bookSchema);
const Book1= new Book({tital:"Panchyat",author:"Pramechandr", price:50});
Book1.save()
.then((res)=>{
      console.log(res);
    
    })
    .catch((err)=>{
      console.log(err);
    });