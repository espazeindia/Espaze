import React, { useState } from "react";
import {
  DialogContent,
  DialogTitle,
  FormControl,
  Input,
  Modal,
  ModalClose,
  ModalDialog,
  Option,
  Select,
  Textarea
} from "@mui/joy";

function AddProductDetails({ isOpen, onClose }) {
  const [formData,setFormData]=useState({
    productName:"",
    productDescription:"",
    category:"",
    subCategory:"",
  })

  const categories = {
    "fruits-vegetables": ["Fruits", "Vegetables", "Organic Produce"],
    "clothes": ["Men", "Women", "Kids", "Accessories"],
    "electronics": ["Mobiles", "Laptops", "TVs", "Cameras"],
    "home-appliances": ["Kitchen Appliances", "Furniture", "Decor"],
    "beauty-personal-care": ["Skincare", "Haircare", "Makeup"],
    "toys-games": ["Board Games", "Outdoor Toys", "Video Games"],
    "books-stationery": ["Fiction", "Non-fiction", "Office Supplies"],
    "grocery": ["Dairy", "Snacks", "Beverages"]
  };

  const handleChange = (e)=>{
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleDropDownChange = ({name,value}) => {
    if(name==="category"){
      setFormData((prevData) => ({
        ...prevData,
        category: value,
        subCategory:""
      }));
    }
    else{
      setFormData((prevData) => ({
        ...prevData,
        subCategory:value
      }));
    }
    
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalDialog size="lg">
        <ModalClose style={{ zIndex: "10" }} />
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent className="h-[50vh] w-[70vw] overflow-scroll sideBarNone">
          <form className="grid grid-cols-2 gap-5">
            <FormControl size="lg" className="space-y-1">
              <label className="text-black font-semibold">Product Name</label>
              <Input
                name="productName"
                value={formData.email}
                onChange={handleChange}
                required
                fullWidth
                size="lg"
                placeholder="Enter Product Name"
              />
            </FormControl>
            <FormControl size="lg" className="row-span-2">
              <label className="text-black font-semibold">Product Description</label>
              <Textarea
                name="productDescription"
                value={formData.email}
                onChange={handleChange}
                required
                fullWidth
                className="mt-1 p-2 h-full"
                minRows={4}
                placeholder="Enter Product Description"
              />
            </FormControl>

            <FormControl size="lg" className="space-y-1">
              <label className="text-black font-semibold">Category</label>
              <Select
                placeholder="Select Category"
                onChange={(newValue) => {
                  handleDropDownChange("category",newValue)
                }}
                required
                name="category"
                slotProps={{
                  listbox: {
                    sx: { maxHeight: 150, overflowY: "auto" }, 
                  },
                }}
              >
                {Object.keys(categories).map((category) => (
                  <Option key={category} value={category}>
                    {category.replace("-", " ").toUpperCase()}
                  </Option>
                ))}
              </Select>
            </FormControl>
            <FormControl size="lg" className="space-y-1">
              <label className="text-black font-semibold">Sub Category</label>
              <Select
                placeholder="Select Category"
                required
                name="subCategory"
                disabled={formData.category===""}
                slotProps={{
                  listbox: {
                    sx: { maxHeight: 150, overflowY: "auto" }, 
                  },
                }}
              >
                {formData.category!=="" &&
                  categories[formData.category].map((subCategory) => (
                    <Option key={subCategory} value={subCategory}>
                      {subCategory}
                    </Option>
                  ))}

              </Select>
            </FormControl>
          </form>
        </DialogContent>
      </ModalDialog>
    </Modal>
  );
}

export default AddProductDetails;
