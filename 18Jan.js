// console.log("hello word ")
const http = require("http")  //require is new in build function 
const server = http.createServer((req, res) => {
    console.log(req.url)
    res.setHeader("Content-Type", "text/html")
    let url = req.url
    if (url === "/") {
        res.write("home")
    } else if (url === "/about") {
        console.log("we are awesome")
    } else {
        res.write("page not found")
    }
    //Listener function
    // console.log("hi")
    // res.setHeader("Content-Type", "text/html")
    // res.write("hi")
    res.write("<html>")
    res.write("<head><title>Aircampus</title></head>")
    res.write("<body><h1>Hello Rajesh Saini R.N</h1><input /></body>")
    res.write(`<body><form action="masseg" method="POST" <input type ="text" name="Rajesh" ></form></body>`)
    res.write(`<button type="submit">send</button>`)
    res.write("</html>")
    res.end()
})

server.listen(3000)