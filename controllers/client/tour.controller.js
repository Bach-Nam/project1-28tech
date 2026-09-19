const Tour = require("../../models/tour.model"); // lấy cơ sở dữ liệu

module.exports.list = async (req, res) => {
  try {
    const tourlist = await Tour.find({}); // lấy csdl thông qua model Tour
    console.log(tourlist);
    res.render('client/pages/tour-list', {
      pageTitle: 'Danh sách tour',
      tourlist: tourlist,
    });
  } catch (error) {
    console.error('Lỗi lấy danh sách tour:', error.message);
    res.status(500).send('Không thể lấy danh sách tour từ cơ sở dữ liệu.');
  }
}