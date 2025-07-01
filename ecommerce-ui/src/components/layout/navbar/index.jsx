import { Search, ShoppingCartOutlined } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Navbar = () => {
  const { quantity } = useSelector(state => state.cart)
  return (
    // Container
    <div
      className="h-[60px]"
    >
      {/* wrapper */}
      <div className="py-[10px] px-[20px] flex justify-between items-center">
        {/* left */}
        <div className="flex items-center flex-1">
          {/* languages */}
          <span className="text-sm cursor-pointer">
            EN
          </span>
          <div className="border-[1px] border-slate-400 flex items-center ml-6 p-1">
            <input className="border-none" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        {/* center */}
        <div className="flex-1 text-center">
          <h1 className="font-bold text-3xl uppercase">ShopFlow </h1>
        </div>
        {/* right */}
        <div className="flex-1 flex items-center justify-end gap-5">
          <div className="cursor-pointer text-sm">REGISTER</div>
          <div className="cursor-pointer text-sm">SIGNIN</div>
          <Link to={"/cart"}>
            <div className="cursor-pointer text-sm">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar