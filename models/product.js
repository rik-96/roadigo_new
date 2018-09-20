var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema(
    {
      prodid: {type: Number, required: true},
      name: {type: String, required: true},
      category: {type: String, enum: ['products', 'services'], required: true},
      url: {type: String, required: true},
      price: {type: String, required: true},
      details: {type: String, required: true}
    }
  );

module.exports = mongoose.model('Product', ProductSchema);