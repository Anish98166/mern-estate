import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
      result: newUser,
    });
  } catch (error) {
    next(error);
  }
};

export default signup;
