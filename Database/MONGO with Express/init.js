const mongoose = require("mongoose");
const chat = require("./models/chat.js");

main()
.then(()=>{
  console.log("Connection Succesfull");
})
.catch(err => console.log(err));

async function main()
 {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let allchats=[{
    from:"rahul",
    to:"vijav",
    msg: "send me your location",
    created_at:new Date()
  },
  {
    from:"rahul",
    to:"rajani",
    msg: "kay re",
    created_at:new Date()
  },
  {
    from:"rahul",
    to:"vijav",
    msg: "chala ja ",
    created_at:new Date()
  },
];

chat.insertMany(allchats);
  