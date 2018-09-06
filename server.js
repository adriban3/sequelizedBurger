var express = require("express");
var bp = require("body-parser");
var db = require("./models");
var exphbs = require("express-handlebars");
require("./controllers/burger_controllers")(app);
var mo = require("method-override");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(bp.urlencoded({ extended: true }));

app.use(bp.json());

app.use(mo("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("Burgers listening on http://localhost:" + PORT);
    })
})

module.exports = app;

//define app and port and handlebars and sich