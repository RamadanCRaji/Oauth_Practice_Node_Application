const router = require("express").Router();

router.get("/", (req, res) => {
   res.render("home", { user: req.user });
});

module.exports = router;
