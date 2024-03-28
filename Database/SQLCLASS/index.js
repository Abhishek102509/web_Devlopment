const { faker } = require('@faker-js/faker');

const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Abhishek@1025'
});
// try{
//     connection.query("SHOW TABLE",(err,result)=>{
//         if(err)throw err;
//         console.log(result);
//     })

// }


let  getRandomUser = () => {
  return {
    Id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    
  };
}
console.log(getRandomUser());