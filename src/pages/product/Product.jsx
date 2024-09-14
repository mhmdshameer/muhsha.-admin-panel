import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@mui/icons-material";

export default function product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
      <Link to="/newProduct">
        <button className="productAddButton">Create</button>
      </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productData}
            dataKey="Sales"
            title="Sales Perfomance"
            grid
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="/img/airpods.avif"
              alt="Product"
              className="productInfoImg"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">Id:</div>
              <span className="productInfoValue">123</span>
            </div>

            <div className="productInfoItem">
              <div className="productInfoKey">Sales:</div>
              <span className="productInfoValue">4123</span>
            </div>

            <div className="productInfoItem">
              <div className="productInfoKey">Active:</div>
              <span className="productInfoValue">yes</span>
            </div>

            <div className="productInfoItem">
              <div className="productInfoKey">In stock:</div>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" value="Apple Airpods" />
            <label>In stock</label>
            <select name="instock" id="instock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src="/img/airpods.avif" alt="product" className="uploadImg"/>
              <label for="file">
                <Publish/>
              </label>
              <input type="file" id="file" style={{display:"none"}} />
            </div>
            <button className="productUpdateButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
