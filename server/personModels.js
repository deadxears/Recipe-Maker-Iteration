const { Schema } = require('mongoose');
const mongoose = require('mongoose');
//const crypto = require('crypto'),

const personSchema = new Schema(
  {
    username:{ type: String, required:true },
    password:{type:String, required: true},
    // fridge:{type: Object, required:false}
    // // fridgeItems: { type: Object, required: false },
    // owner:{ type: String},
  },
);

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
