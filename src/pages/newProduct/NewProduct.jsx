import { Publish } from "@mui/icons-material";
import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product</h1>
      <form className="newProductForm">
        <div className="newProductImg">
          <img
            src="/img/noImage.jpg"
            alt="product"
            className="newUploadImg"
          />
          <label for="file">
            <Publish />
          </label>
          <input type="file" id="file" style={{ display: "none" }} />
        </div>
        <div className="newProductDetails">
          <label>Product Name</label>
          <input type="text" placeholder="Product Name" />
          <label>Description</label>
          <input type="text" placeholder="Description" />
          <label>Category</label>
          <input type="text" placeholder="Category" />
          <label>Price</label>
          <input type="text" placeholder="Price" />
          <label>stock</label>
          <select>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <button className="newProductUpdateButton">Create</button>
      </form>
    </div>
  );
}
