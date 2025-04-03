const passport = require("passport");

const router = require("express").Router();

// 1. Login route (entry point)
router.get("/login", (req, res) => {
   res.render("login", { user: req.user });
});
// 2. Logout route(exit point)
router.get("/logout", (req, res) => {
   try {
      // Handle with passport (typically you'd use req.logout() here)
      req.logout(function (err) {
         if (err) {
            return next(err);
         }
         res.redirect("/");
      });
   } catch (error) {
      console.error("Logout error:", error);
   }
});

// 3. Google OAuth initiation
router.get(
   "/google",
   passport.authenticate("google", {
      scope: ["profile"], // Requesting profile information from Google we can request more stuff but this is what we are asking google to have us access
   })
);
// 4. Google OAuth callback (after user authenticates with Google)
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
   res.redirect("/profile");
});
module.exports = router;

//things i learned here
/**
   - different ways to handle different types of error
      - done (null,false) // user not found need to handle myself 
         as in send res.status(500) user not found
      - done (err) database error automatically sends to the browser 
  */
