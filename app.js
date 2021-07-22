const fs=require('fs')
const http=require('http')
const path=require('path')
// const sayHello=require('./main')
const Main=require('./main')


// fs.writeFile('msg.txt','write new file',(err)=>{
//     if(err) throw err
//     console.log('write file')
// })

// fs.readFile('msg.txt','utf8',(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })

// const server=http.createServer((req,res)=>{
//     console.log(req)
//     fs.readFile(path.join(__dirname,'index.html'),(err,data)=>{
//         if(err) throw err
//         res.write(data)
//         res.end()
//     })
    
// })
// server.listen(5000,()=>console.log('server running on port 5000'))
// console.log("Hello world")

Main.sayHello()
Main.sum(3,5)


