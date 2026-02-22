import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: [true, 'Please provide your first name'],
        trim: true
    },
    lastname: {
        type: String,
        required: [true, 'Please provide your last name'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        select: false
    },
    role: {
        type: String,
        enum: ['admin', 'manager', 'hero', 'user'],
        default: 'user'
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    deletedAt: {
        type: Date,
        default: null
    },
    passwordChangedAt: {
        type: Date
    },
    missions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mission'
    }]
}, {
    timestamps: { createdAt: true, updatedAt: true }
});

userSchema.pre('save', async function () {
    if (!this.isModified('password')) {
        return;
    }
    this.password = await bcrypt.hash(this.password, 12);
});

userSchema.methods.correctPassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(
            this.passwordChangedAt.getTime() / 1000,
            10
        );
        return changedTimestamp > JWTTimestamp;
    }
    return false;
};

const User = mongoose.model("User", userSchema);
export default User;