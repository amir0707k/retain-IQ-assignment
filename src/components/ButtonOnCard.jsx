import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { designs } from "../rawData";
import { PlusIcon, SquarePenIcon } from "lucide-react";

const ButtonOnCard = ({ row, onOpen, columnKey }) => {
  const designId = row.getValue(columnKey);
  const design = designs.find((d) => d.id === designId);

  return (
    <Card className="group w-48 !max-w-none h-full flex-shrink-0 m-auto">
      <CardContent className="h-full flex flex-col items-center justify-center p-4 space-y-1">
        {designId ? (
          <>
            <img
              width={500}
              height={500}
              className="w-full aspect-square rounded-md object-cover object-top"
              src={design?.image}
              alt={design?.name}
            />

            <p className="w-full font-medium line-clamp-1">{design?.name}</p>

            <Button
              variant="secondary"
              size="icon"
              className="absolute hidden group-hover:flex"
              onClick={onOpen}
            >
              <SquarePenIcon />
            </Button>
          </>
        ) : (
          <Button variant="outline" onClick={onOpen}>
            <PlusIcon />
            Add design
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ButtonOnCard;
