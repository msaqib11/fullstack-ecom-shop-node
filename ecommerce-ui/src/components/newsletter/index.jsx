import { Send } from "@mui/icons-material";


const Newsletter = () => {
  return (
    <div className="h-[60vh] bg-[#fcf5f5] flex flex-col items-center justify-center">
      <h1 className="text-[70px] mb-5">Newsletter</h1>
      <p className="text-[24px] font-light mb-5 text-center md:text-left">
        Get timely updates from your favorite products.
      </p>
      <div className="w-4/5 md:w-1/2 h-10 bg-white flex items-center justify-between border border-gray-300">
        <input
          className="flex-1 border-none pl-5 outline-none"
          type="text"
          placeholder="Your email"
        />
        <button className="flex-shrink-0 w-12 h-full bg-teal-500 text-white flex items-center justify-center">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
