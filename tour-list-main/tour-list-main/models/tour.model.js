const mongoose = require('mongoose');

/*
If the collection name "abcs" -> the model must be "Abc"
For ex: tours -> Tour, users -> User, products -> Product
*/
const Tour = mongoose.model('Tour', { 
    name: String, 
    vehicle: String
});

module.exports = Tour;