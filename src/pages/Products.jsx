import React from "react";
import { Tune, FileDownload, FileUpload, DeleteOutline, Add } from "@mui/icons-material";
import { Checkbox, Table } from "@mui/joy";
import { TableCell, TableHead, TableRow, TableBody, TableContainer } from "@mui/material";

function Products() {
  return (
    <div className="w-full h-full p-5 bg-gray-100">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Products</h1>
        <div className="flex">
          <button className="bg-green-400 flex items-center px-6 py-2 text-white font-semibold rounded-s-lg">
            <FileDownload /> Import
          </button>
          <button className="bg-gray-400 flex items-center px-6 py-2 text-white font-semibold rounded-e-lg">
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
              className="bg-gray-100 px-4 py-2 rounded-full w-[55vw] text-black focus:outline-0 placeholder:text-xl"
              placeholder="Search Product"
            />
            <button className="border flex items-center px-4 rounded-full ml-2 py-1">
              <Tune className="mr-2" /> Filters
            </button>
          </div>
          <div className="flex">
            <button className="bg-red-400 flex items-center px-3 py-2 text-white font-semibold rounded-s-lg">
              <DeleteOutline />
              Delete
            </button>
            <button className="bg-green-400 flex items-center px-3 py-2 text-white font-semibold rounded-e-lg">
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
                  <TableCell className="text-center w-40 text-white">Details</TableCell>
                  <TableCell className="text-center w-40 text-white">Published</TableCell>
                  <TableCell className="text-right w-40 text-white">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="bg-gray-700 text-white">
                {/* Add table rows here */}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Products;
