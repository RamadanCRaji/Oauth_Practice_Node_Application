const Schema = require("mongoose").Schema;
const mongoose = require("mongoose");

const UserSchema = new Schema({
   username: { type: String, unique: true },
   googleId: { type: String, unique: true },
   thumbnail: String,
   password: String,
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
