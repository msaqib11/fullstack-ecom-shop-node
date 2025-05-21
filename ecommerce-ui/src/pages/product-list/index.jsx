import Newsletter from "../../components/newsletter"
import Products from "../../components/products"


const ProductList = () => {
  return (
    <div className="m-6">
      <h1 className="mt-[20px] text-4xl font-bold">category</h1>
      <div className="flex justify-between mt-[20px]">
        <div><span className="text-xl font-semibold mr-5">Filter Product</span>
          <select className="p-2 mr-5 border border-gray-300 rounded">
            <option disabled selected>color</option>
            <option>white</option>
            <option>black</option>
            <option>blue</option>
            <option>green</option>
            <option>red</option>
            <option>yellow</option>
          </select>
          <select className="p-2 mr-5 border border-gray-300 rounded">
            <option disabled selected>Size</option>
            <option>xs</option>
            <option>s</option>
            <option>m</option>
            <option>l</option>
            <option>xl</option>
          </select>
        </div>
        <div><span className="text-xl font-semibold mr-5 ">Sort Product</span>
          <select className="p-2 mr-5 border border-gray-300 rounded">
            <option disabled selected>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />

    </div>
  )
}

export default ProductList