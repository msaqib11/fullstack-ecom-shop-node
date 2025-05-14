import { categories } from "../../utils/data"
import CategoriesItem from "../categories-item"

const Categories = () => {
  return (
    <div className="flex p-5 justify-between">
        {categories.map((item)=><CategoriesItem key={item.id} item={item}/>)}
    </div>
  )
}

export default Categories