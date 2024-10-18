"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";



const Logo = () => {
    const router = useRouter();

    return (
    <div className=" flex flex-col">
        <Image
        alt="Logo"
        className="cursor-pointer  "
        height="80"
        width="250"
        src="/images/logo23.png"
        />
    </div>      
      )
      ;
}
 
export default Logo;