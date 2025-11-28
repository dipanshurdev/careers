import Logo from "/hydrobank.jpeg";
import { NavLinks } from "../utils/data";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Header = () => {
  return (
    <nav className="gradient-bg font-outfit text-white px-8 py-4 border-b-[5px] border-b-gradient top-0 sticky z-10">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="w-full">
          <a className="flex items-center gap-2" href=" /">
            <img src={Logo} alt="Logo" className="w-14 h-14 rounded-full" />
            <h1 className=" font-bold text-2xl text-blue-500">HydroFinance</h1>
          </a>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-10">
          {NavLinks.map((item, idx) => (
            <li
              key={idx}
              className="group relative cursor-pointer font-semibold"
            >
              <a className="text-white text-xl" href={item.href}>
                {item.title}
              </a>
              {/* <span >{item}</span> */}
              <span className="absolute left-0 -bottom-1 w-full h-[3px] gradient-primary  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </li>
          ))}
        </ul>
        <Menubar className="bg-transparent border-0">
          <MenubarMenu>
            <MenubarTrigger className="w-14 flex flex-col justify-center items-center gap-1 md:hidden bg-neutral-800 rounded-sm ">
              <span className="w-6 h-[3px] gradient-primary "></span>
              <span className="w-6 h-[3px] gradient-primary "></span>
              <span className="w-6 h-[3px] gradient-primary "></span>
            </MenubarTrigger>
            <MenubarContent className="bg-blue-950 border-0 text-blue-50">
              {NavLinks.map((item, idx) => (
                <MenubarItem key={idx} asChild>
                  <a href={item.href}>{item.title}</a>
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </nav>
  );
};

export default Header;
