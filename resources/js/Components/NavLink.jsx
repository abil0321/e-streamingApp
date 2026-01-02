import { Link, usePage } from "@inertiajs/react";

export default function NavLink({ href, children, ...props }) {
    // usePage().url berisi URL saat ini (contoh: '/dashboard')
    const { url } = usePage();

    // Cek apakah URL saat ini diawali dengan href link ini
    const active = url.startsWith(href);

    return (
        <Link
            href={href}
            className={`hover:bg-gray-100 text-white inline-block px-5 py-1.5 dark:text-[#EDEDEC] border-[#19140035] hover:border-[#1915014a] border text-[#1b1b18] dark:border-[#3E3E3A] dark:hover:border-[#62605b] rounded-sm text-sm leading-normal ${
                active
                    ? "bg-blue-600 text-white font-bold" // Style saat aktif
                    : "text-gray-600 hover:bg-gray-100" // Style saat tidak aktif
            }`}
            {...props}
        >
            {children}
        </Link>
    );
}
