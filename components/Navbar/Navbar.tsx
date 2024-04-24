import { Search, Menu, StickyNote, CalendarDays, Bell } from "lucide-react";
import { IconBadge } from "../IconBadge";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import ProfileMenu from "./ProfileMenu";

const NavBar = () => {
  return (
    <header>
      <div className="h-14 bg-indigo-900 w-full flex flex-row justify-between px-5 items-center gap-3">
        {/* Collapsable Menu */}
        {/* <div className="cursor-pointer"> */}
        <IconBadge icon={Menu} size="md" variant="default" />
        {/* </div> */}
        {/* Logo */}

        {/* Search */}
        <Input
          type="text"
          placeholder="¿Qué estas buscando?"
          className="rounded-full"
          icon={Search}
        />
        {/* Notes Button */}
        <Button variant="secondary">
          ¿Necesitas recordar algo?
          <StickyNote />
        </Button>
        {/* Informative Calendar */}
        <Button variant="secondary">
          <div className="flex flex-row justify-between items-center gap-2">
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
        <ProfileMenu username="Raul Belloso" email="raul.belloso.m@gmail.com" />
      </div>
    </header>
  );
};

export default NavBar;
