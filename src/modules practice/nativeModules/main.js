const fs=require('fs');
const path='/CURSO PLATZI/example.txt'
const file= fs.readFileSync(path,'utf-8');
console.log(file);
fs.writeFileSync(path,'Todo bien vos?');