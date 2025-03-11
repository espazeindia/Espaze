/* eslint-disable react-hooks/exhaustive-deps */
import Ajv from "ajv";
import csvToJson from "csvtojson";
import * as XLSX from "xlsx";

import { useContext, useState } from "react";

//internal import
import { SidebarContext } from "@/context/SidebarContext";
import ProductServices from "@/services/ProductServices";
import { notifyError, notifySuccess } from "@/utils/toast";
import useDisableForDemo from "./useDisableForDemo";

// custom product upload validation schema
const schema = {
  type: "object",
  properties: {
    price: { type: "number" },
    name: { type: "string" },
    category: { type: "string" },
    quantity: { type: "number" },
    description: { type: "string" },
    manufacturingDate:{ type: "string" },
    expiryDate:{ type: "string" },
    code:{type:"string"},
    subCategory:{type:"string"}
  },
  required: [ "category", "price", "name"],
};

const useProductFilter = (data) => {
  const ajv = new Ajv({ allErrors: true });
  const { setLoading, setIsUpdate } = useContext(SidebarContext);

  const [newProducts] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);
  const [filename, setFileName] = useState("");
  const [isDisabled, setIsDisable] = useState(false);

  const { handleDisableForDemo } = useDisableForDemo();

  //service data filtering
  const serviceData = data;

  //  console.log('selectedFile',selectedFile)

  const handleOnDrop = (data) => {
    // console.log('data', data);
    for (let i = 0; i < data.length; i++) {
      newProducts.push(data[i].data);
    }
  };

  const handleUploadProducts = () => {
    if (handleDisableForDemo()) {
      return; // Exit the function if the feature is disabled
    }
    if (newProducts.length < 1) {
      notifyError("Please upload/select csv file first!");
    } else {
      if (handleDisableForDemo()) {
        return; // Exit the function if the feature is disabled
      }
      ProductServices.addAllProducts(newProducts)
        .then((res) => {
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
    }
  };

  const handleSelectFile = async (e) => {
    e.preventDefault();

    const fileReader = new FileReader();
    const file = e.target?.files[0];

    if (file && file.type === "application/json") {
      setFileName(file?.name);
      setIsDisable(true);

      fileReader.readAsText(file, "UTF-8");
      fileReader.onload = (e) => {
        const text = JSON.parse(e.target.result);

        const productData = text.map((value) => {
          return {
            category: value.category,
            code: value.code,
            price: value.price,
            name: value.name,
            quantity: value.quantity,
            description: value.description,
            manufacturingDate: value.manufacturingDate,
            expiryDate: value.expiryDate,
            subCategory:value.subCategory
          };
        });
        setSelectedFile(productData);
      };
    } else if (file && file.type === "text/csv") {
      setFileName(file?.name);
      setIsDisable(true);

      fileReader.onload = async (event) => {
        const text = event.target.result;
        const json = await csvToJson().fromString(text);
        // console.log("json", json);
        const productData = json.map((value) => {
          return {
            code: JSON.parse(value.code),
            quantity: JSON.parse(value.quantity),
            price: JSON.parse(value.price),
            name: JSON.parse(value.name),
            category: JSON.parse(value.category),
            description: JSON.parse(value.description),
            manufacturingDate: JSON.parse(value.manufacturingDate),
            expiryDate: JSON.parse(value.expiryDate),
            subCategory:JSON.parse(value.subCategory)
          };
        });

        setSelectedFile(productData);
      };

      fileReader.readAsText(file);
    } else if (file && (file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")) {
      setFileName(file?.name);
      setIsDisable(true);

      fileReader.onload = async (event) => {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: "array" });

        const sheetName = workbook.SheetNames[0];
        const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

        // Convert Excel data to match productData format
        const productData = sheetData.map((value) => ({
          category: value["Category"],
          code: value["Product Code"],
          price: value["Price"],
          name: value["Name"],
          quantity: value["Quantity"],
          description: value["Description"] || "", // Handle missing descriptions
          manufacturingDate: value["Manufacturing Date"],
          expiryDate: value["Expiry Date"],
          subCategory:value["SubCategory"]
        }));

        setSelectedFile(productData);
      };

      fileReader.readAsArrayBuffer(file);
    }
    else {
      setFileName(file?.name);
      setIsDisable(true);

      notifyError("Unsupported file type!");
    }
  };

  const handleUploadMultiple = (e) => {
    // if (handleDisableForDemo()) {
    //   return; // Exit the function if the feature is disabled
    // }
    if (selectedFile.length > 1) {
      setLoading(true);
      let productDataValidation = selectedFile.map((value) =>
        ajv.validate(schema, value)
      );

      const isBelowThreshold = (currentValue) => currentValue === true;
      const validationData = productDataValidation.every(isBelowThreshold);
      console.log('validationdata',validationData)

      if (validationData) {
        ProductServices.addAllProducts(selectedFile)
          .then((res) => {
            setIsUpdate(true);
            setLoading(false);
            notifySuccess(res.message);
          })
          .catch((err) => {
            setLoading(false);
            notifyError(err.message);
          });
      } else {
        setLoading(false);
        notifyError("Please enter valid data!");
      }
    } else {
      setLoading(false);
      notifyError("Please select a valid json, csv & xls file first!");
    }
  };

  const handleRemoveSelectFile = (e) => {
    // console.log('remove');
    setFileName("");
    setSelectedFile([]);
    setTimeout(() => setIsDisable(false), 1000);
  };

  return {
    data,
    filename,
    isDisabled,
    handleSelectFile,
    serviceData,
    handleOnDrop,
    handleUploadProducts,
    handleRemoveSelectFile,
    handleUploadMultiple,
  };
};

export default useProductFilter;
