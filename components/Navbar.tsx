'use client'
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

const Navbar = () => {
  const isLaptop = useMediaQuery({query:'(min-width:1024px'})
  
  if (isLaptop) {
    return (
      <div>
        <div className="flex justify-between place-items-center">
          <Link href={'/'}> <img src="/logo.png" alt="logo" className="w-44"/> </Link>
          <div className="flex space-x-5">
            <Link href={'https://man2kotaprobolinggo.sch.id/category/prestasi/'}>Prestasi</Link>
            <Link href={'https://man2kotaprobolinggo.sch.id/link-ard-cbt/'}>CBT & RDM</Link>
            <Link href={'https://man2kotaprobolinggo.sch.id/e-learning-mandapro-exist/'}>E-Learning</Link>
          </div>
          <Link href={'https://man2kotaprobolinggo.sch.id/ppdb-man-2-kota-probolinggo/'}>
          <div className="hover:px-3 py-2 flex place-items-center hover:text-black hover:bg-white mix-blend-screen rounded-full space-x-2 transition-all ease-in-out duration-500">
            <p>PPDBM</p> <ArrowUpRight className="inline-block bg-white text-black rounded-full py-1" />
          </div>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="flex justify-between place-items-center">
          <Link href={'/'}> <img src="/logo.png" alt="logo" className="w-44"/></Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="uppercase">Menu</DropdownMenuTrigger>
            <DropdownMenuContent className="mx-5">
              <DropdownMenuItem><Link href={'https://man2kotaprobolinggo.sch.id/category/prestasi/'}>Prestasi</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href={'https://man2kotaprobolinggo.sch.id/link-ard-cbt/'}>CBT & RDM</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href={'https://man2kotaprobolinggo.sch.id/e-learning-mandapro-exist/'}>E-Learning</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    )
  }
};

export default Navbar;
