import { useLocation } from "react-router-dom"
import Newsletter from "../../components/newsletter"
import Products from "../../components/products"
import { useState } from "react"


const ProductList = () => {
  const location = useLocation()
  const category = location.pathname.split("/")[2]
  const [filters, setFilters] = useState({})
  const [sort,setSort] = useState("newest")
  function handleFilter(e) {
    const { name, value } = e.target
    setFilters({ ...filters, [name]: value })
  }
  function handleSort(e){
    setSort(e.target.value)
  }
  
  return (
    <div className="m-6">
      <h1 className="mt-[20px] text-4xl font-bold">category</h1>
      <div className="flex justify-between mt-[20px]">
        <div><span className="text-xl font-semibold mr-5">Filter Product</span>
          <select name="color" className="p-2 mr-5 border border-gray-300 rounded"
            onChange={handleFilter}
          >
            <option>white</option>
            <option>black</option>
            <option>blue</option>
            <option>green</option>
            <option>red</option>
            <option>yellow</option>
          </select>
          <select className="p-2 mr-5 border border-gray-300 rounded"
            onChange={handleFilter} name="size"
          >
            <option>xs</option>
            <option>s</option>
            <option>m</option>
            <option>l</option>
            <option>xl</option>
          </select>
        </div>
        <div><span className="text-xl font-semibold mr-5 ">Sort Product</span>
          <select className="p-2 mr-5 border border-gray-300 rounded" onChange={handleSort}>
            <option value="newest" >Newest</option>
            <option value="asc" >Price: High to Low</option>
            <option value="desc">Price: Low to High</option>
          </select>
        </div>
      </div>
      <Products category={category} sort={sort} filters={filters} />
      <Newsletter />

    </div>
  )
}

export default ProductList