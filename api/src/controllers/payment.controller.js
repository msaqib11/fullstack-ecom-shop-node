
import Stripe from "stripe"
import { stripe } from "../utils/stripe.js"
import { json } from "express"
export const createCheckoutSession = async (req, res) => {
    try {
        const { products } = req.body
        const lineItems = products.map(product => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: product.title,
                    images: [product.images[0]],


                },
                unit_amount: Math.round(product.price * 100),

            },
            quantity: product.quantity,

        }))

        const minimalProducts = products.map((p) => ({
            id: p._id || p.id,
            color: p.color,
            size: p.size,
            quantity: p.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "https://shopflow.io/success",
            cancel_url: "https://shopflow.io/cancel",
            payment_intent_data: {
                metadata: {
                    userId: req.user?._id || "guest",
                    products: JSON.stringify(minimalProducts),
                },
            },
        })

        res.status(200).json({ sessionId: session.id })
    } catch (error) {
        console.error("Stripe Checkout Error:", error.message);
        res.status(500).json({ error: "Stripe checkout session failed." });

    }
}