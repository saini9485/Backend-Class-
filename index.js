// console.log("hello word ")
const http = require("http")  //require is new inbuild function 
const server = http.createServer((req, res)=>{     //Listiner function
// console.log("hi")
res.setHeader("Content-Type", "text/html")
// res.write("hi")
res.write("<html>")
res.write("<head><title>Aircampus</title></head>")
res.write("<body><h1> Hi Rajesh Saini</h1><input /></body>")
res.write("</html>")
res.end()
})
server.listen(3000)