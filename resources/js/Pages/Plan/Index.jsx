// import { Subscript } from "lucide-react";
// import { Zap, ArrowUp, DollarSign, Shield } from "lucide-react";
import SubscriptionLayout from "../../Layouts/SubscriptionLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Plan({ plans }) {
    console.log(plans);

    const { url } = usePage();

    return (
        <SubscriptionLayout title="Plans">
            <Head title="Plans" />
            {/* Container: Menggunakan Grid agar rapi (1 kolom mobile, 3 kolom desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
                {plans.map((item, index) => (
                    <div key={index} className="w-full md:w-120 md:h-150">
                        {/* Card */}
                        <div className="flex flex-col h-full rounded-2xl border border-gray-700 bg-gray-900 shadow-xl overflow-hidden">
                            {/* Card Header */}
                            <div className="bg-gray-800/50 p-6 border-b border-gray-700 text-center">
                                <h3 className="mb-2 text-2xl font-bold text-white">
                                    {item.title}
                                </h3>
                                <div className="text-xl font-bold text-white">
                                    Rp{item.price.toLocaleString("id-ID")}{" "}
                                    <span className="text-gray-400 text-sm font-normal">
                                        / {item.duration} hari
                                    </span>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="flex flex-col grow p-6 space-y-6">
                                {/* Features List */}
                                <div>
                                    <h6 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">
                                        Resolution
                                    </h6>
                                    <p className="text-emerald-400 font-semibold">
                                        {item.resolution}
                                    </p>
                                </div>

                                <div>
                                    <h6 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">
                                        Support Device
                                    </h6>
                                    <p className="text-emerald-400 font-semibold">
                                        Mobile, Computer, TV
                                    </p>
                                </div>

                                <div>
                                    <h6 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">
                                        Watch Simultaneously
                                    </h6>
                                    <p className="text-emerald-400 font-semibold">
                                        {item.max_devices} Device
                                    </p>
                                </div>

                                {/* Button Area (mt-auto pushes it to bottom) */}
                                <div className="mt-auto pt-4">
                                    <Link
                                        /* Pastikan item.checkout_url sudah ada dari backend/props */
                                        href={route(
                                            "subscription.checkout",
                                            item.id
                                        )}
                                        className="block w-full rounded-lg bg-emerald-600 px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                                    >
                                        Choose Plan
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SubscriptionLayout>
    );
}
