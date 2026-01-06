import { Link } from "@inertiajs/react";
import "../styles/globals.css";

export default function SubscriptionLayout({ children, title, className }) {
    return (
        // Ganti 'container' menjadi 'w-full'
        // Ubah 'class' menjadi 'className' (wajib di React/Next.js)
        <div className={`w-full px-4 py-5 ${className}`}>
            <Link
                href={route("logout")}
                method="post"
                as="button"
                type="button"
            >
                Logout
            </Link>
            <h2 className="mb-8 text-center text-3xl font-bold">{title}</h2>
            {children}
        </div>
    );
}
