const jwt = require("jsonwebtoken");


function jwtGenerator(username) {
  const payload = {
    user: {
      id: username
    }
  };
  


  return jwt.sign(payload, "drunkdrivers", { expiresIn: "8h" });
}

module.exports = jwtGenerator;