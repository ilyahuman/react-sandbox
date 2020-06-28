const jwt = require("jsonwebtoken");

const generateToken = (data, secretKey, expiresIn) => {
    return jwt.sign(data, secretKey, { expiresIn: expiresIn });
}

module.exports = generateToken;