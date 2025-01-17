"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/images/logo-white.png";
import profileDefault from "@/assets/images/profile.png";
import { FaGoogle, FaBars, FaBell } from "react-icons/fa";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import UnreadMessageCount from "./UnreadMessageCount";
import { get, set } from "mongoose";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [providers, setProviders] = useState(null);

  const pathname = usePathname();
  const { data: session } = useSession();
  const profileImage = session?.user?.image;

  useEffect(() => {
    const fetchProviders = async () => {
      const providers = await getProviders();
      setProviders(providers);
    };

    fetchProviders();
  }, []);

  return (
    <nav className="bg-gradient-to-r from-cyan-600 to-blue-600 sticky top-0 z-50 shadow">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              type="button"
              id="mobile-dropdown-button"
              className="inline-flex items-center justify-center p-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="text-xl" />
            </button>
          </div>

          {/* Logo and desktop menu */}
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link className="flex items-center flex-shrink-0" href="/">
              <Image className="h-10 w-auto" src={logo} alt="PropertyPulse" />
              <span className="ml-2 hidden md:inline-block text-white text-2xl font-bold tracking-wide">
                Dwello
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:block md:ml-10">
              <div className="flex items-center space-x-6">
                <Link
                  href="/"
                  className={`${
                    pathname === "/"
                      ? "bg-white text-blue-600"
                      : "text-white hover:bg-white hover:text-blue-600"
                  } transition-colors px-3 py-2 rounded-md font-semibold`}
                >
                  Home
                </Link>
                <Link
                  href="/properties"
                  className={`${
                    pathname === "/properties"
                      ? "bg-white text-blue-600"
                      : "text-white hover:bg-white hover:text-blue-600"
                  } transition-colors px-3 py-2 rounded-md font-semibold`}
                >
                  Properties
                </Link>
                {session && (
                  <Link
                    href="/properties/add"
                    className={`${
                      pathname === "/properties/add"
                        ? "bg-white text-blue-600"
                        : "text-white hover:bg-white hover:text-blue-600"
                    } transition-colors px-3 py-2 rounded-md font-semibold`}
                  >
                    Add Property
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* If not logged in (session is null): show login buttons */}
          {!session && (
            <div className="hidden md:block md:ml-6">
              <div className="flex items-center">
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                      className="flex items-center text-white bg-blue-700 hover:bg-blue-800 transition-colors px-4 py-2 rounded-md"
                    >
                      <FaGoogle className="mr-2" />
                      <span>Login with {provider.name}</span>
                    </button>
                  ))}
              </div>
            </div>
          )}

          {/* If logged in: show notifications and profile menu */}
          {session && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
              <Link href="/messages" className="relative group mr-4">
                <button
                  type="button"
                  className="rounded-full p-1 text-white hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <FaBell className="text-xl" />
                </button>
                <UnreadMessageCount />
              </Link>
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                    id="user-menu-button"
                    onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <Image
                      className="h-8 w-8 rounded-full border-2 border-white"
                      src={profileImage || profileDefault}
                      alt=""
                      width={40}
                      height={40}
                    />
                  </button>
                </div>

                {isProfileMenuOpen && (
                  <div
                    id="user-menu"
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5"
                  >
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Your Profile
                    </Link>
                    <Link
                      href="/properties/saved"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Saved Properties
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        signOut();
                      }}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu, shown only if isMobileMenuOpen is true */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-4 py-4bg-gradient-to-r from-cyan-600 to-blue-600">
            <Link
              href="/"
              className={`block ${
                pathname === "/" ? "bg-blue-600" : ""
              } text-white hover:bg-blue-600 px-3 py-2 rounded-md font-semibold`}
            >
              Home
            </Link>
            <Link
              href="/properties"
              className={`block ${
                pathname === "/properties" ? "bg-blue-600" : ""
              } text-white hover:bg-blue-600 px-3 py-2 rounded-md font-semibold`}
            >
              Properties
            </Link>
            {session && (
              <Link
                href="/properties/add"
                className={`block ${
                  pathname === "/properties/add" ? "bg-blue-600" : ""
                } text-white hover:bg-blue-600 px-3 py-2 rounded-md font-semibold`}
              >
                Add Property
              </Link>
            )}
            {!session && providers && (
              <div className="mt-3">
                {Object.values(providers).map((provider) => (
                  <button
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="flex items-center text-white bg-blue-800 hover:bg-blue-900 px-3 py-2 rounded-md w-full"
                  >
                    <FaGoogle className="mr-2" />
                    <span>Login with {provider.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
