import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"

const Product = ({product}) => {
  const style = {
    backgroundColor:"rgba(0, 0, 0, 0.2)",
  }
  return (
    <div className="flex-1 m-2 min-w-72 h-80 flex items-center justify-center bg-[#f5fbfd] relative group">
      <div className="w-52 h-52 rounded-full bg-white absolute ">

      </div>
      <img src={product.img} className="h-3/4 z-20" />
      <div className="w-full h-full absolute top-0 left-0  z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-[0.5s] ease-in-out
      cursor-pointer"
      style={style}
  
      >
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white m-3 hover:bg-[#e9f5f5] hover:transform hover:scale-110 cursor-pointer transition-all duration-[0.5s] ease-in-out ">
          <ShoppingCartOutlined/>
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white  m-3 hover:bg-[#e9f5f5] hover:transform hover:scale-110 cursor-pointer transition-all duration-[0.5s] ease-in-out">
          <SearchOutlined/>
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white  m-3 hover:bg-[#e9f5f5] hover:transform hover:scale-110 cursor-pointer transition-all duration-[0.5s] ease-in-out">
          <FavoriteBorderOutlined/>
        </div>
      </div>
    </div>
  )
}

export default Product