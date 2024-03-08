const mongoose = require('mongoose');

const brandSchema = require('./brands');
const consolesSchema = require('./consoles');
const gamesSchema = require('./games');
const userSchema = require('./user');


const Brand = mongoose.model('Brand', brandSchema);
const Consoles = mongoose.model('Consoles', consolesSchema);
const Games = mongoose.model('Games', gamesSchema);
const User = mongoose.model('User', userSchema);


module.exports = {
    Brand,
    Consoles,
    Games,
    User,
}