const getHomePage = (req, res) => {
  // res.render("sample.ejs");
  return res.render("home.ejs");
};
const getABC = (req, res) => {
  res.send("hoc backend nao");
};
const getXYZ = (req, res) => {
  res.send("minh thu nha");
};
const postCreateUser = (req, res) => {
  console.log(">>>check req.body", req.body);
  res.send("create new user");
};
module.exports = {
  getHomePage,
  getABC,
  getXYZ,
  postCreateUser,
};
