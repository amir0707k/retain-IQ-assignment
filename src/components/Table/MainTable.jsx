import { useContext, useState } from "react";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import ButtonOnCard from "../ButtonOnCard";
import DesignPopup from "../DesignPopup.jsx";
import ProductFilters from "../ProductFilters";
import Header from "./Header";
import DraggableTable from "./DraggableTable";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa6";
import { DesignContext } from "@/context/DesignContext";

const MainTable = () => {
  const {
    products: tableData,
    tableColumns,
    addNewVariant,
    deleteVariant,
  } = useContext(DesignContext);
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProductVariant, setSelectedProductVariant] = useState({
    productId: "",
    variantId: "",
  });
  console.log(tableColumns)
  const handleDialogOpen = (productId, variantId) => {
    setSelectedProductVariant({ productId, variantId });
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const columns = [
    {
      accessorKey: "draggable",
      header: "",
    },
    {
      accessorKey: "product_filter",
      header: () => <span className="w-full text-center">Product Filter</span>,
      cell: ({ row }) => <ProductFilters filters={row.original.filters} />,
      maxSize: 20,
    },
    ...tableColumns.map(({ key, header }) => ({
      accessorKey: key,
      header: () => (
        <Header
          header={header}
          key={key}
          
          columnKey={key}
          deleteVariantColumn={deleteVariant}
          className='w-40'
        />
      ),
      cell: ({ row }) => (
        <ButtonOnCard
          row={row}
          columnKey={key}
          onOpen={() => handleDialogOpen(row.original.id, key)}
        />
      ),
      maxSize: 10,
    })),
    {
      accessorKey: "action",
      header: "",
      cell: () =>  <div className="h-full grid place-content-center"><Button variant="outline" size="icon" onClick={addNewVariant}>
      <FaPlus />
    </Button></div>,
    },
  ];

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <DraggableTable table={table} />

      <DesignPopup
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        selectedProductVariant={selectedProductVariant}
      />
    </>
  );
};

export default MainTable;
