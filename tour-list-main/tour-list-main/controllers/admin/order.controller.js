module.exports.list = async (req, res) => {
	res.render("admin/pages/order-list", {
		pageTitle: "Trang quản lý đơn hàng"
	})
}

module.exports.edit = async (req, res) => {
	res.render("admin/pages/order-edit", {
		pageTitle: "Trang chỉnh sửa đơn hàng: OD000001"
	})
}
