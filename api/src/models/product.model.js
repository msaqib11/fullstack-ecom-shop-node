import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: Array,

    },
    color: {
        type: Array,

    },
    images: {
        type : [String],
        required: true
    },
    category: {
        type: Array,
    },
    isStock:{
        type: Boolean,
        default: true
    }
}, { timestamps: true })
export default mongoose.model("Product", productSchema)