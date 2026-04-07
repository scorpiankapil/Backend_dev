import mongoose from "mongoose";

// Schema to track which books a member has borrowed
const borrowSchema = new mongoose.Schema({
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member",
        required: true
    },
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        }
    ]
}, { timestamps: true });

export const Borrow = mongoose.model("Borrow", borrowSchema);
