import { Add, Remove } from "@mui/icons-material"
import { FilterTitle } from "../product-detail"

const Cart = () => {
    return (
        <div className="container mx-auto px-4">
            <div>
                <h1 className="text-4xl font-thin uppercase text-center  m-4">Your Bag</h1>
                <div className="flex justify-between items-center">
                    <button className="border-2 border-black px-3 py-2 uppercase font-semibold cursor-pointer">Continue shopping</button>
                    <div className="flex gap-x-3 capitalize items-center underline font-medium cursor-pointer">
                        <span>shopping bag(2)</span>
                        <span>your whishlist(3)</span>
                    </div>
                    <button className="border-2 border-white text-white bg-black px-3 py-2 uppercase font-semibold cursor-pointer">Checkout Now</button>
                </div>
            </div>
            <div className="flex items-center gap-x-5 mt-4">
                {/* product section  */}
                <div className="flex flex-col w-8/12 p-4">
                    <Product image="https://file.aiquickdraw.com/imgcompressed/img/compressed_db9372a0b23bd412305e4c4039b7fda0.webp" />
                    <hr />
                    <Product image="https://icon2.cleanpng.com/20240105/kpk/transparent-hand-drawn-style-t-shirt-t-shirt-design-skull-desi-skull-t-shirt-design-with-intricate-1710937510827.webp" />
                </div>
                {/* order summary section */}
                <div className="flex flex-col justify-center gap-y-6 h-5/6 p-4 border border-slate-300 rounded-lg">
                    <h1 className="text-center text-4xl font-thin uppercase">Order Summary</h1>
                    <div className="flex justify-between items-center ">
                        <span>subtotal</span> 
                        <span>$20</span>
                    </div>
                    <div className="flex justify-between items-center ">
                        <span>Estimated shipping</span> 
                        <span>$20</span>
                    </div>
                    <div className="flex justify-between items-center ">
                        <span>shipping discount</span> 
                        <span>$20</span>
                    </div>
                    <div className="flex justify-between items-center ">
                        <span className="text-3xl font-semibold">Total</span> 
                        <span className="text-3xl font-semibold">$20</span>
                    </div>
                    <div className="">
                        <button className="w-full border-2 border-white text-white bg-black px-3 py-2 uppercase font-semibold cursor-pointer">Checkout Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Product({ image }) {
    return (
        <div className="flex items-center justify-between w-full gap-x-4  p-4">
            {/* image container */}
            <div className="w-[150px]  h-[150px]">
                <img src={image} className="w-full h-full object-cover" />
            </div>
            {/* product details container */}

            <div className="flex flex-1 justify-between p-6 ">
                <div className="flex flex-col gap-y-2">
                    <div>
                        <span className="font-bold">Product : <span className="uppercase text-sm font-light ml-2">Name</span></span>
                    </div>
                    <div>
                        <span className="font-bold">ID : <span className="uppercase text-sm font-light ml-2">9125468972</span></span>
                    </div>
                    <div>
                        <FilterTitle color="black" />
                    </div>
                    <div>
                        <span className="font-bold">Size : <span className="uppercase text-sm font-light ml-2">44</span></span>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-y-4">
                    {/* cart controlls */}
                    <div className="flex items-center gap-x-2 mt-4">
                        <Add fontSize="large" className="cursor-pointer" />
                        <span className="text-2xl font-semibold">1</span>
                        <Remove fontSize="large" className="cursor-pointer" />
                    </div>
                    <div>
                        <span className="text-3xl font-light">$20</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Cart