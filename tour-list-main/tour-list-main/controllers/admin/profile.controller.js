module.exports.changePassword = async (req, res) => {
  res.render("admin/pages/profile-change-password", {
    title: "Trang đổi mật khẩu"
  })
}

module.exports.edit = async (req, res) => {
  res.render("admin/pages/profile-edit", {
    title: "Trang thông tin cá nhân"
  })
}