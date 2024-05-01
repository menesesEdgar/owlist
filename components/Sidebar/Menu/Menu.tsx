import { IconBadge } from "@/components/IconBadge";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import {
  BookOpenCheck,
  BookOpenText,
  ChevronDown,
  ChevronUp,
  ListTodo,
  LucideIcon,
  SquareUserRound,
  Users,
} from "lucide-react";
import { useState } from "react";
import MenuOption from "./MenuOption";
interface MenuProps {
  icon: LucideIcon;
  label: string;
}
const Menu = ({ icon: Icon, label }: MenuProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  return (
    <Collapsible open={isOpenMenu} onOpenChange={setIsOpenMenu}>
      <div
        className={cn(
          "flex flex-row items-center justify-between  gap-2 px-4 py-1  text-secondary",
          isOpenMenu && "bg-[#F5F5F5]"
        )}
      >
        <IconBadge size="sm" icon={Icon} variant="filled" />
        <h4 className="text-[12px] font-semibold mr-auto ">{label}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="p-0 hover:bg-secondary">
            {isOpenMenu ? (
              <IconBadge size="md" icon={ChevronUp} />
            ) : (
              <IconBadge size="md" icon={ChevronDown} />
            )}
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="bg-primary-foreground flex flex-col items-start">
        <MenuOption icon={BookOpenCheck} label="Asistencia" />
        <MenuOption icon={BookOpenText} label="Tareas" />
        <MenuOption icon={ListTodo} label="Eventos" />
        <MenuOption icon={SquareUserRound} label="Alumnos" />
      </CollapsibleContent>
    </Collapsible>
  );
};

export default Menu;
