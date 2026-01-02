import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import EyeIcon from "../../Components/Icons/EyeIcon";
import AuthenticationLayout from "../../Layouts/AuthenticationLayout";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("register.store"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <>
            <Head title="Register" />
            <AuthenticationLayout>
                <div className="bg-gray-100 text-gray-900 flex justify-center">
                    <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
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
                                        <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                            Or sign In with Cartesian E-mail
                                        </div>
                                    </div>

                                    <form
                                        onSubmit={submit}
                                        className="mx-auto max-w-xs"
                                    >
                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            type="text"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            placeholder="Name"
                                        />
                                        {errors.name && (
                                            <div className="text-red-500 text-xs mt-1">
                                                {errors.name}
                                            </div>
                                        )}

                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
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
                                        <div className="relative">
                                            <input
                                                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                value={data.password}
                                                onChange={(e) =>
                                                    setData(
                                                        "password",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Password"
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                className="absolute right-3 top-1/2 md:top-2/4 transform-translate-y-1/2"
                                            >
                                                <EyeIcon
                                                    condition={showPassword}
                                                />
                                            </button>
                                        </div>
                                        {errors.password && (
                                            <div className="text-red-500 text-xs mt-1">
                                                {errors.password}
                                            </div>
                                        )}
                                        <div className="relative">
                                            <input
                                                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                                type={
                                                    showPasswordConfirm
                                                        ? "text"
                                                        : "password"
                                                }
                                                value={
                                                    data.password_confirmation
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "password_confirmation",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Confirm Password"
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowPasswordConfirm(
                                                        !showPasswordConfirm
                                                    )
                                                }
                                                className="absolute right-3 top-1/2 md:top-2/4 transform-translate-y-1/2"
                                            >
                                                <EyeIcon
                                                    condition={
                                                        showPasswordConfirm
                                                    }
                                                />
                                            </button>
                                        </div>
                                        {errors.password_confirmation && (
                                            <div className="text-red-500 text-xs mt-1">
                                                {errors.password_confirmation}
                                            </div>
                                        )}
                                        <button
                                            className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                            type="submit"
                                            disabled={processing}
                                        >
                                            <svg
                                                className="w-6 h-6 -ml-2"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                <circle cx="8.5" cy="7" r="4" />
                                                <path d="M20 8v6M23 11h-6" />
                                            </svg>
                                            <span className="ml-">
                                                {processing
                                                    ? "Mendaftarkan..."
                                                    : "Daftar Sekarang"}
                                            </span>
                                        </button>
                                        <Link
                                            className="mt-6 text-sm font-semibold text-gray-900 block text-center"
                                            href={route("login")}
                                        >
                                            Already have an account? Login
                                        </Link>
                                        <p className="mt-6 text-xs text-gray-600 text-center">
                                            I agree to abide by e-streaming{" "}
                                            <a
                                                href="#"
                                                className="border-b border-gray-500 border-dotted"
                                            >
                                                Terms of Service
                                            </a>{" "}
                                            and its{" "}
                                            <a
                                                href="#"
                                                className="border-b border-gray-500 border-dotted"
                                            >
                                                Privacy Policy
                                            </a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
                            <div
                                className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                                style={{
                                    backgroundImage:
                                        "url('/images/background.svg')",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </AuthenticationLayout>
        </>
    );
}
