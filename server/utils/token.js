import jwt from "jsonwebtoken";
import "dotenv/config";

const SECRET = process.env.JWT_KEY;

export default function newToken(user) {
  return jwt.sign(
    {
      id: user._id,
      user_type: user.user_type,
    },
    SECRET,
    { expiresIn: "1h" }
  );
}
