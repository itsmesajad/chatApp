import jwt  from "jsonwebtoken";

const generateTokenandCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '15d' });
    res.cookie('access_token', token, { 
        maxAge: 15*24*60*60*1000, // milliseconds
        httpOnly : true, // prevent XSS attacks (cross-site scripting attacka)
        sameSite : "strict", // prevent CSRF attacks (cross-site request attacks)
        secure: process.env.NODE_ENV !== "development", // use HTTPS instead of plain HTTP connections
    });
}

export default generateTokenandCookie