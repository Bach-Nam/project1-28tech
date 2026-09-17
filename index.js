const express = require('express');
const path = require('path'); // path là module có sẵn trong nodejs, giúp xử lý đường dẫn
const app = express();
const port = 3000;
app.set('views', path.join(__dirname, 'views')); // set views là nơi chứa các file template, join là nối đường dẫn, __dirname là đường dẫn hiện tại của project
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('client/pages/home', {
    pageTitle: 'Trang chủ'
  });
});

app.get('/tour', (req, res) => {
  res.render('client/pages/tour-list',{
    pageTitle: 'Danh sách tour'
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

