const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./models/chat.js");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.use(express.static( path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}));

main()
  .then(() => {
    console.log("Connection Succesfull");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//Index Route
app.get("/chats", async(req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs",{ chats });
});


//New Routes
app.get("/chats/new",(req,res)=>{
res.render("new.ejs")
});

//Create Routes
app.post("/chats",(req,res)=>{
     let { from , to , msg} = req.body;
     let newChat =new Chat({
      from:from,
      to:to,
      msg:msg,
      created_at:new Date()
     })
      newChat.save()
      .then(res=>{console.log("chats was saved");
    })
    .catch(err=>{
      console.log(err);

    });
    res.redirect("/chats")
    
});








//Delete

app.delete("/posts/",(req,res)=>{
  let{id}= req.params;
  posts=posts.filter((p) => id != p.id);
  res.redirect("/chats")
 
})

const chat1 = new chat({
  from: "rahul",
  to: "vijav",
  msg: "send me your location",
  created_at: new Date()
});
chat1.save().then((res) => {
  console.log(res);
})
  .catch((err) => {
    console.log(err);
  })


app.get("/", (req, res) => {
  res.send("root is working")
})
app.listen(8080, () => {
  console.log("app is leastening at port 8080");
}); 