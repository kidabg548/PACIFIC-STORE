"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
  {routes.map((route) => (
    <Link key={route.href} href={route.href}>
      <div className={cn(
        'text-[15px] font-bold transition-transform duration-200 ease-in-out transform hover:scale-110 px-4 py-2 rounded-lg shadow-md hover:shadow-lg cursor-pointer',
        route.active ? 'bg-blue-800 text-white border-orange-500 border-[3px]' : 'bg-white text-blue-500 hover:bg-blue-100'
      )}>
        {route.label}
      </div>
    </Link>
  ))}
</nav>

  )
};

export default MainNav;
