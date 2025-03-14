import React, { useEffect, useState } from "react";
import { Tune, FileDownload, FileUpload, DeleteOutline, Add } from "@mui/icons-material";
import { Checkbox, Table } from "@mui/joy";
import { TableCell, TableHead, TableRow, TableContainer, TablePagination } from "@mui/material";
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
        id: 1,
        name: "Apple",
        category_id: { name: "fruits-vegetables" },
        subCategory_id: { name: "Fruits" },
        code: "APL123",
        expiryDate: "2025-06-20",
        manufacturingDate: "2024-03-01",
        quantity: 10,
        price: 150,
        status: "show",
    },
    {
        id: 2,
        name: "Men's T-Shirt",
        category_id: { name: "clothes" },
        subCategory_id: { name: "Men" },
        code: "TSHIRT001",
        expiryDate: "2026-12-31",
        manufacturingDate: "2024-02-10",
        quantity: 20,
        price: 999,
        status: "show",
    },
    {
        id: 3,
        name: "Samsung Galaxy S23 Ultra",
        category_id: { name: "electronics" },
        subCategory_id: { name: "Mobiles" },
        code: "S23ULTRA",
        expiryDate: "2026-10-15",
        manufacturingDate: "2024-02-01",
        quantity: 0,
        price: 124999,
        status: "hide",
    },
    {
        id: 4,
        name: "Wooden Dining Table",
        category_id: { name: "home-appliances" },
        subCategory_id: { name: "Furniture" },
        code: "TABLE001",
        expiryDate: "2028-06-15",
        manufacturingDate: "2024-04-12",
        quantity: 5,
        price: 24999,
        status: "show",
    },
    {
        id: 5,
        name: "Herbal Shampoo",
        category_id: { name: "beauty-personal-care" },
        subCategory_id: { name: "Haircare" },
        code: "SHMP001",
        expiryDate: "2027-09-20",
        manufacturingDate: "2024-01-25",
        quantity: 30,
        price: 499,
        status: "show",
    },
    {
        id: 6,
        name: "Chess Set",
        category_id: { name: "toys-games" },
        subCategory_id: { name: "Board Games" },
        code: "CHESS001",
        expiryDate: "2026-03-10",
        manufacturingDate: "2024-05-20",
        quantity: 12,
        price: 1299,
        status: "show",
    },
    {
        id: 7,
        name: "Bestseller Novel",
        category_id: { name: "books-stationery" },
        subCategory_id: { name: "Fiction" },
        code: "BOOK001",
        expiryDate: "2030-12-31",
        manufacturingDate: "2024-07-01",
        quantity: 50,
        price: 599,
        status: "show",
    },
    {
        id: 8,
        name: "Organic Almonds",
        category_id: { name: "grocery" },
        subCategory_id: { name: "Snacks" },
        code: "ALMND001",
        expiryDate: "2025-11-30",
        manufacturingDate: "2024-08-15",
        quantity: 25,
        price: 799,
        status: "show",
    },
];

  
  

  return (
    <div className="w-full h-full p-5 bg-gray-100">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-700 transition-all duration-1000 hover:scale-[110%]">Products</h1>
        <div className="flex">
          <button className="border-green-600 border transition-all duration-500 flex items-center px-6 py-2
           text-green-600 font-semibold rounded-s-lg hover:cursor-pointer shadow-green-600 hover:shadow-sm">
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
            <button
              onClick={() => {
                setOpenAddProduct(true);
              }}
              className="border-green-600 border-y border-r text-green-600 
              transition-all duration-700 flex items-center px-3 py-2  font-semibold rounded-e-lg 
              hover:cursor-pointer shadow-green-600 hover:shadow-sm"
            >
              <Add />
              Add Product
            </button>
          </div>
        </div>
        <div className="overflow-scroll sideBarNone mt-5 ">
          <TableContainer className=" rounded-lg sideBarNone">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="w-10 text-white">
                    <Checkbox type="checkbox" size="sm" className="relative top-[3px] left-2" />
                  </TableCell>
                  <TableCell className="w-40 text-white">
                    <div className=" text-center text-[#6b7280]">Product Name</div>
                  </TableCell>
                  <TableCell className="w-40 text-white">
                    <div className=" text-center text-[#6b7280]">Category</div>
                  </TableCell>
                  <TableCell className="w-40 text-white">
                    <div className=" text-center text-[#6b7280]">Sub Category</div>
                  </TableCell>
                  <TableCell className="w-40 text-white">
                    <div className=" text-center text-[#6b7280]">Product Code</div>
                  </TableCell>
                  <TableCell className="w-40 text-white">
                    <div className=" text-center text-[#6b7280]">Expiry Date</div>
                  </TableCell>
                  <TableCell className="w-40 text-white">
                    <div className=" text-center text-[#6b7280]">Quantity</div>
                  </TableCell>
                  <TableCell className="w-40 text-white">
                    <div className=" text-center text-[#6b7280]">Manufacturing Date</div>
                  </TableCell>
                  <TableCell className="w-40 text-white">
                    <div className=" text-center text-[#6b7280]">Price</div>
                  </TableCell>
                  <TableCell className="w-30 text-white">
                    <div className=" text-center text-[#6b7280]">Status</div>
                  </TableCell>
                  <TableCell className="w-30 text-white">
                    <div className=" text-center text-[#6b7280]">Published</div>
                  </TableCell>
                  <TableCell className=" w-30 text-white">
                    <div className=" text-center text-[#6b7280]">Actions</div>
                  </TableCell>
                </TableRow>
              </TableHead>
              <ProductTable
                products={products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)}
              />
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 20, 30]}
            component="div"
            count={products.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
      <AddProductDetails isOpen={openAddProduct} onClose={() => setOpenAddProduct(false)} />
    </div>
  );
}

export default Products;
