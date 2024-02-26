// For loop example-1
for (let i =5; i<51; i= i+5){
    console.log (i)
}
   // For loop example-2
   //kisi bhi web page ko infinght loop menahi rakhana cahiye because esase systey hang ya web site kaam nahi karti hai 

for (let i =0; i<10; i++){
    if (i % 2 == 0)
    console.log (i)
}
 // While loop example-1
let i=0;
while(i<10){
    console.log ("Namste")
    i++
}
// While loop example-2
let j=10;
while(j>0){
    console.log ("Namaste")
    j--
}
// While loop example-2
let k=10;
while(k>=0){
    console.log ("Namaste")
    k--
}

//Do-while loop Example-1
let l=2;
do{
    console.log ("Namaste")
    l++
}
while(l<10)

//For....in loop
// with the help of Object
let animal = {
    name : "Zebra",
    leg: 4
};
for(let key in animal){
    console.log (key,animal[key]);//Both output Name and leg Are visible 

}
//console.log(animal["name"])
//output only name of the Animal 

//with the Help of Array
let names = ["Rahul", "Mohit","Raj","Abhishek"];
for(let index in names){
    console.log(index,names[index]);
}

//For...Of loop
for(let name of names){
    console.log(name)
}




//while loop Game

const favMovie ="avatar";
let guess = prompt("guess my favMovie");
while(( guess!=favMovie)&&(guess!="guit")){
    guess=prompt("wrong guess.please Try Again")
}

if(guess=favMovie){
    console.log("Congrats!!");
}else{
    console.log("You Quit")
}