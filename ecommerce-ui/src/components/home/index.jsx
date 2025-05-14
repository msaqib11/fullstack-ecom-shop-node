import Categories from "../categories"
import Newsletter from "../newsletter"
import Products from "../products"
import Slider from "../slider"

const Home = () => {
  return (
    <div>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
    </div>
  )
}

export default Home