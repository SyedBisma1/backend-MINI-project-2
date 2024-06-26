import mongoose from "mongoose";

try {
    const Connection = await mongoose.connect("mongodb+srv://Bisma:Bisma2@cluster1.pwnpfs7.mongodb.net/");
    if (Connection) {
        console.log(`Database Connected At ${Connection.connection.host}`);
    }
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
}

const UserSchema = mongoose.Schema({
    name: String,
    email: String, // Fixed typo here
    image: String
}, {});

export const User = mongoose.model("User", UserSchema);
