import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { MoreVerticalIcon } from "lucide-react";
  
  const Header = ({ header, columnKey, deleteVariantColumn }) => (
    <div className="w-[90%] flex items-center font-semibold justify-between">
      <p>{header}</p>
  
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreVerticalIcon className="stroke-black size-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => { deleteVariantColumn(columnKey)}}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
  
  export default Header;