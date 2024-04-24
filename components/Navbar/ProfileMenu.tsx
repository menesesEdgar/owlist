"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Command, CommandGroup, CommandItem } from "../ui/command";
import { CommandList } from "cmdk";
import { CreditCard, Settings, User } from "lucide-react";
interface ProfileMenuProps {
  username: string;
  email: string;
}
const ProfileMenu: React.FC<ProfileMenuProps> = ({ username, email }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="w-full">
            <div className="flex flex-row justify-between gap-2 items-center">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <p>Hi! {username}</p>
                <p>{email}</p>
              </div>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <Command className="rounded-lg border shadow-md w-[220px]">
              <CommandList>
                <CommandGroup heading="Settings">
                  <CommandItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    {/* <CommandShortcut>⌘P</CommandShortcut> */}
                  </CommandItem>
                  <CommandItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    {/* <CommandShortcut>⌘B</CommandShortcut> */}
                  </CommandItem>
                  <CommandItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    {/* <CommandShortcut>⌘S</CommandShortcut> */}
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
            {/* <NavigationMenuLink></NavigationMenuLink> */}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ProfileMenu;
