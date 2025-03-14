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
      name: "Apple iPhone 14 Pro Max",
      category_id: { name: "Electronics" },
      subCategory_id: { name: "Mobiles" },
      code: "IPH14PM",
      expiryDate: "2026-12-31",
      manufacturingDate: "2024-01-15",
      quantity: 5,
      price: 129999,
      status: "show",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      category_id: { name: "Electronics" },
      subCategory_id: { name: "Mobiles" },
      code: "S23ULTRA",
      expiryDate: "2026-10-15",
      manufacturingDate: "2024-02-01",
      quantity: 0, // Sold out
      price: 124999,
      status: "hide",
    },
    {
      id: 3,
      name: "Sony WH-1000XM5 Headphones",
      category_id: { name: "Electronics" },
      subCategory_id: { name: "Audio" },
      code: "SONYXM5",
      expiryDate: "2027-05-20",
      manufacturingDate: "2024-03-10",
      quantity: 8,
      price: 29999,
      status: "show",
    },
    {
      id: 4,
      name: "Nike Air Jordan 1 Retro",
      category_id: { name: "Clothing" },
      subCategory_id: { name: "Footwear" },
      code: "AJ1RETRO",
      expiryDate: "2025-12-01",
      manufacturingDate: "2023-12-20",
      quantity: 15,
      price: 14999,
      status: "show",
    },
    {
      id: 5,
      name: "Dell XPS 15 Laptop",
      category_id: { name: "Electronics" },
      subCategory_id: { name: "Laptops" },
      code: "XPS159510",
      expiryDate: "2028-08-31",
      manufacturingDate: "2024-06-05",
      quantity: 3,
      price: 189999,
      status: "hide",
    },
  ];
  
  

  return (
    <div className="w-full h-full p-5 bg-gray-100">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-700 transition-all duration-1000 hover:scale-[110%]">
          Products
        </h1>
        <div className="flex">
          <button className="border-green-500 border transition-all duration-500 flex items-center px-6 py-2 text-green-500 font-semibold rounded-s-lg hover:cursor-pointer shadow-green-400 hover:shadow-md">
            <FileDownload /> Import
          </button>
          <button className="border-y border-r border-gray-600 text-gray-600 transition-all duration-500 flex items-center px-6 py-2 font-semibold rounded-e-lg hover:cursor-pointer shadow-gray-600 hover:shadow-md">
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
              className="bg-gray-100 px-4 py-2 rounded-md w-[55vw] text-black transition-all duration-500 focus:outline-0 placeholder:text-xl focus:shadow-md shadow-gray-600 hover:shadow-sm"
              placeholder="Search Product"
            />
            <button className="border flex items-center px-4 transition-all duration-500 rounded-full ml-2 py-1 hover:cursor-pointer hover:shadow-md shadow-black">
              <Tune className="mr-2" /> Filters
            </button>
          </div>
          <div className="flex">
            <button className="border-red-400 border text-red-400  flex items-center px-3 py-2 transition-all duration-500 hover:shadow-md shadow-red-400 font-semibold rounded-s-lg hover:cursor-pointer">
              <DeleteOutline />
              Delete
            </button>
            <button
              onClick={() => {
                setOpenAddProduct(true);
              }}
              className="border-green-500 border-y border-r text-green-500 transition-all duration-700 flex items-center px-3 py-2  font-semibold rounded-e-lg hover:cursor-pointer shadow-green-500 hover:shadow-md"
            >
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
                  <TableCell className="w-40 text-white">
                    <div className=" text-center">Product Name</div>
                  </TableCell>
                  <TableCell className="w-40 text-white">
                    <div className=" text-center">Category</div>
                  </TableCell>
                  <TableCell className="w-40 text-white">
                    <div className=" text-center">Sub Category</div>
                  </TableCell>
                  <TableCell className="w-40 text-white">
                    <div className=" text-center">Product Code</div>
                  </TableCell>
                  <TableCell className="w-40 text-white">
                    <div className=" text-center">Expiry Date</div>
                  </TableCell>
                  <TableCell className="w-40 text-white">
                    <div className=" text-center">Quantity</div>
                  </TableCell>
                  <TableCell className="w-40 text-white">
                    <div className=" text-center">Manufacturing Date</div>
                  </TableCell>
                  <TableCell className="w-40 text-white">
                    <div className=" text-center">Price</div>
                  </TableCell>
                  <TableCell className="w-30 text-white">
                    <div className=" text-center">Status</div>
                  </TableCell>
                  <TableCell className="w-30 text-white">
                    <div className=" text-center">Published</div>
                  </TableCell>
                  <TableCell className=" w-30 text-white">
                    <div className=" text-center">Actions</div>
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
