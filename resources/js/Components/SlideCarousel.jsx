import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideIntervals = [500, 900, 1000];

    const carouselRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(
                (prevSlide) => (prevSlide + 1) % carouselItems.length
            );
        }, slideIntervals[currentSlide]);

        return () => clearInterval(interval);
    }, [currentSlide]);

    const carouselItems = [
        {
            id: "item1",
            background: "bg-white",
            backgroundColor: "bg-red-500",
            textColor: "text-white",
            colorTitle: "text-red-500",
            imgSrc: "/assets/img/woman-with-his-rocket.png",
            title: "Promo Ngebut",
            subtitle: "Awal Bulan",
            content: "Dijamin aman dan nyaman",
        },
        {
            id: "item2",
            background: "bg-red-500",
            backgroundColor: "bg-red-400",
            textColor: "text-white",
            colorTitle: "text-white",
            imgSrc: "/assets/img/person-drinking-coffe.png",
            title: "Mau jalan-jalan?",
            subtitle: "tapi bingung cari penginapan",
            content: "Cari Disini Yuk..",
        },
        {
            id: "item3",
            background: "bg-gradient-to-r from-white via-red-400 to-red-500",
            backgroundColor: "bg-red-400",
            textColor: "text-white",
            colorTitle: "text-red-500",
            imgSrc: "/assets/img/living-room.png",
            title: "Nyantai sejenak",
            subtitle: "nikmati kenyamanan",
            content: "Hanya ada disini..",
        },
    ];

    const handleSlideChange = (newSlide) => {
        setCurrentSlide(newSlide);
    };

    const handleKeyDown = (e) => {
        if (e.key === "ArrowLeft") {
            handleSlideChange(
                (currentSlide - 1 + carouselItems.length) % carouselItems.length
            );
        } else if (e.key === "ArrowRight") {
            handleSlideChange((currentSlide + 1) % carouselItems.length);
        }
    };

    return (
        <>
            <div
                className="carousel w-full flex justify-center"
                data-testid="slide-carousel"
                onKeyDown={handleKeyDown}
                ref={carouselRef}
                tabIndex={0}
                style={{
                    transform: `translateX(-${
                        (100 / carouselItems.length) * currentSlide
                    }%)`,
                    transition: "transform 0.5s ease-in-out",
                }}
            >
                {carouselItems.map((item, index) => (
                    <div
                        key={item.id}
                        className={`carousel-item w-1/3 slider-card relative transition-opacity duration-300 opacity-${
                            index === currentSlide ? "100" : "10"
                        }`}
                    >
                        <div
                            id={item.id}
                            className={`flex px-4 py-2 w-full justify-center items-center ${item.background} rounded-3xl shadow-lg`}
                        >
                            <div className="flex flex-col items-center justify-center">
                                <h2
                                    className={`text-2xl font-semibold ${item.colorTitle}`}
                                >
                                    {item.title}
                                </h2>
                                <h3 className={`text-xl ${item.colorTitle}`}>
                                    {item.subtitle}
                                </h3>
                                <p
                                    className={`p-2 mt-2 text-sm font-semibold rounded-2xl ${item.backgroundColor} ${item.textColor}`}
                                >
                                    {item.content}
                                </p>
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    src={item.imgSrc}
                                    className="w-full"
                                    alt={`${item.title} image`}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                {carouselItems.map((item, index) => (
                    <button
                        key={item.id}
                        className={`w-4 h-4 rounded-full border-2 border-red-500 ${
                            index === currentSlide ? "bg-red-500" : "bg-white"
                        }`}
                        onClick={() => handleSlideChange(index)}
                    ></button>
                ))}
            </div>
        </>
    );
};

export default SlideCarousel;
