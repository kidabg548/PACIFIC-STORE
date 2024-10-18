import Link from "next/link";
import { FaSearch, FaUser, FaBars } from "react-icons/fa";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import Logo from "./logo";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b ">
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-20 items-center">
        <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
          <Logo />
        </Link>
        <MainNav data={categories} />

        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-[700px]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch size={20} />
            </div>
            <input
              type="text"
              placeholder="Search products"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <select
                name="category"
                id="category"
                className="border border-gray-300 rounded-r-md hover:opacity-70 hover:cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 h-full bg-gradient-to-r from-blue-200 to-orange-200 text-blue-900 font-bold"
              >
                <option
                  value="all"
                  disabled
                  selected
                  hidden
                  className="text-blue-300"
                >
                  Search by Categories
                </option>
                {categories.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <NavbarActions />
          <Link
            href="/account"
            className="flex items-center gap-x-2 hover:text-blue-500"
          >
            <FaUser size={24} />
            <span className="text-sm font-semibold">Account</span>
          </Link>
          <button className="md:hidden p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <FaBars size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
