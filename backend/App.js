const express = require("express");
const app = express();
const routes = require("./config/routes");
const cors = require("cors");
const upload = require("express-fileupload");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/assets"));

app.use(upload());
app.use(cors());

app.use(routes);

const port = process.env.PORT || 4000;
app.listen(port, async()=> {
await console.log("Server Running");
})