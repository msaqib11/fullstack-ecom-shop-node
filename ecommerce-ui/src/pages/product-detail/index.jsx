import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material"

const ProductDetail = () => {
    return (
        <div className="p-12 flex">
            <div className="flex-1">
                <img className="w-full h-[80vh] object-cover" src="https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product-image" />
            </div>
            <div className="flex-1 py-0 px-12 flex flex-col gap-y-6">
                <h1 className="text-4xl font-light">Product Name</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore illum quos distinctio commodi sunt eum, sed impedit iusto, totam, quisquam quae corrupti atque libero alias iure. Cumque in voluptatum doloremque!
                </p>
                <span className="text-4xl font-thin">
                    $20
                </span>
                {/* filter container */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-x-1">
                        <span>Color</span>
                        <FilterTitle color="black" />
                        <FilterTitle color="green" />
                        <FilterTitle color="blue" />
                    </div>
                </div>
                <div>
                    <div className="flex gap-x-3 items-center">
                        <span>Size</span>
                        <select className="border border-grey p-2 ">
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>

                        </select>
                    </div>
                </div>

                {/* Add to cart container */}
                <div className="flex items-center gap-x-2 mt-4">
                    <AddCircleOutline fontSize="large" />
                    <span className="text-xl font-semibold border border-teal-600 px-3 rounded-full">1</span>
                    <RemoveCircleOutline fontSize="large" />
                </div>
                <div>
                    <button className="px-5 py-3 cursor-pointer text-lg font-semibold bg-white text-slate-700 border-2 border-teal-600 hover:bg-teal-600 hover:text-white">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

function FilterTitle({ color }) {
    return (
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white">
            <span
                style={{ backgroundColor: color }}
                className="w-8 h-8 rounded-full inline-block cursor-pointer"
            ></span>
        </span>
    )
}

export default ProductDetail