import { useState } from "react";

function AddProduct() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    size: [""],
    color: [""],
    category: [""],
    images: [],
    isStock: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleArrayChange = (field, index, value) => {
  const updated = [...formData[field]]
  updated[index] = value
  setFormData({...formData,[field]:updated})
  };

  const addField = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  const removeField = (field, index) => {
    const updated = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: updated });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, images: [...formData.images, ...e.target.files] });
  };

  const removeImage = (index) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // later: send with FormData to backend
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow rounded-lg mt-2">
      <h2 className="text-xl font-semibold mb-6">Add Product</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title + Price */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded p-2"
            rows="3"
          />
        </div>

        {/* Arrays (size, color, category) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {["size", "color", "category"].map((field) => (
          <div  key={field}>
            <label className="block text-sm mb-1 capitalize">{field}</label>
            {formData[field].map((val, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={val}
                  onChange={(e) => handleArrayChange(field, i, e.target.value)}
                  className="flex-1 border rounded p-2"
                />
                <button
                  type="button"
                  onClick={() => removeField(field, i)}
                  className="text-red-500"
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addField(field)}
              className="text-sm text-indigo-600"
            >
              + Add {field}
            </button>
          </div>
        ))}
        </div>

        {/* Images */}
        <div>
          <label className="block text-sm mb-1">Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm"
          />
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {formData.images.map((file, i) => (
              <div key={i} className="relative">
                <img
                  src={URL.createObjectURL(file)}
                  alt=""
                  className="h-24 w-full object-cover border rounded"
                />
                <button
                  type="button"
                  onClick={() => removeImage(i)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full text-xs px-1"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Stock */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isStock"
            checked={formData.isStock}
            onChange={handleChange}
          />
          <label>In Stock</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white rounded p-3 hover:bg-indigo-700"
        >
          Save Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
