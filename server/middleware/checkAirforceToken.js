import jwt from "jsonwebtoken";
import "dotenv/config";

const SECRET = process.env.JWT_KEY;

export default function navyToken(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).json({ error: "missing authorization field" });
  }
  const token = auth.split(" ");
  if (token[0] !== "Bearer") {
    return res.status(401).json({ error: "Invalid token" });
  }
  try {
    const decoded = jwt.verify(token[1], SECRET);
    if (decoded.user_type !== "admin" || decoded.user_type !== "air force") {
      return res.status(401).json({ error: "only admin or Air force" });
    }
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
}
