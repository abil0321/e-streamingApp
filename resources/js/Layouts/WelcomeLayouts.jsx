import NavLink from "../Components/NavLink";

export default function WelcomeLayout({
    children,
    canLogin,
    canRegister,
    auth,
}) {
    return (
        <div className="bg-[#FDFDFC] dark:bg-[#0a0a0a] text-[#1b1b18] flex p-6 lg:p-8 items-center lg:justify-center min-h-screen flex-col">
            <div className="flex flex-col flex-1 w-full max-w-[335px] lg:max-w-4xl">
                {/* Navbar */}
                <header className="w-full text-sm mb-6 not-has-[nav]:hidden">
                    {canLogin && (
                        <nav className="flex items-center justify-end gap-4">
                            {auth.user ? (
                                <>
                                    <NavLink
                                        href={route("welcome")}
                                        className="inline-block px-5 py-1.5 dark:text-[#EDEDEC] border-[#19140035] hover:border-[#1915014a] border text-[#1b1b18] dark:border-[#3E3E3A] dark:hover:border-[#62605b] rounded-sm text-sm leading-normal"
                                    >
                                        Dashboard
                                    </NavLink>
                                    <NavLink
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                        type="button"
                                        className="inline-block px-5 py-1.5 dark:text-[#EDEDEC] border-[#19140035] hover:border-[#1915014a] border text-[#1b1b18] dark:border-[#3E3E3A] dark:hover:border-[#62605b] rounded-sm text-sm leading-normal"
                                    >
                                        Logout
                                    </NavLink>
                                </>
                            ) : (
                                <>
                                    <NavLink
                                        href={route("login")}
                                        className="inline-block px-5 py-1.5 dark:text-[#EDEDEC] border-[#19140035] hover:border-[#1915014a] border text-[#1b1b18] dark:border-[#3E3E3A] dark:hover:border-[#62605b] rounded-sm text-sm leading-normal"
                                    >
                                        Log in
                                    </NavLink>
                                    {canRegister && (
                                        <NavLink
                                            href={route("register")}
                                            className="inline-block px-5 py-1.5 dark:text-[#EDEDEC] border-[#19140035] hover:border-[#1915014a] border text-[#1b1b18] dark:border-[#3E3E3A] dark:hover:border-[#62605b] rounded-sm text-sm leading-normal"
                                        >
                                            Register
                                        </NavLink>
                                    )}
                                </>
                            )}
                        </nav>
                    )}
                </header>

                {/* Konten Halaman Berubah di Sini */}
                <main className="flex-1 w-full flex flex-col justify-center">
                    {children}
                </main>
            </div>
        </div>
    );
}
