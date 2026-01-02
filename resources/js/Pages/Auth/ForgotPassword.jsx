import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticationLayout from "../../Layouts/AuthenticationLayout";
import { useState } from "react";

export default function ForgotPassword() {
    const [hover, setHover] = useState(false);
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("password.email"));
    };

    const hoverText = () => {
        setHover(false);
    };
    const hoverTextLeave = () => {
        setHover(true);
    };

    return (
        <>
            <AuthenticationLayout>
                <Head title="Forgot Password" />
                <div className="bg-gray-100 text-gray-900 flex justify-center w-full pb-50">
                    <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center">
                        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                            <div>
                                <img
                                    src="/images/logo.png"
                                    className="mx-auto block max-w-full"
                                    alt="Deskripsi Gambar"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-full flex-1">
                                    <div className="my-12 border-b text-center">
                                        <div className="leading-none px-2 inline-block text-lg font-semibold text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                            Forgot Password
                                        </div>
                                    </div>

                                    <form
                                        onSubmit={submit}
                                        className="mx-auto max-w-xs"
                                    >
                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            type="email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            placeholder="Email"
                                        />
                                        {errors.email && (
                                            <div className="text-red-500 text-xs mt-1">
                                                {errors.email}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-lg hover:bg-green-200 focus:shadow-outline mt-5"
                                        >
                                            {processing
                                                ? "Loading..."
                                                : "Send Password Reset Link"}
                                        </button>

                                        <Link
                                            className="mt-6 text-sm font-semibold text-gray-900 block text-center"
                                            href={route("login")}
                                            onMouseEnter={hoverText}
                                            onMouseLeave={hoverTextLeave}
                                        >
                                            {hover
                                                ? "Remember your password? Login"
                                                : "Good bro, go to Login"}
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticationLayout>
        </>
    );
}
