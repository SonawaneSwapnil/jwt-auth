const jwt = require("jsonwebtoken");
const scecret = "Swap$123";
const { use } = require("../routes/url");
function setUser(user) {
  return jwt.sign({ _id: user._id, email: user.email }, scecret);
}

function getUser(token) {
  if (!token) return null;
  return jwt.verify(token, scecret);
}

module.exports = {
  setUser,
  getUser,
};
