// const products = [
//     { id: 1, name: "Product 1" },
//     { id: 2, name: "Product 2" },
// ];

// const http = require("http");

// const server = http.createServer(function (req, res) {

//     // routing - router
//     if (req.url == "/") {
//         res.setHeader("Content-Type", "text/html");
//         res.end(`<form action="/products" method="post">
//             <input type="text" placeholder="Product Name" name="productName" />
//             <button>Submit</button>
//         </form>`);
//     }

//     if (req.url == "/products" && req.method == "POST") {
//         const body = [];
//         req.on("data", function (chunk) {
//             body.push(chunk);
//         });
//         req.on("end", function () {
//             const bodyParse = Buffer.concat(body).toString();
//             console.log(bodyParse.split("="));
//             const user = {
//                 name: bodyParse.split("=")[1],
//             };
//             res.end(JSON.stringify(user));
//         });
//     }
// });

// server.listen(8080, function () {
//     console.log("Server is running port 8080");
// });
// npm init -y
// npm install nodemon -D
// "start": "nodemon app.js"
// 3 loại lỗi:
// 1. SyntaxError: Unexpected token < in JSON at position 0
// 2. logic error
// 3. runtime error

// const express = require('express');
import express from "express";

import router from "./router/products";

import cors  from "cors";
// const bodyParser = require('body-parser');

const app = express();
// app.use(bodyParser.urlencoded({extended: false}));

app.use(express.json());
// .seen .url 
app.use(cors())
// Trả về danh sách
app.use('/api',router);

// app.listen(8080, function () {
//     console.log("Server is running port 8080");
// });

export const viteNodeApp = app;