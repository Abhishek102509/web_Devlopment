let bread1 = prompt("which bread would you like to hav :- ");
let veggies1 = prompt("What are your favorite veggies");
let sauce1 = prompt("which sauce would you like to have:- ");

function makeSandwich(bread, veggies, sauce){
    let sandwich = bread + " bread " + veggies + " " + sauce + " sandwich is ready "
    return sandwich;
}

let vegSandwich = makeSandwich(bread1,veggies1,sauce1);
console.log(vegSandwich);  