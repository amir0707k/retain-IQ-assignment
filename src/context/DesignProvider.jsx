import { useState } from "react"
import { DesignContext } from "./DesignContext";
import toast from "react-hot-toast";


const initialProducts = [
  {
    id: "1",
    product_filter: "design 1",
    primary_variant: "1",
    variant_2: "2",
    filters: [
      { title: "image_list.Product Image 2", available: "is empty", value: "" },
      { title: "AND Discount Percentage", available: "is", value: "0" },
    ],
  },
  {
    id: "2",
    product_filter: "design 2",
    primary_variant: "3",
    variant_2: "4",
    filters: [{ title: "Discount Percentage", available: ">", value: "20" }],
  },
  {
    id: "3",
    product_filter: "design 3",
    primary_variant: "5",
    variant_2: "6",
    filters: [
      { title: "image_list.Product Image 2", available: "is empty", value: "0" },
    ],
  },
];
const initialColumns = [
  {
    key: "primary_variant",
    header: "Primary Variant",
  },
  {
    key: "variant_2",
    header: "Variant 2",
  },
]

const DesignProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  const [tableColumns, setTableColumns] = useState(initialColumns)


  function addNewRow() {
    setProducts([...products, {
      id: crypto.randomUUID(),
      filters: [],
      primary_variant: "",
      variant_2: "",
    }])
  }

  function addNewVariant() {
    setTableColumns([...tableColumns, { key: `variant_${tableColumns.length + 1}`, header: `Variant ${tableColumns.length + 1}` }])

    toast.success("State added")
  }

  function deleteRow() {
    setProducts((products) => products.filter((product) => product.id !== id));
  }

  function deleteVariant(key) {
    
    setTableColumns((columns) =>
      columns.filter((column) => column.key !== key)
    );

    toast.success("Variant deleted");
  }



  return (
    <DesignContext.Provider value={{ products, setProducts, tableColumns, setTableColumns,addNewVariant ,deleteRow, deleteVariant, addNewRow}}>
      {children}
    </DesignContext.Provider>
  )
}

export default DesignProvider