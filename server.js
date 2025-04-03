require("dotenv").config({ path: "./config/.env" });

const express = require("express");
const passport = require("passport");
const expressSession = require("express-session");

// 3. Initialize Passport configuration (needs to happen before Express app setup)
require("./Config/passport-setup.js");

// 4. Initialize the Express application
const app = express();
require("./Config/database.js")();
// 6. Configure the View engine
app.set("view engine", "ejs");

// 7. Middleware setup (order matters here)
app.use(express.static("public"));
app.use(
   expressSession({
      // sets how long we want the cookie to be establised for
      saveUninitialized: false,
      maxAge: 24 * 60 * 60 * 1000,
      secret: [process.env.COOKIE_KEY],
   })
);
app.use(passport.initialize()); //plugging passport into epxress
app.use(passport.session()); // enables session persistance into the express

// 8. Import routes
const authRoutes = require("./route/auth-route.js");
const homeRoutes = require("./route/home-route.js");
const profileRoutes = require("./route/profile.js");

app.use("/auth", authRoutes);
app.use("/", homeRoutes);
app.use("/profile", profileRoutes);

// const profileRoutes = require("./routes/profile-route");
app.listen(process.env.PORT, () => {
   console.log(`App now listening for requests on port ${process.env.PORT}`);
});
