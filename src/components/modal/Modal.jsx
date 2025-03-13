import React from 'react'
import { DialogContent, DialogTitle, Modal,ModalClose, ModalDialog, } from '@mui/joy'

function ModalComponent({isOpen,onClose,data}) {
  return (
    <Modal
          open={isOpen}
          onClose={onClose}
        >
          <ModalDialog size="lg">
            <ModalClose style={{zIndex:"10"}}/>
            <DialogTitle className="">Product Details</DialogTitle>
            <DialogContent className="h-[50vh] w-[80vw] overflow-scroll sideBarNone">
              Here are the Details of the product you selected with id {data.id}
              <div className="w-full flex flex-col p-5 md:p-8 text-left">
              <div className="mb-5 block ">
                <div className="font-serif font-semibold py-1 text-sm">
                  <p className="text-sm text-gray-500 pr-4">
                    Status:{" "}
                    {data.status === "show" ? (
                      <span className="text-green-400">
                        Product is visible
                      </span>
                    ) : (
                        <span className="text-red-400">
                        Product is hidden
                      </span>
                    )}
                  </p>
                </div>
                <h2 className="text-heading text-lg md:text-xl lg:text-2xl font-semibold font-serif dark:text-gray-400">
                  {data?.name}
                </h2>
                {/* <p className="uppercase font-serif font-medium text-gray-500 dark:text-gray-400 text-sm">
                  {t("Sku")} :{" "}
                  <span className="font-bold text-gray-500 dark:text-gray-500">
                    
                    {data?.sku}
                  </span>
                </p> */}
              </div>
              <div className="font-serif product-price font-bold dark:text-gray-400">
                <span className="inline-block text-2xl">
                ₹
                  {data?.price}
                  
                </span>
              </div>
              <div className="mb-3">
              {data.quantity > 0 ? (
                <div className="border border-green-500 text-xs text-green-500 px-2 py-1 rounded-full w-fit">
                  In Stock
                </div>
              ) : (
                <div className="border border-red-500 text-xs text-red-500 px-2 py-1 rounded-full w-fit">
                  Sold Out
                </div>
              )}
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium pl-4">
                  Quantity: {data?.quantity}
                </span>
              </div>
              <p className="text-sm leading-6 text-gray-500 dark:text-gray-400 md:leading-7">
                {data?.description}
              </p>
              <div className="flex flex-col mt-4">
                <p className="font-serif font-semibold py-1 text-gray-500 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    "Category":{" "}
                  </span>{" "}
                  {data?.category_id?.name}
                </p>
                <p className="font-serif font-semibold py-1 text-gray-500 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    Sub Category:{" "}
                  </span>{" "}
                  {data?.subCategory_id?.name}
                </p>
                <p className="font-serif font-semibold py-1 text-gray-500 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    Expiry Date:{" "}
                  </span>{" "}
                  {new Date(data?.expiryDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
                </p>
                <p className="font-serif font-semibold py-1 text-gray-500 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    Manufacturing Date:{" "}
                  </span>{" "}
                  {new Date(data?.manufacturingDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
                </p>
                {/* <div className="flex flex-row">
                  {JSON.parse(data?.tag).map((t, i) => (
                    <span
                      key={i + 1}
                      className="bg-gray-200 mr-2 border-0 text-gray-500 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold font-serif mt-2 dark:bg-gray-700 dark:text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div> */}
              </div>
              <div className="mt-6">
                <button
                //   onClick={() => handleUpdate(id)}
                  className="cursor-pointer leading-5 transition-colors duration-150 font-medium text-sm focus:outline-none px-5 py-2 rounded-md text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 "
                >
                  EditProduct
                </button>
              </div>
            </div>
            </DialogContent>
          </ModalDialog>
        </Modal>
  )
}

export default ModalComponent
