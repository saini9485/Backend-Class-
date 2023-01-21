const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html')
    let url = req.url
    let method = req.method;
    if(url === '/'){
        // res.write('home')
        res.write("<html>");
        res.write("<head><title>NodeJS</title></head>");
        // res.write("<body><h1>Welcome</h1></body");
        res.write(
            `<body>
                <form action="/message" method="POST">
                    <input type="text" name="Tony">
                    <button type="submit">Send</button>
                </form>
            </body>
            `
        );
        res.write("</html>");
        res.end();
    }
    // else if(url === '/about'){
    //     res.write('About page')
    // }
    else if(url === '/message' && method === 'POST'){
        const body=[];

        req.on('data',chunk=>{{
            console.log(chunk);
            body.push(chunk)
        }});

        req.on('end',()=>{
            const parseBody = Buffer.concat(body).toString()
            console.log(parseBody)

            const message = parseBody.split('=')[1];
            fs.writeFileSync('message.txt', message)
        })

    //    console.log(req.body)
       
       res.statusCode = 302;
       res.setHeader('Location','/')

    //    res.writeHead(302,{
    //     Location:"https://www.google.com",
    //    });
       res.end()

    }
    // else{
    //     res.write('page not found')
    // } 
});

 server.listen(3000);