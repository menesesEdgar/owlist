"use client";
import { IconBadge } from "../IconBadge";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Building2,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  RefreshCcw,
  Users,
  BookOpenText,
  ListTodo,
  SquareUserRound,
  BookOpenCheck,
  ChevronsUp,
  MoveRight,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Button } from "../ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import MenuOption from "./Menu/MenuOption";
import Menu from "./Menu/Menu";

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  return (
    <div className="hidden md:flex top-16 w-auto p- m-2 sidebar-container">
      <aside className="h-full flex flex-col gap-2">
        {/* Badge */}
        <Alert className="bg-primary text-white flex flex-col gap-2 w-[235px]">
          <div className="flex flew-row justify-between gap-2 items-center">
            <IconBadge icon={Building2} size="sm" />
            <AlertTitle className="mr-auto">Organización</AlertTitle>
            <IconBadge icon={RefreshCcw} size="sm" />
          </div>
          <div className="flex flex-row justify-between gap-2 text-[5px]">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <AlertDescription className="text-xs">
              Escuela preparatoria regional de casimiro castillo.
            </AlertDescription>
          </div>
        </Alert>
        {/* Groups List */}
        <div className="flex flex-col gap-2 justify-between h-full">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex flex-row items-center justify-between  gap-2 px-2 py-1 bg-secondary text-white">
              <IconBadge icon={Users} size="sm" />
              <h4 className="text-sm font-semibold mr-auto ">Grupos</h4>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-9 p-0 hover:bg-secondary hover:text-primary-foreground "
                >
                  <ChevronsUpDown className="h-4 w-4" />
                  {/* <span className="sr-only">Toggle</span> */}
                </Button>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent className="">
              <Menu icon={Users} label="1 A MATUTINO" />
              <Menu icon={Users} label="1 B MATUTINO" />
              <Menu icon={Users} label="1 C MATUTINO" />
              <Menu icon={Users} label="1 A VESPERTINO" />
            </CollapsibleContent>
          </Collapsible>

          <Alert className="bg-primary-foreground text-secondary-foreground flex flex-row gap-2 w-[235px] items-center">
            <div className="flex flex-row justify-between gap-2 text-[5px]">
              <ChevronsUp className="bg-primary text-white h-12 w-12 rounded-full" />
            </div>
            <div className="flex flex-col justify-between gap-1">
              <AlertTitle className="font-bold text-md ">
                Upgrade to PRO
              </AlertTitle>
              <AlertDescription className="text-[11px]">
                Access to unlimited Organizations and groups.
              </AlertDescription>
              <AlertDescription className="text-xs flex flex-row  items-center gap-2">
                See more <MoveRight />
              </AlertDescription>
            </div>
          </Alert>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
