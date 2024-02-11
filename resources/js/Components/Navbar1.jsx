import React from "react";
import { Link, Head } from "@inertiajs/react";
import {
    FaBullhorn,
    FaCalendarDays,
    FaMobileScreenButton,
} from "react-icons/fa6";

const Navbar1 = () => {
    return (
        <div className="h-10 flex w-full items-center bg-[#FCE8E9] px-4 shadow-md shadow-[#0000001f]">
            <div className="navbar-start gap-10">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content z-[1] shadow bg-base-100 rounded-box w-52"
                    >
                        <a className="text-[#4D4D4D] cursor-pointer text-base">
                            <FaMobileScreenButton className="inline-block" />{" "}
                            Downloading App
                        </a>
                        <a className="text-[#4D4D4D] cursor-pointer text-base">
                            <FaCalendarDays className="inline-block" /> Booking
                            Penginapan
                        </a>
                        <a className="cursor-pointer text-[#4D4D4D] text-base">
                            <FaBullhorn className="inline-block" /> Promosikan
                            Iklan Anda
                        </a>
                    </ul>
                </div>
                <div className="hidden lg:flex gap-8 mb-6 pl-16">
                    <a className="text-[#4D4D4D] cursor-pointer text-base">
                        <FaMobileScreenButton className="inline-block" />{" "}
                        Downloading App
                    </a>
                    <a className="text-[#4D4D4D] cursor-pointer text-base">
                        <FaCalendarDays className="inline-block" /> Booking
                        Penginapan
                    </a>
                </div>
            </div>
            <div className="navbar-end me-8 hidden lg:flex">
                <a className="cursor-pointer text-[#4D4D4D] px-4">
                    <FaBullhorn className="inline-block" /> Promosikan Iklan
                    Anda
                </a>
            </div>
        </div>
    );
};

export default Navbar1;
