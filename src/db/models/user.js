import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    login: String,
    email: {type: String, required: true},
    password: {type: String, required: true},
}, {
    timestamps: true
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;