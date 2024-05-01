import { Search, Menu, StickyNote, CalendarDays, Bell } from "lucide-react";
import { IconBadge } from "../IconBadge";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import ProfileMenu from "./ProfileMenu";
import Logo from "@/public/owlist.svg";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="w-full bg-secondary-foreground shadow-sm">
      <div className="py-2 border-b-[1px]">
        <div className="w-full flex flex-row justify-between mx-auto px-4 items-center gap-3 text-white">
          {/* Collapsable Menu */}
          <Button
            variant="secondary"
            className="rounded-full p-1 h-7 w-7 bg-transparent"
          >
            <Menu />
          </Button>
          {/* Logo */}
          <Image src={Logo} alt="Owlist" width="80" className="ml-5" />
          {/* Search */}
          <Input
            type="text"
            placeholder="¿Qué estas buscando?"
            className="rounded-full min-w-[250px]"
            icon={Search}
          />
          {/* Notes Button */}
          <Button variant="secondary">
            <p className="hidden md:block">¿Necesitas recordar algo?</p>
            <StickyNote />
          </Button>
          {/* Informative Calendar */}
          <Button variant="secondary">
            <div className="hidden md:flex flex-row justify-between items-center gap-2">
              <div className="text-xl font-bold">20</div>
              <div className="flex flex-col items-start">
                <span>Sabado</span>
                <span>Abril, 2024</span>
              </div>
            </div>
            <CalendarDays />
          </Button>
          {/* Notifications Icon */}
          <Button variant="secondary" className="rounded-full p-1 h-7 w-7">
            <Bell />
          </Button>

          {/* User Menu */}
          <ProfileMenu
            username="Raul Belloso"
            email="raul.belloso.m@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
