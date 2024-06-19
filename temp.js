const express = require("express");

const app = express();

app.use(express.json());

app.get("/test", (req, res) => res.send("I catched your request"));

app.listen(5000, () => console.log("server is running on 5000 port"));
