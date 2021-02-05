const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys"); //.. means go up on director

const User = mongoose.model("users"); // User is the model class

passport.serializeUser((user, done) => {
  done(null, user.id); // short cut to id that mongodb generate for us, assuming that using might sign up with other app then google
});
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});
passport.use(
  //setting up and configering passport
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    //
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
      return  done(null, existingUser); //we already have a record with the given profile ID
      }
        //we dont have a user recod, create a new one
        const user = await new User({ googleId: profile.id }).save(); // will save to the db for us
        done(null, user);
    }
  )
);
