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
    </div>
  )
}

export default Cart