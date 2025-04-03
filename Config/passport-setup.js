const passport = require("passport");
const User = require("../Model/User");
const GoogleStrategy = require("passport-google-oauth20");

//import enviroment variables

passport.use(
   new GoogleStrategy(
      {
         callbackURL: "/auth/google/redirect",
         clientID: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      },
      async (accessToken, refreshToken, profile, done) => {
         // does the user exist?
         try {
            let currentUser = await User.findOne({ googleId: profile.id });
            if (currentUser) {
               done(null, currentUser);
            } else {
               // Create a new user if not found
               // ideaslly you'll want to use done(null,false) to send back that use was not found at all but note that no automatic reaponse is sent as you will need to do this yourself
               currentUser = new User({
                  username: profile.displayName,
                  googleId: profile.id,
                  thumbnail: profile._json.image.url,
               });

               await currentUser.save();
               console.log("New user created:", currentUser);
               return done(null, currentUser);
            }
         } catch (error) {
            console.error("Error occurred during authentication:", error);
            done(error);
         }
      }
   )
);

passport.serializeUser((user, done) => {
   // console.log("Serializing user:", user.id);  Check when it runs
   done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
   try {
      const user = await User.findById(id);
      if (id) {
         done(null, user);
      } else {
         done(null, false);
      }
   } catch (error) {
      console.error("Error occurred during deserialization:", error);
      done(error);
   }
});
