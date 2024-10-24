import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Globe, MenuIcon } from "lucide-react";

const menuItems: string[] = [
  "스튜디오",
  "워크센터",
  "손비서",
  "메타휴먼",
  "영상제작소",
  "공지사항",
  "제휴문의",
];

const MobileNavbar = () => {
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MenuIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <ul className="flex flex-col gap-y-3 my-3 p-3">
            {menuItems.map((item) => (
              <li key={item}>
                <Link href="#" className="font-semibold text-base">
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#">로그인</Link>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2">
                  <Globe />
                  <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>EN</DropdownMenuItem>
                  <DropdownMenuItem>IDN</DropdownMenuItem>
                  <DropdownMenuItem>FRA</DropdownMenuItem>
                  <DropdownMenuItem>JPN</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex justify-between items-center py-12 mt-11 md:mt-0">
      <Image src="/images/logo.svg" width={100} height={100} alt="logo" />
      <div className="flex items-center gap-16">
        <nav className="hidden md:flex items-center gap-x-20 ">
          {menuItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="relative text-slate-500 hover:text-white group"
            >
              {item}
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] w-2 h-2 bg-gradient-to-br from-gradient-start to-gradient-end rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="hidden md:flex items-center gap-x-[55px]">
        <Link href="#">로그인</Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2">
            <Globe />
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>EN</DropdownMenuItem>
            <DropdownMenuItem>IDN</DropdownMenuItem>
            <DropdownMenuItem>FRA</DropdownMenuItem>
            <DropdownMenuItem>JPN</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <MobileNavbar />
    </header>
  );
};

export default Header;
