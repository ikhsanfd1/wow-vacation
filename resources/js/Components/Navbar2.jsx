import React from "react";
import { Link } from "@inertiajs/react";
import {
    FaBullhorn,
    FaCalendarDays,
    FaMobileScreenButton,
} from "react-icons/fa6";

const Navbar2 = () => {
    return (
        <div className="h-22 flex w-full items-center bg-white px-4 shadow-md shadow-[#0000001f]">
            <div className="navbar-start flex-grow items-center flex justify-between">
                <a className="text-[#E8323C] font-bold text-xl ms-12 max-md:ms-1 max-lg:ms-4 max-sm:ms-0">
                    WowVacation
                </a>
                <div className="dropdown flex justify-end">
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
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 mr-auto"
                    >
                        <li>
                            <a>Cari Iklan</a>
                            <ul className="p-2">
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>Beranda</a>
                        </li>
                        <li>
                            <a>Pusat Bantuan</a>
                        </li>
                        <li>
                            <a>Syarat & Ketentuan</a>
                        </li>
                        <li>
                            <a className="cursor-pointer text-red-600 border border-red-600 py-2 px-4 rounded-lg">
                                Masuk
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base gap-8 ms-12 text-[#4D4D4D]">
                    <li>
                        <details>
                            <summary>Cari Iklan</summary>
                            <ul className="p-2">
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <a>Beranda</a>
                    </li>
                    <li>
                        <a>Pusat Bantuan</a>
                    </li>
                    <li>
                        <a>Syarat & Ketentuan</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end me-12 hidden lg:flex">
                <a className="cursor-pointer text-[#E8323C] border border-[#E8323C] py-2 px-4 rounded-lg">
                    Masuk
                </a>
            </div>
        </div>
    );
};

export default Navbar2;
