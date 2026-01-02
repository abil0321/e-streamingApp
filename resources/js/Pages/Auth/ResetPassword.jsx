import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticationLayout from "../../Layouts/AuthenticationLayout";
import EyeIcon from "../../Components/Icons/EyeIcon";
import { useState } from "react";

export default function ResetPassword({ request, token }) {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: request.email,
        password: "",
        password_confirmation: "",
        token: token,
    });

    console.log(request.email, token);

    const submit = (e) => {
        e.preventDefault();
        post(route("password.update"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <>
            <Head title="Reset Password" />
            <AuthenticationLayout>
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
                                            Reset Password
                                        </div>
                                    </div>

                                    <form
                                        onSubmit={submit}
                                        className="mx-auto max-w-xs"
                                    >
                                        <input
                                            type="hidden"
                                            name="token"
                                            value={token}
                                            onChange={(e) =>
                                                setData("token", e.target.value)
                                            }
                                        />
                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            type="hidden"
                                            value={request.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                        />
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
                                                required
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
                                                required
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
                                            type="submit"
                                            className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-lg hover:bg-green-200 focus:shadow-outline mt-5"
                                        >
                                            {processing
                                                ? "Loading..."
                                                : "Send Password Reset Link"}
                                        </button>
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
