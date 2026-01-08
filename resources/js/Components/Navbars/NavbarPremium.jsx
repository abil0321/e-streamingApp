import { Link, router } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
import CategoryNav from "./CategoryNav";

function NavbarPremiumWeb() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notifyOpen, setNotifyOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    router.post(route('logout'));
  }

  const {auth} = usePage().props;
  return(
    <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">

            <div className="flex items-center gap-4">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} type="button"
                    className="lg:hidden text-white hover:text-gray-300 focus:outline-none">
                    <i className="fa-solid fa-bars text-xl"></i>
                </button>

                <Link className="flex-shrink-0" href={route('home')}>
                    <img className="h-8 w-auto" src="assets/img/codeflix_logo.png" alt="Codeflix" />
                </Link>

                <div className="hidden lg:block ml-6">
                    <CategoryNav />
                    <span className="text-gray-400 text-sm">Category Component Here</span>
                </div>
            </div>

            <div className="hidden lg:flex items-center space-x-6">
                <form className="relative group" role="search" method="GET" action="{{ route('movies.search') }}">
                    <input 
                        className="bg-gray-800 text-white text-sm rounded-full pl-4 pr-10 py-2 w-64 focus:outline-none focus:ring-1 focus:ring-red-600 transition-all" 
                        type="search" 
                        name="q" 
                        placeholder="Cari Disini"
                        value="{{ request('q') }}" 
                        aria-label="Search" />
                    <button type="submit" className="absolute right-0 top-0 mt-2 mr-3 text-gray-400 hover:text-white">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>

                <div className="relative" x-data="{ open: false }">
                    <button @click="open = !open" @click.away="open = false" className="text-white hover:text-gray-300 focus:outline-none">
                        <i className="fa-solid fa-bell text-lg"></i>
                    </button>

                    <div x-show="open" x-transition 
                         className="absolute right-0 mt-2 w-80 bg-[#1f1f1f] rounded-md shadow-lg py-1 border border-gray-700 z-50" 
                         style="display: none;">
                        
                        <a href="#" className="block px-4 py-3 hover:bg-gray-800 border-b border-gray-700 last:border-0 transition">
                            <div className="flex items-start gap-3">
                                <img className="w-10 h-10 object-cover rounded" src="{{ asset('assets/img/Clock.png') }}" alt="">
                                <div className="flex-1">
                                    <p className="text-sm font-semibold text-white">Subscribe Premium</p>
                                    <p className="text-xs text-gray-300">Telah Habis!</p>
                                    <span className="text-[10px] text-gray-500 mt-1 block">Hari Ini</span>
                                </div>
                            </div>
                        </a>

                        <a href="#" className="block px-4 py-3 hover:bg-gray-800 border-b border-gray-700 last:border-0 transition">
                            <div className="flex items-start gap-3">
                                <img className="w-10 h-10 object-cover rounded" src="{{ asset('assets/img/Kingkong.png') }}" alt="">
                                <div className="flex-1">
                                    <p className="text-xs text-red-500 font-bold uppercase mb-1">Film Baru</p>
                                    <p className="text-sm text-white font-medium">Khong Guan Super</p>
                                    <span className="text-[10px] text-gray-500 mt-1 block">1 Hari Yang Lalu</span>
                                </div>
                            </div>
                        </a>
                        
                        <a href="#" className="block px-4 py-3 hover:bg-gray-800 border-b border-gray-700 last:border-0 transition">
                            <div className="flex items-start gap-3">
                                <img className="w-10 h-10 object-cover rounded" src="{{ asset('assets/img/Blackhat.png') }}" alt="">
                                <div className="flex-1">
                                    <p className="text-xs text-red-500 font-bold uppercase mb-1">Film Baru</p>
                                    <p className="text-sm text-white font-medium">Black Hat</p>
                                    <span className="text-[10px] text-gray-500 mt-1 block">2 Hari Yang Lalu</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="relative" x-data="{ open: false }">
                    <button @click="open = !open" @click.away="open = false" className="text-white hover:text-gray-300 focus:outline-none">
                        <i className="fa-solid fa-user text-lg"></i>
                    </button>

                    <div x-show="open" x-transition 
                         className="absolute right-0 mt-2 w-48 bg-[#1f1f1f] rounded-md shadow-lg py-1 border border-gray-700 z-50" 
                         style="display: none;">
                        
                        <a href="{{ route('profile.overview') }}" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">
                            <i className="fa-solid fa-circle-user mr-2"></i> Profile Setting
                        </a>
                        
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" className="hidden">
                            {{ csrf_field() }}
                        </form>
                        
                        <a href="{{ route('logout') }}" 
                           onclick="event.preventDefault();document.getElementById('logout-form').submit();"
                           className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">
                            <i className="fa-solid fa-right-from-bracket mr-2"></i> Logout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
function NavbarPremiumMobile() {
  return(
    <div x-show="mobileMenuOpen" className="lg:hidden bg-[#141414] border-t border-gray-800" style="display: none;">
        <div className="px-4 py-4 space-y-4">
            <div className="block">
                 <x-category-nav />
            </div>

            <form className="relative" role="search" method="GET" action="{{ route('movies.search') }}">
                <input className="w-full bg-gray-800 text-white text-sm rounded-md px-4 py-2 focus:outline-none" 
                    type="search" name="q" placeholder="Cari Disini" value="{{ request('q') }}">
                <button type="submit" className="absolute right-3 top-2 text-gray-400">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>

            <div className="border-t border-gray-700 pt-4">
                <a href="{{ route('profile.overview') }}" className="block py-2 text-gray-300 hover:text-white">
                    <i className="fa-solid fa-circle-user mr-2"></i> Profile Setting
                </a>
                <a href="{{ route('logout') }}" 
                   onclick="event.preventDefault();document.getElementById('logout-form').submit();"
                   className="block py-2 text-gray-300 hover:text-white">
                    <i className="fa-solid fa-right-from-bracket mr-2"></i> Logout
                </a>
            </div>
        </div>
    </div>
  );
}
export default function NavbarPremium() {
    return (
        <nav
            x-data="{ mobileMenuOpen: false }"
            className="fixed top-0 z-50 w-full bg-[#141414] border-b border-gray-800"
        >
            <NavbarPremiumWeb />
            <NavbarPremiumMobile />
        </nav>
    );
}
