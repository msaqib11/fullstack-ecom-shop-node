import React, { useEffect } from 'react';
import { userRequest } from '../../requestMethods';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart, fetchProductsSuccess } from '../../redux/productSlice';



const ListProducts = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products)
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                dispatch(fetchProductsStart())
                const res = await userRequest.get("/products")
                dispatch(fetchProductsSuccess(res.data))
            } catch (error) {
                dispatch(fetchProductsFailure())
                console.error("Error fetching products:", error);
            }
        }
        fetchProducts();
    }, [])
    return (
        <div className="p-6 bg-white rounded-lg shadow-md m-8" >
            <div className='flex justify-between items-center mb-4'>
                <h2 className="text-2xl font-semibold text-gray-800">Product List</h2>
                <button className="btn bg-blue-600 text-white hover:bg-blue-700">
                    Add New Product
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider">
                            <th className="px-4 py-3">ID</th>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3">Category</th>
                            <th className="px-4 py-3">Stock</th>
                            <th className="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {products.map((product) => (
                            <tr key={product._id} className="hover:bg-gray-50">
                                <td className="px-4 py-2">{product._id}</td>
                                <td className="px-4 py-2">{product.title}</td>
                                <td className="px-4 py-2">${product.price}</td>
                                <td className="px-4 py-2">{product.category.map(cat => (
                                    <span key={cat} className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                        {cat}
                                    </span>
                                ))}
                                </td>
                                <td className="px-4 py-2">{product.isStock ? 'In Stock' : 'Out of Stock'}</td>
                               
                                <td className="px-4 py-2">
                                    <button className="text-blue-600 hover:underline mr-2">Edit</button>
                                    <button className="text-red-600 hover:underline">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListProducts;
