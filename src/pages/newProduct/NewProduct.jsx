import { Publish } from "@mui/icons-material";
import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product</h1>
      <form className="newProductForm">
        <div className="newProductImg">
          <img
            src="/img/noAvatar.avif"
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
          <label>stock</label>
          <input type="text" placeholder="Stock" />
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <button className="newProductUpdateButton">Create</button>
      </form>
    </div>
  );
}
