import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { PlusIcon } from "lucide-react";

const ProductFilters= ({ filters, withHoverCard = true }) => {
  const isFilterExist = filters.length > 0;

  const Wrapper = ({ children }) =>
    withHoverCard && isFilterExist ? (
      <HoverCard>
        <HoverCardTrigger>{children}</HoverCardTrigger>

        <HoverCardContent add button
rdContent
          className="w-full -mt-[10.5rem]"
          align="start"
          alignOffset={10}
        >
          <ProductFilters filters={filters} withHoverCard={false} />
        </HoverCardContent>
      </HoverCard>
    ) : (
      <Slot>{children}</Slot>
    );

  return (
    <Wrapper>
      <Card
        className={cn(
          "relative h-full flex-shrink-0 w-[26rem] m-auto "
        )}
      >
        <CardContent className="group/filtercard p-4 flex items-center justify-center h-full">
          <div
            className={cn("flex items-center justify-center gap-2", {
              "flex-wrap": withHoverCard,
            })}
          >
            {isFilterExist ? (
              filters?.map((filter, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-2"
                >
                  {filter.title && (
                    <Badge variant="outline" className="flex-shrink-0 rounded-sm px-4 py-2 ">
                      {filter.title}
                    </Badge>
                  )}
                  {filter.available && (
                    <Badge variant="success" className="flex-shrink-0 rounded-sm px-4 py-2 text-green-500 border border-green-400 font-bold bg-green-100">
                      {filter.available}
                    </Badge>
                  )}
                  {filter.value && (
                    <Badge variant="outline" className="flex-shrink-0 rounded-sm px-4 py-2">
                      {filter.value}
                    </Badge>
                  )}
                </div>
              ))
            ) : (
              <Button variant="outline">
                <PlusIcon />
                Add Product Filters
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export default ProductFilters;
