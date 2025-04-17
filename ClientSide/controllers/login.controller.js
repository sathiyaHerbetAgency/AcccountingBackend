import { adminlogin } from "../models/invoice.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

 const loginController = async (req, res) => {
    const { username, password } = req.body;
  console.log(process.env.JWT_SECRET)
    try {
      // Find the admin by username
      const admin = await adminlogin.findOne({ username });
      console.log(admin)
      if (!admin) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      // Compare the provided password with the hashed password stored in the DB
       // Directly compare stored plain text password with provided password
    if (admin.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      // Create a payload for the JWT

  
      // Create a payload for the JWT
      const payload = {
        id: "1222",
        username: admin.username,
      };
  
      // Sign the token with your secret key (ensure process.env.JWT_SECRET is set)
      const token = jwt.sign(payload, "2342423423423huihdsgdgfsdfsgdfsg",);
  
      // Respond with the JWT token
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  

export {loginController}