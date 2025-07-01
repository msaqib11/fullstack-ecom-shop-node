import { Add, Remove } from "@mui/icons-material"
import { FilterTitle } from "../product-detail"
import { useDispatch, useSelector } from "react-redux"
import { updateQuantity } from "../../store/cartSlice"
import { STRIPE_PUBLISHABLE_KEY } from "../../config/env"
import { loadStripe } from "@stripe/stripe-js"
import axiosInstance from "../../api/axios"
import { useState } from "react"

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const [isCheckout,setIsCheckout] = useState(false)
    const shippingAmount = 10
    const shippingDiscount = 5
    const TotalPrice = cart.totalPrice + shippingAmount - shippingDiscount

    async function handlePayment(){
        setIsCheckout(true)
        const stripe = await loadStripe(STRIPE_PUBLISHABLE_KEY)
        const body = {
            products : cart.cartItems,
        }

        const response = await axiosInstance.post("/payments/create-checkout-session",body)
        const result = await stripe.redirectToCheckout({
            sessionId : response.data.sessionId

        })
        setIsCheckout(false)
        if(result.error){
            console.log(result.error)
        }
    }
    return (
        <div className="container mx-auto px-4">
            <div className="">
                <h1 className="text-4xl font-thin uppercase text-center  m-4">Your Bag</h1>
                <div className="flex flex-col md:flex-row gap-y-3 justify-between items-center">
                    <button className=" border-2 border-black md:w-2/5 px-3 py-2 uppercase font-semibold cursor-pointer w-full">Continue shopping</button>
                    <div className="flex w-full justify-between md:justify-center md:flex-row gap-x-3 capitalize items-center underline font-medium cursor-pointer">
                        <span>shopping bag({cart.quantity})</span>
                        <span>your whishlist(3)</span>
                    </div>
                    <button className="border-2 md:w-2/5 border-white text-white bg-black px-3 py-2 uppercase font-semibold cursor-pointer w-full">Checkout Now</button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-x-5 mt-4  justify-between ">
                {/* product section  */}
                <div className="flex flex-col w-full md:w-8/12 p-4">

                    {cart.cartItems.map((product, index) => (
                        <Product product={product} key={index} />
                    ))}
                    <hr />
                </div>
                {/* order summary section */}
                <div className="flex flex-col justify-center gap-y-6 h-5/6 p-4 border border-slate-300 rounded-lg">
                    <h1 className="text-center text-4xl font-thin uppercase">Order Summary</h1>
                    <div className="flex justify-between items-center ">
                        <span>subtotal</span>
                        <span>${Math.round(cart.totalPrice)}</span>
                    </div>
                    <div className="flex justify-between items-center ">
                        <span>Estimated shipping</span>
                        <span>${shippingAmount}</span>
                    </div>
                    <div className="flex justify-between items-center ">
                        <span>shipping discount</span>
                        <span>${shippingDiscount}</span>
                    </div>
                    <div className="flex justify-between items-center ">
                        <span className="text-3xl font-semibold">Total</span>
                        <span className="text-3xl font-semibold">${Math.round(TotalPrice)}</span>
                    </div>
                    <div className="" onClick={handlePayment}>
                        <button className={`w-full border-2  border-white text-white bg-black px-3 py-2 uppercase font-semibold cursor-pointer ${isCheckout ? "opacity-50" : ""}`}
                        disabled={isCheckout}
                        >Checkout Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Product({ product }) {
    const { _id, title, price, quantity, color, size, images } = product
    const dispatch = useDispatch()

    function handleQty(operator) {
        return () => {
            const newQty = operator === "inc" ? quantity + 1 : quantity - 1
            dispatch(updateQuantity({ id: _id, newQty }))
        }
    }
    return (
        <div className="flex flex-col  md:flex-row items-center justify-between w-full gap-x-4  p-2 md:p-4">
            {/* image container */}
            <div className="w-[150px]  h-[150px]">
                <img src={images[0]} className="w-full h-full object-cover" />
            </div>
            {/* product details container */}

            <div className="flex flex-col w-full md:flex-row  flex-1 justify-between p-6 ">
                <div className="flex flex-col gap-y-2">
                    <div>
                        <span className="font-bold">Product : <span className="uppercase text-sm font-light ml-2">{title}</span></span>
                    </div>
                    <div>
                        <span className="font-bold">ID : <span className="uppercase text-sm font-light ml-2">{_id}</span></span>
                    </div>
                    <div>
                        <FilterTitle color={color} />
                    </div>
                    <div>
                        <span className="font-bold">Size : <span className="uppercase text-sm font-light ml-2">{size}</span></span>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-y-4">
                    {/* cart controlls */}
                    <div className="flex items-center gap-x-2 mt-4">
                        <Add fontSize="large" className="cursor-pointer" onClick={handleQty("inc")} />
                        <span className="text-2xl font-semibold">{quantity}</span>
                        <Remove fontSize="large" className="cursor-pointer" onClick={handleQty("dec")} />
                    </div>
                    <div>
                        <span className="text-3xl font-light">${Math.round(quantity * price)}</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Cart