import React from "react";
import { Link } from "@inertiajs/react";
import Navbar1 from "@/Components/Navbar1";
import Navbar2 from "@/Components/Navbar2";
import HeroSection from "@/Components/HeroSection";

export default function Welcome() {
    return (
        <div className="bg-gray-200">
            <Navbar1 />
            <Navbar2 />
            <HeroSection />
        </div>
    );
}
