import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { sliderItems } from "../../utils/data";
import { useState } from "react";

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        console.log(slideIndex);
        if (direction === "left") {
            console.log("left");
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
        } else {
            console.log("right");
            setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
        }
    };

    return (
        <div className="w-full h-screen flex relative overflow-hidden">
            {/* Left Arrow */}
            <div
                className="w-12 h-12 bg-[#fff7f7] opacity-50 rounded-full flex items-center justify-center absolute top-0 bottom-0 m-auto left-3 cursor-pointer z-50"
                onClick={() => handleClick("left")}
            >
                <ArrowLeftOutlined />
            </div>

            {/* Slider Container */}
            <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{
                    transform: `translateX(-${slideIndex * 100}vw)`,
                }}
            >
                {sliderItems.map((item) => {
                    console.log(item.bg)
                   return(
                    <div
                    className={`h-full w-screen flex-shrink-0`}
                    style={{backgroundColor : `${item.bg}`}}
                    key={item.id}
                >
                    <div className="flex items-center h-screen w-screen">
                        {/* Image Section */}
                        <div className="flex-1 h-full flex justify-center items-center">
                            <img src={item.img} className="h-4/5 w-full object-contain" alt="slide" />
                        </div>

                        {/* Text Section */}
                        <div className="flex-1 p-[50px]">
                            <h1 className="text-7xl">{item.title}</h1>
                            <p className="my-[50px] text-xl font-medium tracking-[3px]">
                                {item.desc}
                            </p>
                            <button className="px-5 py-3 cursor-pointer text-lg font-semibold border border-black">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </div>
                   )
})}
            </div>

            {/* Right Arrow */}
            <div
                className="w-12 h-12 bg-[#fff7f7] opacity-50 rounded-full flex items-center justify-center absolute top-0 bottom-0 m-auto right-3 cursor-pointer"
                onClick={() => handleClick("right")}
            >
                <ArrowRightOutlined />
            </div>
        </div>
    );
};

export default Slider;
