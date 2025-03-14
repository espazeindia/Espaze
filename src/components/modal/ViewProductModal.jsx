import React from "react";
import {
  DialogContent,
  DialogTitle,
  Modal,
  ModalClose,
  ModalDialog,
} from "@mui/joy";

function ViewProductModalComponent({ isOpen, onClose, data,handleEdit }) {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalDialog size="lg" className="bg-white/10 backdrop-blur-lg rounded-lg shadow-xl p-6">
        <ModalClose className="text-gray-500 hover:text-gray-800" />
        <DialogTitle className="text-2xl font-bold text-gray-800">
          Product Details
        </DialogTitle>
        <DialogContent className="h-[50vh] w-[80vw] overflow-auto p-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-gray-900">{data?.name}</h2>
            
            <div className="flex flex-wrap gap-2 items-center">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  data?.status === "show"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {data?.status === "show" ? "Visible" : "Hidden"}
              </span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                ₹ {data?.price}
              </span>
              {data?.quantity > 0 ? (
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                  In Stock ({data?.quantity})
                </span>
              ) : (
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                  Sold Out
                </span>
              )}
            </div>

            <p className="text-gray-700 leading-relaxed">{data?.description}</p>

            <div className="grid grid-cols-2 gap-4 mt-4 text-gray-700">
              <p>
                <span className="font-semibold">Category:</span> {data?.category_id?.name}
              </p>
              <p>
                <span className="font-semibold">Sub-Category:</span> {data?.subCategory_id?.name}
              </p>
              <p>
                <span className="font-semibold">Expiry Date:</span>{" "}
                {new Date(data?.expiryDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p>
                <span className="font-semibold">Manufacturing Date:</span>{" "}
                {new Date(data?.manufacturingDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>

            <div className="flex justify-end mt-6">
            <button
                onClick={handleEdit}
                className="border-green-500 border text-green-500 px-6 py-2 transition-all duration-500 hover:bg-green-500 hover:text-white rounded-lg hover:cursor-pointer"
              >
                Edit
              </button>
            </div>
          </div>
        </DialogContent>
      </ModalDialog>
    </Modal>
  );
}

export default ViewProductModalComponent;
