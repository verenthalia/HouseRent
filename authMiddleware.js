const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    console.log("COOKIE:", req.cookies);
    console.log("TOKEN:", token);

    if (!token) {
      return res
        .status(401)
        .send({ message: "No token found in cookies", success: false });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res
          .status(200)
          .send({ message: "Token is not valid", success: false });
      } else {
        req.userId = decode.id;
        next();
      }
    });
  } catch (error) {
    console.error(error); 
    res.status(500).send({ message: "Internal server error", success: false });
  }
};

module.exports = {
  authMiddleware
}