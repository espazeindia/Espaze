import { Checkbox } from "@mui/joy";
import { TableBody, TableCell, TableRow } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalComponent from "../modal/Modal";

function ProductTable({ products }) {
  const [openViewProduct, setViewProduct] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  const handleProductView = (id) => {
    const details = products.filter((product) => product.id === id);
    setProductDetails(details[0]);
    setViewProduct(true);
  };
  return (
    <>
      <TableBody className="bg-gray-50 text-black">
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
              <div className="flex items-center">
                <div>
                  <h2
                    className={`text-sm font-medium ${
                      product?.name.length > 30 ? "wrap-long-title" : ""
                    }`}
                  >
                    {product?.name?.substring(0, 28)}
                  </h2>
                </div>
              </div>
            </TableCell>

            <TableCell>
              <span className="text-sm">{product?.category_id?.name}</span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{product?.subCategory_id?.name}</span>
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">{product?.code}</span>
            </TableCell>

            <TableCell>
              <span className="text-sm">
                {new Date(product?.expiryDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{product?.quantity}</span>
            </TableCell>

            <TableCell>
              <span className="text-sm">
                {new Date(product?.manufacturingDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{product?.price}</span>
            </TableCell>

            <TableCell>
              {product.quantity > 0 ? (
                <div className="border border-green-500 text-xs text-green-500 px-2 py-1 rounded-full w-fit">
                  In Stock
                </div>
              ) : (
                <div className="border border-red-500 text-xs text-red-500 px-2 py-1 rounded-full w-fit">
                  Sold Out
                </div>
              )}
            </TableCell>
            <TableCell>
              <div
                onClick={() => {
                  handleProductView(product.id);
                }}
              >
                Zoom
              </div>
            </TableCell>
            <TableCell className="text-center">
              toggle
              {/* <ShowHideButton id={product._id} status={product.status} /> */}
              {/* {product.status} */}
            </TableCell>
            <TableCell>
              Edit
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
      <ModalComponent
        isOpen={openViewProduct}
        onClose={() => setViewProduct(false)}
        data={productDetails}
      />
    </>
  );
}

export default ProductTable;
