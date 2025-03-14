import React from "react";
import { DialogContent, DialogTitle, Modal, ModalClose, ModalDialog } from "@mui/joy";
import { DeleteOutline } from "@mui/icons-material";

function DeleteProductModal({ isOpen, onClose, data }) {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalDialog size="lg">
        <ModalClose style={{ zIndex: "10" }} />
        <DialogTitle>Delete Product</DialogTitle>
        <DialogContent className=" w-[30vw] overflow-scroll sideBarNone">
          <div className="text-red-500 mt-3 flex justify-center items-center">
            <DeleteOutline fontSize="large" />
            <div className="text-3xl font-semibold"> Caution</div>
          </div>

          <div className="mt-4 text-center">Are you sure you want to delete {data.name} ?</div>
          <div className="flex justify-end gap-3 mt-3">
            <button className=" border border-green-500 text-green-500 px-6 py-1 rounded-lg transition-all duration-700 text-semibold hover:text-white hover:bg-green-500">
              Cancel
            </button>
            <button className=" border border-red-500 text-red-500 px-6 py-1 rounded-lg transition-all duration-700 text-semibold hover:text-white hover:bg-red-500">
              Delete
            </button>
          </div>
        </DialogContent>
      </ModalDialog>
    </Modal>
  );
}

export default DeleteProductModal;
