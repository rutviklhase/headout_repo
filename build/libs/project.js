const http = require("http");

const server = http.createServer((req, res) => {
  const urlPath = req.url;
  if (urlPath === "/overview") {
    res.end('Welcome to the "overview page" of the nginX project');
  } else if (urlPath === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        product_id: "xyz12u3",
        product_name: "NginX injector",
      })
    );
  } else {
    res.end("Welcome to Rutvik's Server! Please refer to the README.md file inside the Github Repository for more details. This is a test string.");

  }
});

server.listen(9000, "0.0.0.0", () => {
  console.log("Listening for request");
});


// var http = require('http'); // 1 - Import Node.js core module

// var server = http.createServer(function (req, res) {   // 2 - creating server

//     //handle incomming requests here..

// });

// server.listen(9000); //3 - listen for any incoming requests

// console.log('Node.js web server at port 9000 is running... this one is new though')