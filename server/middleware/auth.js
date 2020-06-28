const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
    const bearer = req.headers['authorization'];
    const token = bearer.split(' ')[1];
    if (!token) return res.status(401).json({ message: "Auth Error" });

    try {
        console.log(token)
        const decoded = jwt.verify(token, "SECRET_KEY");
        req.user = decoded.user;
        next();
    } catch (e) {
        console.error(e);
        res.status(500).send({ expired: true });
    }
};