import express from "express";
import bodyParser from "body-parser"; // thư viện hỗ trợ cho việc lấy tham số từ client sử dụng cho chúng ta
import viewEngine from "./config/viewEngine";
import initwebRoutes from "./router/web";
require('dotenv').config(); // giúp chạy câu lệnh 17

let app = express();

// config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initwebRoutes(app);

let port = process.env.PORT || 6969;

app.listen(port, () => {

    console.log("backend nodejs ruing on the : " + port)
})