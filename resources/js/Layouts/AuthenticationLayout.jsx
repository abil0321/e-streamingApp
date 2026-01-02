import { useState } from "react";
import { Link } from "@inertiajs/react"; // 1. Gunakan Link dari Inertia
import NavLink from "../Components/NavLink";

export default function AuthenticationLayout({ children }) {
    const [toggle, setToggle] = useState(false);

    const showNav = () => {
        setToggle((previous) => !previous);
        console.log("Button clicked. Previous state:", toggle);
    };

    return (
        <div className="h-screen">
            <nav className="bg-white fixed w-full z-20 top-0 start-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Link Logo */}
                    <Link
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="/images/logo.png"
                            className="h-10"
                            alt="Flowbite Logo"
                        />
                    </Link>
                    {/* Tombol Hamburger (Mobile) */}
                    <button
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
                        type="button"
                        onClick={showNav}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeWidth="2"
                                d="M5 7h14M5 12h14M5 17h14"
                            />
                        </svg>
                    </button>
                    {/* {toggle ? "true" : "false"} */}
                    {/* Menu Links */}
                    <div
                        className={`w-full md:block md:w-auto bg-white mt-3 md:mt-0 shadow-lg md:shadow-none ${
                            toggle ? "block" : "hidden"
                        }`}
                        id="navbar-default"
                    >
                        <ul
                            className={`${
                                toggle ? "flex" : "hidden"
                            } flex-col font-medium p-4 md:p-0 rounded-base bg-neutral-secondary-soft md:flex md:flex-row md:space-x-5 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary`}
                        >
                            {/* Perbaikan di atas:
                                1. Hapus 'flex-colflex'
                                2. Tambahkan 'md:flex' agar muncul di desktop meski toggle false
                            */}

                            <li>
                                <Link
                                    href={route("welcome")}
                                    className="px-2 py-3 md:py-1 md:px-2 hover:bg-green-500 hover:text-white block rounded md:bg-white md:text-gray-600"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="px-2 py-3 md:py-1 md:px-2 hover:bg-green-500 hover:text-white block rounded md:bg-white md:text-gray-600"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="px-2 py-3 md:py-1 md:px-2 hover:bg-green-500 hover:text-white block rounded md:bg-white md:text-gray-600"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="px-2 py-3 md:py-1 md:px-2 hover:bg-green-500 hover:text-white block rounded md:bg-white md:text-gray-600"
                                >
                                    Contact
                                </Link>
                            </li>

                            {/* Tips: Di sini tempat yang pas untuk menaruh tombol Logout yang tadi Anda buat */}
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="pt-16 lg:pt-24">
                <main>{children}</main>
            </div>
            <footer className="">
                <div className="text-center py-5">
                    <small>© 2025 E-Streaming App. All rights reserved.</small>
                </div>
            </footer>
        </div>
    );
}
