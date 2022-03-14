"Use Strict";

exports.home = (req, res) => {
  res.render("index");
};

exports.centerLogin = (req, res) => {
  res.render("centerManagerLogin");
};

exports.aisleLogin = (req, res) => {
  res.render("aisleManagerLogin");
};

exports.adminLogin = (req, res) => {
  res.render("generalAdminLogin");
};
