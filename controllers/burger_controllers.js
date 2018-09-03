var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    db.burger.findAll({}).then(function (data) {
      var hbsObject = {
        burger: data
      };
      res.render("index", hbsObject);
    })
  })
}
// // Create all our routes and set up logic within those routes where required.
// router.get("/", function (req, res) {
//   burger.all(function (data) {
//     var hbsObject = {
//       burger: data
//     };
//     res.render("index", hbsObject);
//   });
// });

app.post("/api/burgers", function (req, res) {
  db.burger.create(req.body).then(function () {
    res.redirect("/");
  })
});
// router.post("/api/burgers", function (req, res) {
//   burger.create([
//     "burger_name", "devoured"
//   ], [
//       req.body.burger_name, false //was req.body.devoured
//     ], function (result) {
//       // Send back the ID of the new quote
//       res.redirect("/");
//     });
// });
app.put("/api/burgers/:id", function (req, res) {
  db.burger.update(
    req.body,
    {
      where: {
        id: req.params.id
      }
    }).then(function () {
      res.redirect("/");
    })
})
// router.put("/api/burgers/:id", function (req, res) {
//   var condition = "id = " + req.params.id;

//   console.log(condition);

//   burger.update({
//     devoured: true
//   }, condition, function (result) {
//     res.redirect("/");
//   });
// });

// Export routes for server.js to use.
// module.exports = router;

//create and export router here