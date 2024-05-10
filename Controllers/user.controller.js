import { User } from "../models/user.js";


const newUser = async (req, res) => {
  try {
    const { name, email, image } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        return res.status(500).json({
          success: false,
          message: "User already Exists!",
        });
      }
    const createdUser = await User.create({
      name,
      email,
      image,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      newUserInfo: createdUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to create user",
      error: error.message,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    
    res.status(200).json({
      success: true,
      message: "All users fetched successfully",
      allUsers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch users",
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const deletedUser = await User.findOneAndDelete({ email });

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      deletedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to delete user",
      error: error.message,
    });
  }
};

export { getAllUsers, newUser, deleteUser };