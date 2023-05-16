// Purpose: To store data for the application
const name1 = process.argv[2];
const age1 = process.argv[3];
const data =[
    {name: name1, age:age1},
];
console.log(data);
module.exports = data;