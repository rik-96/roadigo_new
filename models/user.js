var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    name: {type: String, required: true, min:3, max: 100},
    email: {type: String, required: true, max: 100},
    psw: {type: String, required: true, min: 6, max: 20},
    cart: [Number]
  }
);

module.exports = mongoose.model('User', UserSchema);