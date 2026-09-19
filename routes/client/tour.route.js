const router = require('express').Router(); // Router là một đối tượng trong express, dùng để định nghĩa các route cho ứng dụng, express.Router() tạo ra một router mới, có thể sử dụng để định nghĩa các route riêng biệt cho từng phần của ứng dụng.  
const tourController = require('../../controllers/client/tour.controller')


router.get('/', tourController.list ); // get là dùng để 


module.exports = router;