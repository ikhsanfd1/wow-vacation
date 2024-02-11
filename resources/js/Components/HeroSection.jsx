import React from "react";
import SlideCarousel from "./SlideCarousel";

const HeroSection = () => {
    return (
        <section className="bg-white my-4 mx-4 md:mx-8 lg:mx-16 px-4 py-2 rounded-md">
            {/* jumbotron 1 */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="lg:w-7/12 md:w-full sm:w-full mb-2">
                    <div className="container">
                        <h3 className="text-gray-700 font-bold text-xl md:text-2xl mb-2">
                            Mau Cari Homestay atau Guesthouse
                        </h3>
                        <h3 className="text-gray-700 font-bold text-xl md:text-2xl mb-2">
                            murah di semua tempat?
                        </h3>
                        <h6 className="text-gray-700">
                            Dapatkan infonya dan langsung sewa di homestay.
                        </h6>
                    </div>

                    {/* input form search something */}
                    <form
                        className="flex flex-col md:flex-row mt-4"
                        role="search"
                    >
                        <input
                            className="form-input w-full md:w-10/12 input-field rounded-md px-4 py-2 focus:outline-none focus:shadow-outline"
                            type="search"
                            placeholder="Masukan nama lokasi/alamat/area"
                            aria-label="Search"
                            id="input-cari-beranda"
                        />
                        <button
                            className="bg-[#E8323C] text-white w-full md:w-2/12 md:ml-2 mt-2 md:mt-0 rounded-md px-4 py-2"
                            type="submit"
                            id="button-cari"
                        >
                            Cari
                        </button>
                    </form>
                </div>
                <div className="lg:w-5/12 md:w-full sm:w-full mb-2">
                    <img
                        src="assets/img/roket-orang.png"
                        className="w-full mx-auto block"
                        alt="Rocket Orang"
                    />
                </div>
            </div>
            <div className="bg-white mt-4">
                <SlideCarousel />
            </div>
        </section>
    );
};

export default HeroSection;
