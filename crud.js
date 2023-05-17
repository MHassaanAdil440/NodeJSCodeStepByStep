const fs = require('fs')
const path = require('path')

const folderPath = path.join(__dirname,'crud')
const filePath = path.join(folderPath, 'dummy1.txt')

fs.unlinkSync(filePath);

// fs.rename(filePath, path.join(folderPath, 'dummy1.txt'), (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('File renamed successfully')
//     }
// })

// fs.appendFile(filePath,'This is the dummy fruit text!', (err) => { 
//     if (err) { 
//     console.log(err)}
//     else{
//         console.log('File written successfully\n'); 
//         console.log('The written has the following contents:'); 
//         console.log(fs.readFileSync(filePath, 'utf8')); 
//     }})
// fs.writeFileSync(filePath, 'This is the dummy text!')

// fs.readFile(filePath, 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }})
// const fs = require('fs');
// const path = require('path');

// const folderPath = path.join(__dirname, 'crud');
// const filePath = path.join(folderPath, 'dummy.txt');

// fs.writeFileSync(filePath, 'This is the dummy text!');
