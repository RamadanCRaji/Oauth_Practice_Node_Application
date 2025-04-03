const router = require("express").Router();

const isAuth = (req, res, next) => {
   if (req.user) {
      next();
   } else {
      res.redirect("/");
   }
};

router.get("/", isAuth, (req, res) => {
   res.render("profile", { user: req?.user });
});

module.exports = router;
