import React, { useEffect, useState } from "react";
import { Tune, FileDownload, FileUpload, DeleteOutline, Add } from "@mui/icons-material";
import { Checkbox, Table } from "@mui/joy";
import { TableCell, TableHead, TableRow,  TableContainer ,TablePagination} from "@mui/material";
import ProductTable from "../components/table/ProductTable";
import AddProductDetails from "../components/modal/AddProductModal";

function Products() {
  // useEffect(async()=>{
  //   const { data, loading, error } =
  //     await ProductServices.getAllProducts({
  //       page: currentPage,
  //       limit: limitData,
  //       category: category,
  //       title: searchText,
  //       price: sortedField,
  //     })
  // },[])
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const products = [
    {
      id:1,
      name: "Apple",
      category: "Fruits",
      subCategory: "Fresh Fruits",
      productCode: "APL123",
      expiryDate: "2025-06-20",
      quantity: 0,
      manufacturingDate: "2025-03-01",
      price: 100,
      status: "Available",
      details: "Red Apple, organic",
      published: true,
      actions: "Edit | Delete",
    },
    {
      id:2,
      name: "Milk",
      category: "Dairy",
      subCategory: "Milk Products",
      productCode: "MLK456",
      expiryDate: "2025-03-25",
      quantity: 100,
      manufacturingDate: "2025-03-10",
      price: 50,
      status: "Available",
      details: "Full cream milk",
      published: true,
      actions: "Edit | Delete",
    },
    {
      id:3,
      name: "Bread",
      category: "Bakery",
      subCategory: "Baked Goods",
      productCode: "BRD789",
      expiryDate: "2025-03-15",
      quantity: 30,
      manufacturingDate: "2025-03-05",
      price: 40,
      status: "Out of Stock",
      details: "Whole wheat bread",
      published: false,
      actions: "Edit | Delete",
    },
  ];

  return (
    <div className="w-full h-full p-5 bg-gray-100">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-700 transition-all duration-1000 hover:scale-[110%]">Products</h1>
        <div className="flex">
          <button className="border-green-700 border transition-all duration-500 flex items-center px-6 py-2
           text-green-700 font-semibold rounded-s-lg hover:cursor-pointer shadow-green-600 hover:shadow-sm">
            <FileDownload /> Import
          </button>
          <button className="border-y border-r border-gray-500 text-gray-500 transition-all 
          duration-500 flex items-center px-6 py-2 font-semibold rounded-e-lg hover:cursor-pointer shadow-gray-400 hover:shadow-sm">
            <FileUpload />
            Export
          </button>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg mt-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="text"
              className="bg-gray-100 px-4 py-2 rounded-lg w-[55vw]
               text-black transition-all duration-500 focus:outline-0 placeholder:text-base focus:shadow-sm
                shadow-gray-600 hover:shadow-sm"
              placeholder="Search Product"
            />
            <button className="border flex items-center px-4 transition-all text-gray-500 border-gray-400
            duration-500 rounded-lg ml-2 py-1 hover:cursor-pointer hover:shadow-xs shadow-gray-400">
              <Tune className="mr-2 text-gray-500" /> Filters
            </button>
          </div>
          <div className="flex">
            <button className="border-red-500 border text-red-500  flex items-center px-3 py-2 
            transition-all duration-500 hover:shadow-sm shadow-red-500 font-semibold rounded-s-lg hover:cursor-pointer">
              <DeleteOutline />
              Delete
            </button>
            <button onClick={()=>{setOpenAddProduct(true)}} className="border-green-700 border-y border-r
             text-green-700 transition-all duration-700 flex items-center px-3 py-2  
             font-semibold rounded-e-lg hover:cursor-pointer shadow-green-700 hover:shadow-sm">
              <Add />
              Add Product
            </button>
          </div>
        </div>
        <div className="overflow-scroll sideBarNone mt-5">
          <TableContainer className=" rounded-lg sideBarNone">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="w-10 text-white">
                    <Checkbox type="checkbox" size="sm" className="relative top-[3px] left-2" />
                  </TableCell>
                  <TableCell className="w-40 text-white">Product Name</TableCell>
                  <TableCell className="w-40 text-white">Category</TableCell>
                  <TableCell className="w-40 text-white">Sub Category</TableCell>
                  <TableCell className="w-40 text-white">Product Code</TableCell>
                  <TableCell className="w-40 text-white">Expiry Date</TableCell>
                  <TableCell className="w-40 text-white">Quantity</TableCell>
                  <TableCell className="w-40 text-white">Manufacturing Date</TableCell>
                  <TableCell className="w-40 text-white">Price</TableCell>
                  <TableCell className="w-40 text-white">Status</TableCell>
                  <TableCell className="text-center w-40 text-white">Published</TableCell>
                  <TableCell className="text-right w-40 text-white">Actions</TableCell>
                </TableRow>
              </TableHead>
              <ProductTable products={products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)}/>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 20,30]}
            component="div"
            count={products.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
      <AddProductDetails isOpen={openAddProduct} onClose={()=>setOpenAddProduct(false)}/>
    </div>
  );
}

export default Products;
