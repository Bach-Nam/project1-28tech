const mongoose = require('mongoose');

const Tour = mongoose.model('Tour', {
   name: String ,
   vehicle: String,  
  }); // tạo model Tour dùng để thao tác với collection tours trong database tour-management, name là thuộc tính của model Tour

  module.exports = Tour;
  