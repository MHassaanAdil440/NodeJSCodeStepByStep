const path = require('path');
const fs = require('fs');

const path1 = path.join(__dirname, 'files');

fs.readdir(path1, (err, files) => {
    if (err) {
        console.log(err);}
    else {
        files.forEach((items)=>{console.log(items)})}});
// console.log(path1)
// if(!fs.existsSync(path1)){
//     fs.mkdirSync(path1);}
// for(i=0; i<4; i++){
//     fs.writeFileSync(path1+"/hello"+i+".txt", 'Hello World')
// }

// const fs = require('fs');
// const path = require('path');

// const folderPath = path.join(__dirname, 'files');

// // Create the "files" folder if it doesn't exist
// if (!fs.existsSync(folderPath)) {
//   fs.mkdirSync(folderPath);
// }

// // Loop to create four text files
// for (let i = 1; i <= 4; i++) {
//   const fileName = `file${i}.txt`;
//   const filePath = path.join(folderPath, fileName);
//   const fileContent = 'Hello, world!';

//   fs.writeFileSync(filePath, fileContent);

//   console.log(`Created ${fileName}`);
// }
