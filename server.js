const express = require("express");
const app = express();
const server = require("http").Server(app);

app.set('view engine', 'ejs')


app.get('/', function (req, res) {
res.render('room');
})
server.listen(3030);