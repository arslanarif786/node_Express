// const app = require('./app')

// console.log("app:",app,app.a,app.b,app.z());

//let a=1,b=2;
let c=3;
//let result = a+b+c;

// if(a === 1){
//     console.log("match")
// }
// else{
//     console.log("not match")
// }

// for(i=0;i<10;i++){
//     console.log(i)
// }

// const arr = [7,8,1,2,9,5,5]
// const filter_Ans = arr.filter(item =>{
//     return item>4
// })
// console.log("after filter:",filter_Ans);


// const fs = require('fs');
// fs.writeFileSync("File.txt","Hello World!!")

const http = require('http');

// function displayData(req,res){
//     res.write("<h1> Hello!! server is created thorugh function.. </h1>");
//     res.end();
// }

// // Create an HTTP tunneling proxy
// http.createServer(displayData).listen(4200)

// Create an HTTP tunneling proxy

// writing an API
// const data = require('./data')
// const proxy = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application\json' });
//     res.write(JSON.stringify(data))
//     res.end();
//   }).listen(5000)


// CRUD with File System.....
// const fs = require('fs')
// const path = require('path')
// const dirPath = path.join(__dirname,'crud');
// const filePath = `${dirPath}/apple.txt`;


// write || create
// fs.writeFileSync(filePath,'This is an apple')

// read
// fs.readFile(filePath,'utf8',(err,item) => {
//     console.log(item)
// })

// update
// fs.appendFile(filePath,' and this is a fruit',(err) => {
//     if(!err) console.log("file is updated")
// })

// rename
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err) => {
//     if(!err) console.log("file name is updated")
// })

// delete
// fs.unlinkSync(`${dirPath}/fruit.txt`)

