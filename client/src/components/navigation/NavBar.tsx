import Link from "next/link";
import SideBar from "./SideBar";

export default function NavBar() {
    return (
        <nav className="flex flex-row justify-between mx-auto items-center border-b-black/20 border border-transparent py-4 px-2">
            <Link href="/" className="font-semibold text-lg">
                Calcux
            </Link>
            <div className="font-medium flex flex-row gap-8 text-md max-md:hidden">
                <Link href="/" className="hover:underline">About Us</Link>
                <Link href="/" className="hover:underline">Categories</Link>
                <Link href="/" className="hover:underline">Need something ?</Link>
            </div>
            {/* SideBar Component for mobile with dropdown and sidebar */}
            <div className="md:hidden">
                <SideBar />
            </div>
        </nav>
    )
}