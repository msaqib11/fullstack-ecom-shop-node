import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material"
import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../../store/cartSlice"
import toast, { Toaster } from 'react-hot-toast';

const ProductDetail = () => {
    const { id } = useParams()
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState(null)
    const [size, setSize] = useState(null)
    const dispatch = useDispatch()
    function handleQuantity(operator) {
        return () => {
            if (operator === "inc") {
                setQuantity(quantity + 1)
            } else if (operator === "dec") {
                if (quantity === 1) return
                setQuantity(quantity - 1)

            }
        }
    }
    const { data: product, isloading, error } = useFetch(`/products/get-product/${id}`)
    const images = product?.images || [];
    const [selectedImage, setSelectedImage] = useState(images[0] || null)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const handleImageChange = (newImage) => {
        if (newImage === selectedImage) return

        setIsTransitioning(true)
        setTimeout(() => {
            setSelectedImage(newImage)
            setIsTransitioning(false)
        }, 150)
    }

    function handleAddToCart() {
        dispatch(addToCart({ ...product, id: product._id, quantity, price: product?.price, color, size }))
        toast.success("Product added to cart")
    }


    useEffect(() => {
        setSelectedImage(images[0])
    }, [images])

    return (
        <div className="p-12 flex justify-center  max-w-7xl mx-auto">
            <Toaster />
            <div className="flex flex-col ">
                <div>
                    <img className={`w-[70vh] h-[60vh] object-cover transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'
                        }`} src={selectedImage} alt="product-image" />
                </div>
                <div className="flex gap-x-4 mt-4">
                    {images?.map((image, index) => (
                        <img className={`w-24 h-24 object-cover  p-2 ${image === selectedImage ? "border border-blue-400" : ""}`} src={image} alt="product-image" key={index} onClick={() => handleImageChange(image)}
                        />
                    ))}
                </div>
            </div>
            <div className="flex-1 py-0 px-12 flex flex-col gap-y-6 ">
                <h1 className="text-4xl font-light">{product?.title}</h1>
                <p>
                    {product?.description}
                </p>
                <span className="text-4xl font-thin">
                    $ {product?.price}
                </span>
                {/* filter container */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-x-1">
                        <span>Color</span>
                        {product?.color?.map((c) => (
                            <FilterTitle color={c} key={c} selectedColor={color} onClick={() => setColor(c)} />
                        ))}
                    </div>
                </div>
                <div>
                    <div className="flex gap-x-3 items-center">
                        <span>Size</span>
                        <select className="border border-grey p-2" onChange={(e) => setSize(e.target.value)}>
                            <option disabled selected>select size</option>
                            {product?.size?.map((s) => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Add to cart container */}
                <div className="flex items-center gap-x-2 mt-4">
                    <AddCircleOutline fontSize="large" className="cursor-pointer" onClick={handleQuantity("inc")} />
                    <span className="text-xl font-semibold border border-teal-600 px-3 rounded-full">{quantity}</span>
                    <RemoveCircleOutline fontSize="large" className="cursor-pointer" onClick={handleQuantity("dec")} />
                </div>
                <div>
                    <button className="px-5 py-3 cursor-pointer text-lg font-semibold bg-white text-slate-700 border-2 border-teal-600 hover:bg-teal-600 hover:text-white"
                        onClick={handleAddToCart}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export function FilterTitle({ color, onClick,selectedColor }) {
    return (
        <button className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-white ${color===selectedColor ? `border border-[${color}]` : ""}`} onClick={onClick}
        >
            <span
                style={{ backgroundColor: color }}

                className="w-8 h-8 rounded-full inline-block cursor-pointer "

            ></span>

        </button>
    )
}

export default ProductDetail