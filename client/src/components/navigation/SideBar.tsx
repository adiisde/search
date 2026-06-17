"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            {/* Open Button */}
            <button
                onClick={() => setOpen(true)}
                className="md:hidden border border-black/20 p-2 rounded-lg"
                aria-label="Menu"
                title="Menu"
            >
                <Menu size={20} />
            </button>

            {/* Backdrop */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 bg-black/20 z-40 transition-opacity duration-100 ${
                    open
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
            />

            {/* Sidebar */}
            <nav
                className={`fixed top-0 left-0 h-screen w-72 bg-white z-50 transition-transform duration-100 ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between p-4 border-b-black/20 border-transparent border">
                    <h2 className="font-semibold">Menu</h2>

                    <button
                        onClick={() => setOpen(false)}
                        className="border border-black/20 p-2 rounded-lg"
                        aria-label="Close"
                        title="Close"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-4 font-medium flex flex-col gap-4 text-md">
                    <Link href="/" onClick={() => setOpen(false)}>
                        About Us
                    </Link>

                    <Link href="/" onClick={() => setOpen(false)}>
                        Categories
                    </Link>

                    <Link href="/" onClick={() => setOpen(false)}>
                        Need something ?
                    </Link>
                </div>
            </nav>
        </div>
    );
}