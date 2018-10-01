var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = new Schema(
    {
      name: {type: String, required: true},
      category: {type: String, enum: ['products', 'services'], required: true},
      url: {type: String, required: true},
      imgurl: {type: String, required: true},
    },
    { collection: 'categories' }
  );

module.exports = mongoose.model('Category', CategorySchema);