import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    userId: {
        type:mongoose.Schema.Types.Mixed,
        ref: "User",
        default : "guest"
    },
    paymentId : {
        type: String,
        required: true,
    },
    paymentType : {
        type: String,
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity: {
                type: Number,
                default: 1
            },
            color : {
                type: String,
            },
            size: {
                type: String,
            }
        },

    ],
    amount: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: "pending"
    }
}, { timestamps: true });
export default mongoose.model("Order", OrderSchema);