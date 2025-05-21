import Categories from "../../components/categories"
import Newsletter from "../../components/newsletter"
import Products from "../../components/product"
import Slider from "../../components/slider"

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