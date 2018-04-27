const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const months = ['january', 'Decemember'];

const FriendSchema = new Schema({
  name: String,
  
})

const PersonSchema = new Schema({
    password: {type: String, validate: passwordLengthValidator, msg: 'Password to Short'},
    firstName: {
      type: String,
      required: true,
      index: true, //new
      lowercase: true
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    friends: [],
    age: { type: Number, min: 0, max: 150 }, //new
    gender: String,
    location: String,
    dateOfBirth: Date,
    workDay: { type: String, match: /^(mon|tues|wednes|thur|fri)day$/i },
    months: { type: String, enum: months } // new
},
{ runSettersOnQuery: true }
); //new

// Custom validators
function passwordLengthValidator(password) {
  return password.length >= 10;
}

//virtuals

PersonSchema.virtual('fullname').get(function() {
  return `${this.firstName} ${this.lastName}`;
})

PersonSchema.virtual('fullname').set(function(name) {
  this.first = name.split(' ')[0];
  this.last = name.split(' ')[1];
})

// two types of indexs: 
// path level: index
// schema level: used for compound indexs
PersonSchema.index({ firstName: 1, lastName: 1});

// PersonSchema.pre('save', function(val) {
//   // grab only the numbers using regex

// })

module.exports = mongoose.model('Person', PersonSchema);
