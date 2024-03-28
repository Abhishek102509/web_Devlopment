const mongoose = require ('mongoose');


main()
.then(()=>{
    console.log("Connection Succesfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema = new mongoose.Schema({
  name : String,
  email: String, 
  age: Number,

});
 
const User = mongoose.model("User" , userSchema);

// User.find({age: {$gt:48}})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{                
//   console.log(err);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
// });

User.updateOne({name:"Eve"},{age:69})
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
      console.log(err);
    });

// const user1 = new User ({name:"Adam", email:"adam@yahoo.in",age:48});
// const user2 = new User ({name:"Eve", email:"eve@google.com",age:88});

// user1.save();
// user2
// .save()
// .then((res)=>{
//   console.log(res);

// })
// .catch((err)=>{
//   console.log(err);
// });