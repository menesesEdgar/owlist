import { LucideIcon } from "lucide-react";

interface MenuOptionProps {
  icon: LucideIcon;
  label: string;
}
const MenuOption = ({ icon: Icon, label }: MenuOptionProps) => {
  return (
    <div className="flex flex-row gap-2 items-center cursor-pointer hover:bg-slate-200 px-10 py-2 h-full w-full">
      <Icon className="h-4 w-4" />
      <p className="rounded-md font-mono text-sm">{label}</p>
    </div>
  );
};

export default MenuOption;
