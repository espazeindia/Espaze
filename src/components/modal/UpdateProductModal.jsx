import React, { useEffect, useState } from "react";
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
  Textarea,
} from "@mui/joy";

function UpdateProductModal({ isOpen, onClose , data }) {
    const [formData, setFormData] = useState({
        productName: "",
        productDescription: "",
        category: "",
        subCategory: "",
        code: "",
        price: "",
        manufacturingDate: "",
        expiryDate: "",
      });
    
      // Update formData when `data` changes
      useEffect(() => {
        if (data) {
          setFormData({
            productName: data.name || "",
            productDescription: data.description || "",
            category: data.category_id?.name || "",
            subCategory: data.subCategory_id?.name || "",
            code: data.code || "",
            price: data.price || "",
            manufacturingDate: data.manufacturingDate || "",
            expiryDate: data.expiryDate || "",
          });
        }
      }, [data]);

  const categories = {
    "fruits-vegetables": ["Fruits", "Vegetables", "Organic Produce"],
    clothes: ["Men", "Women", "Kids", "Accessories"],
    electronics: ["Mobiles", "Laptops", "TVs", "Cameras"],
    "home-appliances": ["Kitchen Appliances", "Furniture", "Decor"],
    "beauty-personal-care": ["Skincare", "Haircare", "Makeup"],
    "toys-games": ["Board Games", "Outdoor Toys", "Video Games"],
    "books-stationery": ["Fiction", "Non-fiction", "Office Supplies"],
    grocery: ["Dairy", "Snacks", "Beverages"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Ensure price cannot be negative
    const updatedValue = name === "price" ? Math.max(0, value) : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleCategoryChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      category: value,
      subCategory: "", // Reset subCategory when category changes
    }));
  };

  const handleSubCategoryChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      subCategory: value,
    }));
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalDialog size="lg">
        <ModalClose style={{ zIndex: "10" }} />
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent className="h-[50vh] w-[70vw] overflow-scroll sideBarNone">
          <form>
            <div className="grid grid-cols-2 gap-5">
              {/* Product Name */}
              <FormControl size="lg" className="space-y-1">
                <label className="text-black font-semibold">Product Name</label>
                <Input
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  required
                  size="lg"
                  placeholder="Enter Product Name"
                />
              </FormControl>

              {/* Product Description */}
              <FormControl size="lg" className="row-span-2">
                <label className="text-black font-semibold">Product Description</label>
                <Textarea
                  name="productDescription"
                  value={formData.productDescription}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 h-full sideBarNone"
                  maxRows={4}
                  placeholder="Enter Product Description"
                />
              </FormControl>

              {/* Category */}
              <FormControl size="lg" className="space-y-1">
                <label className="text-black font-semibold">Category</label>
                <Select
                  placeholder="Select Category"
                  onChange={(_, value) => handleCategoryChange(value)}
                  required
                  value={formData.category}
                  name="category"
                  slotProps={{
                    listbox: { sx: { maxHeight: 150, overflowY: "auto" } },
                  }}
                >
                  {Object.keys(categories).map((category) => (
                    <Option key={category} value={category}>
                      {category.replace("-", " ").toUpperCase()}
                    </Option>
                  ))}
                </Select>
              </FormControl>

              {/* Sub Category */}
              <FormControl size="lg" className={`space-y-1 ${
                    !formData.category ? "cursor-not-allowed" : ""
                  }`}>
                <label className="text-black font-semibold">Sub Category</label>
                <Select
                  placeholder="Select Sub Category"
                  onChange={(_, value) => handleSubCategoryChange(value)}
                  required
                  value={formData.subCategory}
                  name="subCategory"
                  disabled={!formData.category}
                  slotProps={{
                    listbox: { sx: { maxHeight: 150, overflowY: "auto" } },
                  }}
                >
                  {formData.category &&
                    categories[formData.category]?.map((subCategory) => (
                      <Option key={subCategory} value={subCategory}>
                        {subCategory}
                      </Option>
                    ))}
                </Select>
              </FormControl>

              {/* Product Code */}
              <FormControl size="lg" className="space-y-1">
                <label className="text-black font-semibold">Code</label>
                <Input
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  required
                  size="lg"
                  placeholder="Enter Product Code"
                />
              </FormControl>

              {/* Price */}
              <FormControl size="lg" className="space-y-1">
                <label className="text-black font-semibold">Price</label>
                <Input
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  size="lg"
                  placeholder="Enter Product Price"
                />
              </FormControl>

              {/* Manufacturing Date */}
              <FormControl size="lg" className="space-y-1">
                <label className="text-black font-semibold">Manufacturing Date</label>
                <Input
                  name="manufacturingDate"
                  value={formData.manufacturingDate}
                  onChange={handleChange}
                  type="date"
                  required
                  size="lg"
                />
              </FormControl>

              {/* Expiry Date (Cannot be earlier than Manufacturing Date) */}
              <FormControl size="lg" className="space-y-1">
                <label className="text-black font-semibold">Expiry Date</label>
                <Input
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  type="date"
                  required
                  size="lg"
                  min={formData.manufacturingDate }           
                  />
              </FormControl>
            </div>

            {/* Submit Button */}
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="border-green-500 border text-green-500 px-6 py-2 transition-all duration-500 hover:bg-green-500 hover:text-white rounded-lg hover:cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </DialogContent>
      </ModalDialog>
    </Modal>
  );
}

export default UpdateProductModal;
