module.exports.home = async (req, res) => {
  res.render("client/pages/home", {
    pageTitle: "The home of page"
  })
}