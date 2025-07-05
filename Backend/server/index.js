import express from "express";

const server = express();
const PORT = 3000;

server.use(express.json());

let isLoggined = true;
let username = "vikas";

server.use((req, res, next) => {
  if (isLoggined) {
    next();
  } else return res.send("please login first");
});

server.use((req, res, next) => {
  if (req.body.username === username) {
    next();
  } else return res.send("please login with correct username");
});

server.get("/home", (req, res) => {
  res.send("welcome to the home page");
});

server.get("/about", (req, res) => {
  res.send("welcome to the about page");
});

server.post("/login", (req, res) => {
  console.log(req.body);
});

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

//without express code

// import http from "http";

// const PORT = 3000;

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("welcome to the home page");
//   }
//   if (req.url === "/about") {
//     res.end("welcome to the about page");
//   }
//   if (req.url === "/contact") {
//     res.end("welcome to the contact page");
//   }
// });

// server.listen(PORT, () => {
//   console.log(`server is running on port ${PORT}`);
// });
