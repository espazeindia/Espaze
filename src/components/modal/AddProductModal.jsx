import React from 'react'
import { DialogContent, DialogTitle, FormControl, Input, Modal,ModalClose, ModalDialog, Option, Select } from '@mui/joy'

function AddProductDetails({isOpen,onClose}) {
  return (
    <Modal
          open={isOpen}
          onClose={onClose}
        >
          <ModalDialog size="lg">
            <ModalClose style={{zIndex:"10"}}/>
            <DialogTitle>Add Product</DialogTitle>
            <DialogContent className="h-[50vh] w-[70vw] overflow-scroll sideBarNone">
              <form  className='grid grid-cols-2 gap-5'>
              <FormControl size="lg" className="space-y-1">
                  <label className="text-lg text-black font-semibold">
                    Product Name
                  </label>
                  <Input
                    name="productName"
                    // value={formData.email}
                    // onChange={handleChange}
                    required
                    fullWidth
                    size="lg"
                    placeholder="Enter Product Name"
                    
                  />
                </FormControl>
                <FormControl size="lg" className="space-y-1">
                  <label className="text-lg text-black font-semibold">
                    Product Description
                  </label>
                  <Input
                    name="productDescription"
                    // value={formData.email}
                    // onChange={handleChange}
                    required
                    fullWidth
                    size="lg"
                    placeholder="Enter Product Description"
                    
                  />
                </FormControl>

                <FormControl size="lg" className="space-y-1">
                  <label className="text-lg text-black font-semibold">Role</label>
                  <Select
                    placeholder="Select Role"
                    // onChange={handleRoleChange}
                    // value={formData.role}
                    required
                  >
                    <Option value="admin">Admin</Option>
                    <Option value="seller">Seller</Option>
                  </Select>
                </FormControl>
              
              </form>
            </DialogContent>
          </ModalDialog>
        </Modal>
  )
}

export default AddProductDetails
