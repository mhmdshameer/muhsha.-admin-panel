import { Publish } from "@mui/icons-material";
import "./newProduct.css";
import { useState } from "react";

export default function NewProduct() {
  const [input, setInput] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  console.log(file);
  const handleChange = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product</h1>
      <form className="newProductForm">
        <div className="newProductImg">
          <img
            src={file ? URL.createObjectURL(file) : "/img/noImage.jpg"}
            alt="product"
            className="newUploadImg"
          />
          <label htmlFor="file">
            <Publish />
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="newProductDetails">
          <label>Product Name</label>
          <input
            name="title"
            type="text"
            placeholder="Product Name"
            onChange={handleChange}
          />
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="Description"
            onChange={handleChange}
          />
          <label>Category</label>
          <input
            name="category"
            type="text"
            placeholder="Category"
            onChange={handleCat}
          />
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="Price"
            onChange={handleChange}
          />
          <label>stock</label>
          <select onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <button className="newProductUpdateButton">Create</button>
      </form>
    </div>
  );
}
