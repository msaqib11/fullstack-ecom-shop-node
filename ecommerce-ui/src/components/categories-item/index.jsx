const CategoriesItem = ({ item }) => {
  const { img, title } = item || {}
  return (
    <div className="flex-1 m-1 h-[70vh] relative">
      <img src={img} className="w-full h-full object-cover" />
      <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center">
        <h1 className="text-5xl mb-3 text-white">{title}</h1>
        <button className="px-5 py-3 cursor-pointer text-lg font-semibold bg-white text-slate-700 border border-black">
          SHOP NOW
        </button>
      </div>
    </div>
  )
}

export default CategoriesItem