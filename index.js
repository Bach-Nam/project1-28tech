const express = require('express');
const path = require('path'); // path là module có sẵn trong nodejs, giúp xử lý đường dẫn
require('dotenv').config() // nhùng dotenv 
const app = express(); 
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE)
  .then(() => console.log('Đã kết nối MongoDB'))
  .catch((error) => console.error('Không thể kết nối MongoDB:', error.message));
const clientRoute = require('./routes/client/index.route')


// Thiết lập view
app.set('views', path.join(__dirname, 'views')); // set views là nơi chứa các file template, join là nối đường dẫn, __dirname là đường dẫn hiện tại của project
app.set('view engine', 'pug');

// Thiết lập thư mục chứa file frontend
app.use(express.static(path.join(__dirname, 'public')));  // express.static dùng để  làm cho public trở thành thư mục tĩnh, có thể truy cập trực tiếp từ trình duyệt

//Thiết lập dduownfwg dẫn Router
app.use('/', clientRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

