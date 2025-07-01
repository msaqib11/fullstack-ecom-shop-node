import { Order } from "../models/index.js"
import { stripe } from "../utils/stripe.js"
export const stripeWebHook = async (req, res) => {

    let signingSecret = "whsec_ca4e28a8afbf8f7035b94c490267db9d8519a2bac182a6dc8f9ff071f4534c38"
    const payload = req.body
    const sig = req.headers["stripe-signature"]
    let event;
    try {
        event = stripe.webhooks.constructEvent(payload, sig, signingSecret)
    } catch (error) {
        console.log(error.message)
        return res.status(400).json({ success: false });
    }


    if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        const paymentIntentId = session.payment_intent;

        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
        const { id: paymentId, metadata } = paymentIntent
        try {
            const parsedProducts = JSON.parse(metadata.products);

            const orderProducts = parsedProducts.map((p) => ({
                productId: p.id,
                quantity: p.quantity,
                color: p.color,
                size: p.size
            }))

            const newOrder = new Order({
                userId: metadata.userId || "guest",
                paymentId,
                paymentType: "stripe",
                products: orderProducts,
                amount: Number(paymentIntent.amount)/100,
                status: "paid"
            })

            await newOrder.save()
            console.log("Order Created")
        } catch (error) {
            console.log(error)
        }

    }
    res.status(200).json({ success: true });

}