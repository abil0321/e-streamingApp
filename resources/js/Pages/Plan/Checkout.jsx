import { Head, useForm } from "@inertiajs/react";
import SubscriptionLayout from "../../Layouts/SubscriptionLayout";
import { useState } from "react";

function PopUp({ onClose }) {
    return (
        // Tambahkan background semi-transparan (bg-black/50) agar lebih fokus
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full mx-4">
                <h2 className="text-lg font-bold mb-2 text-red-600 text-center">
                    Perhatian!
                </h2>
                <p className="text-gray-600 text-lg text-center">
                    Anda harus menyetujui Syarat dan Ketentuan serta Kebijakan
                    Privasi sebelum melanjutkan pembayaran.
                </p>
                <button
                    onClick={onClose} // Panggil fungsi tutup saat diklik
                    className="mt-5 w-full rounded-lg bg-emerald-600 px-4 py-3 text-center text-sm font-bold text-white transition-all hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                    OK, Saya Mengerti
                </button>
            </div>
        </div>
    );
}
export default function PlanCheckout({ plan, user }) {
    const { data, setData, post, processing, errors } = useForm({
        plan_id: plan.id,
        user_id: user.id,
        total_payment: plan.price * 1.12,
        terms: false,
    });
    const [showPopup, setShowPopup] = useState(false);

    const formatRupiah = (value) => {
        return value.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
        });
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data.terms);
        if (!data.terms) {
            setShowPopup(true);
            return;
        }
        post(route("subscription.process"));
    };

    return (
        <SubscriptionLayout title="Checkout" className="xl:px-100 md:px-50">
            <Head title="Checkout" />
            <div className="mt-4 w-full rounded-xl border border-emerald-500 bg-gray-900 text-white shadow-lg">
                <div className="p-6">
                    {/* Header: Judul & Harga */}
                    <div className="mb-6 flex items-center justify-between">
                        <h5 className="text-lg font-bold">
                            {plan.title} - {plan.duration} Hari
                        </h5>
                        <span className="text-xl font-bold">
                            {formatRupiah(plan.price)}
                        </span>
                    </div>

                    {/* Divider */}
                    <hr className="my-4 border-emerald-500/30" />

                    {/* Rincian Biaya */}
                    <div className="space-y-3">
                        <div className="flex justify-between text-gray-300">
                            <span>Subtotal</span>
                            {/* {plan.price} */}
                            <span>{formatRupiah(plan.price)}</span>
                        </div>

                        <div className="flex justify-between text-gray-300">
                            <span>Ppn 12%</span>
                            <span>{formatRupiah(plan.price * 0.12)}</span>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="my-4 border-emerald-500/30" />

                    {/* Total Payment */}
                    <div className="mb-6 flex justify-between items-center">
                        <span className="font-semibold">Total payment</span>
                        <span className="text-xl font-bold text-emerald-400">
                            {formatRupiah(plan.price * 1.12)}
                        </span>
                    </div>

                    {/* Form Checkbox */}
                    <div className="mb-6 flex items-start gap-3">
                        <div className="flex h-6 items-center">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                checked={data.terms}
                                onChange={(e) =>
                                    setData("terms", e.target.checked)
                                }
                                required
                                className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-emerald-600 focus:ring-emerald-600 focus:ring-offset-gray-900"
                            />
                        </div>
                        <div className="text-sm leading-6">
                            <label htmlFor="terms" className="text-gray-300">
                                By continuing the payment, you agree to our{" "}
                                <a
                                    href="#"
                                    className="font-semibold text-sky-400 hover:text-sky-300"
                                >
                                    Terms and Conditions
                                </a>{" "}
                                and{" "}
                                <a
                                    href="#"
                                    className="font-semibold text-sky-400 hover:text-sky-300"
                                >
                                    Privacy Policy
                                </a>
                            </label>
                        </div>
                    </div>

                    {/* Action Button */}
                    <form onSubmit={submit}>
                        <input type="hidden" name="plan_id" value={plan.id} />
                        <input
                            type="hidden"
                            name="total_payment"
                            value={data.total_payment}
                            onChange={(e) =>
                                setData("total_payment", e.target.value)
                            }
                        />

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-emerald-600 px-4 py-3 text-center text-sm font-bold text-white transition-all hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                            disabled={processing}
                        >
                            {processing ? "Processing Payment..." : "Pay Now"}
                        </button>
                    </form>
                </div>
            </div>
            {showPopup && <PopUp onClose={() => setShowPopup(false)} />}
        </SubscriptionLayout>
    );
}
