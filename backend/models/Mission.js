import mongoose from "mongoose";

const missionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title for the mission'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please provide a description for the mission'],
        trim: true
    },
    status: {
        type: String,
        enum: ['available', 'in-progress', 'completed'],
        default: 'available'
    },
    assignedTo: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        default: null
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    deletedAt: {
        type: Date,
        default: null
    }
}, {
    timestamps: { createdAt: true, updatedAt: true }
});

const Mission = mongoose.model("Mission", missionSchema);
export default Mission;