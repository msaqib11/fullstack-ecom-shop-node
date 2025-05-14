import { popularProducts } from "../../utils/data"
import Product from "../product"
const Products = () => {
  return (
    <div className="p-5 flex flex-wrap justify-between">
        {popularProducts.map((product)=><Product key={product.id} product={product}/>)}
    </div>
  )
}

export default Products