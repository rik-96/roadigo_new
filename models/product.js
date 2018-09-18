var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema(
    {
      name: {type: String, required: true},
      category: {type: String, enum: ['products', 'services'], required: true},
      price: {type: Number, required: true},
      details: {type: String, required: true}
    }
  );

module.exports = mongoose.model('Product', ProductSchema);