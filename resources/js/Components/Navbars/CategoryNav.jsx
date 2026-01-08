import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

function CategoryNav() {
    const { categories } = usePage().props;
    const [isOpen, setIsOpen] = useState(false);
    if (!categories) {
        return null;
    }
    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center text-sm font-bold text-white hover:text-red-600 transition-colors uppercase
                    ${!isOpen ? "text-red=600" : ""}
                `}
                type="button"
            >
                Kategori
                <i
                    className={`fa-solid fa-chevron-down ml-2 text-xs transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                ></i>
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => isOpen(false)}
                    ></div>

                    <div className="absolute left-0 mt-3 w-[500px] bg-[#1f1f1f] rounded-md shadow-xl border border-gray-700 z-50 p-4">
                        <div className="grid grid-cols-3 gap-4">
                            {categories.map((category) => (
                                <Link
                                    href={route("category.show", category.id)}
                                    key={category.id}
                                    className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded text-sm transition-all block"
                                    onClick={() => setIsOpen(false)} // Tutup menu saat link diklik
                                >
                                    {category.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default CategoryNav;
