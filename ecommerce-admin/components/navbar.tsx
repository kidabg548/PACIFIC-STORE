import { UserButton, auth } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";
import StoreSwitcher from "@/components/store-switcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

const  Navbar= async() => {
    const {userId} =auth();

    if (!userId) {
        redirect("/sign-in");
    }
    const stores= await prismadb.store.findMany({
        where: {
            userId,
        },
    });
    return ( 
     
        <div className="border-b p-1">
  <div className="flex h-16 items-center px-4 bg-gray-200 rounded-md">
    <StoreSwitcher items={stores} />
    <MainNav className="mx-6" />
    <div className="ml-auto flex items-center space-x-4">
      <UserButton afterSignOutUrl="/" />
    </div>
  </div>
</div>

     );
}
 
export default Navbar;