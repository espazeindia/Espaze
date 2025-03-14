import { Checkbox, Switch } from "@mui/joy";
import { TableBody, TableCell, TableRow } from "@mui/material";
import React, { useState } from "react";
import ViewModalComponent from "../modal/ViewProductModal";
import EditModalComponent from "../modal/UpdateProductModal";
import { Visibility, Edit, Delete } from "@mui/icons-material";

function ProductTable({ products }) {
  const [openViewProduct, setViewProduct] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  const [openUpdateProduct, setOpenUpdateProduct] = useState(false);
    const [editProductDetails, setEditProductDetails] = useState({});
  const handleProductView = (data) => {
    setProductDetails(data);
    setViewProduct(true);
  };
  const handleProductEdit = (data) => {
    setEditProductDetails(data);
    setOpenUpdateProduct(true);
  };
  return (
    <>
      <TableBody className="bg-gray-50 text-black===">
        {products?.map((product, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <Checkbox
                type="checkbox"
                size="sm"
                className="relative top-[3px] left-2"
                // name={product?.name}
                // id={product._id}
                // handleClick={handleClick}
                // isChecked={isCheck?.includes(product._id)}
              />
            </TableCell>

            <TableCell>
              
                  <h2
                    className={`text-sm text-center font-medium ${
                      product?.name.length > 30 ? "wrap-long-title" : ""
                    }`}
                  >
                    {product?.name?.substring(0, 28)}
                  </h2>
               
            </TableCell>

            <TableCell>
              <div className="text-center text-sm">{product?.category_id?.name}</div>
            </TableCell>

            <TableCell>
              <div className="text-center text-sm">{product?.subCategory_id?.name}</div>
            </TableCell>

            <TableCell>
              <div className="text-sm text-center font-semibold">{product?.code}</div>
            </TableCell>

            <TableCell>
              <div className="text-sm text-center">
                {new Date(product?.expiryDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </div>
            </TableCell>

            <TableCell>
              <div className="text-sm text-center">{product?.quantity}</div>
            </TableCell>

            <TableCell>
              <div className="text-sm text-center">
                {new Date(product?.manufacturingDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </div>
            </TableCell>

            <TableCell>
              <div className="text-sm text-center">₹ {product?.price}</div>
            </TableCell>

            <TableCell>
              {product.quantity > 0 ? (
                <div className="border border-green-500 mx-auto text-xs text-green-500 px-2 py-1 rounded-full w-fit">
                  In Stock
                </div>
              ) : (
                <div className="border border-red-500 mx-auto text-xs text-red-500 px-2 py-1 rounded-full w-fit">
                  Sold Out
                </div>
              )}
            </TableCell>

            <TableCell>
              <div className="text-center">
              <Switch
                checked={product.status==="show"}
                sx={{
                  "--Switch-trackRadius": "13px",
                  "--Switch-trackWidth": "40px",
                  "--Switch-trackHeight": "19px",
                  "--Switch-thumbSize": "10px",
                }}
              />
              </div>
            </TableCell>
            <TableCell>
              <div className="flex justify-center">
              <div
                className=" hover:cursor-pointer "
                onClick={() => {
                  handleProductView(product);
                }}
              >
                <Visibility fontSize="small" />
              </div>
              <div className="inline ml-2 hover:cursor-pointer" onClick={()=>{handleProductEdit(product)}}>
                <Edit fontSize="small" />
              </div>
              <div className="inline ml-2 hover:cursor-pointer">
                <Delete fontSize="small" />
              </div>
              </div>
              {/* <EditDeleteButton
                id={product._id}
                product={product}
                isCheck={isCheck}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
                title={showingTranslateValue(product?.title)}
              /> */}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <ViewModalComponent
        isOpen={openViewProduct}
        onClose={() => setViewProduct(false)}
        data={productDetails}
      />
      <EditModalComponent
        isOpen={openUpdateProduct}
        onClose={() => setOpenUpdateProduct(false)}
        data={editProductDetails}
      />
    </>
  );
}

export default ProductTable;
