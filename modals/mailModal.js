import mongoose from "mongoose";

const mailSchema = mongoose.Schema({
    to: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
    },
    body: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    image: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    starred: {
        type: Boolean,
        required: true,
        default: false
    },
    bin: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Mail = mongoose.model('Mails', mailSchema)

export default Mail;