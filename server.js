const http = require("http"); //calling http module built in

const PORT=4000;
const hostname="localhost";

const server = http.createServer((req,res)=>{
    
    if(req.url==="/"){
       return res.end();
    }
    if(req.url==="/about"){
        return res.end("about na summa va");
    }
    if(req.url==="/abo"){
        return res.end("abo");
    }
    else{
        return res.end("<h1>hello bois<\h1>")
    }
    
})

server.listen(PORT,hostname,()=>{
    console.log(`server is working on http://${hostname}:${PORT}`);
});