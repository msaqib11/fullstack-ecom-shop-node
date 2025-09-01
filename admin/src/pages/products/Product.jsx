import React, { useState } from "react";
import {useLocation} from "react-router-dom";
import { useSelector } from "react-redux";
import DashboardCard14 from "../../partials/dashboard/DashboardCard14";


function Product() {
  const [selectedImage, setSelectedImage] = useState(null);
  const productId = useLocation().pathname.split("/")[2]
  const productData = useSelector((state)=>state.product.products.find(product=>product._id === productId))
 
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Product</h1>
     
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Sales Performance Box */}
        <div className="bg-white shadow rounded-2xl p-4 border border-blue-700">
          <h2 className="text-lg font-semibold mb-2">Sales Performance</h2>
          <div className="flex-1 flex items-center justify-center text-gray-400 w-full">
            {/* Graph Placeholder */}
            <div className="w-full h-full">
              <DashboardCard14 productId={productData._id} />
            </div>
        
          </div>
        </div>

        {/* Product Info */}
        <div className="f bg-white shadow rounded-2xl p-10 flex flex-col  gap-4 ">
          <img
            src={productData.images[0]}
            alt="Product"
            className="w-40 h-40 object-cover rounded-lg border"
          />
          <div className="flex flex-col gap-y-6"> 
            <h2 className="text-lg font-semibold">{productData.title}</h2>
            <p className="text-sm text-gray-500">id: {productData._id}</p>
            <p className="text-sm">Price: {productData.price} $</p>
            <p className="text-sm">in stock: {productData.isStock ? "yes":"no"}</p>
          </div>
        </div>
      </div>

      {/* Product Form */}
      <div className="bg-white shadow rounded-2xl p-6">
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            value="Herman Coat"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Product Description</label>
          <textarea
            rows="2"
            defaultValue="Lorem Ipsum is simply dummy text"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            value="89"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">In Stock</label>
          <select className="mt-1 block w-full border border-gray-300 rounded-lg p-2 text-sm">
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div className="mb-6 flex items-center justify-between ">
        <div >
         <img
            src={productData.images[0]}
            alt="Product"
            className="w-20 h-20 object-cover rounded-lg border"
          />
        </div>
         <div className="flex flex-col gap-4">
            <label className="block text-sm font-medium text-gray-700">Upload Product Image</label>
           <input
            type="file"
            accept="image/*"
            onChange={(e) => setSelectedImage(e.target.files[0])}
            className="mt-1 block w-full text-sm"
          />
         </div>
        </div>

        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700">
          Update
        </button>
      </div>
    </div>
  );
}
export default Product;