import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@mui/icons-material";
import {useSelector} from "react-redux"
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [pStats,setPStats] = useState([]);
 
  const product = useSelector((state)=> 
    state.product.products.find((product)=> product._id=== productId)
  );
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
 
  useEffect(()=>{
    const getStats = async () =>{
      try{
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a,b)=>{
          return a._id - b._id
        })
        console.log(list)
        list.map((item)=>
        setPStats((prev)=>[
          ...prev,{name:MONTHS[item._id-1], Sales: item.total},
        ])
        )

      }catch(err){
        console.log(err)
      }
    }
   getStats();
  },[productId,MONTHS]);

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
            data={pStats}
            dataKey="Sales"
            title="Sales Perfomance"
            grid
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src={product.img}
              alt="Product"
              className="productInfoImg"
            />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">Id:</div>
              <span className="productInfoValue">{product._id}</span>
            </div>

            <div className="productInfoItem">
              <div className="productInfoKey">Sales:</div>
              <span className="productInfoValue">{product.sales}</span>
            </div>


            <div className="productInfoItem">
              <div className="productInfoKey">In stock:</div>
              <span className="productInfoValue">{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" value={product.title} />
            <label>Product Description</label>
            <input type="text" value={product.desc} />
            <label>Product Color</label>
            <input type="text" value={product.color} />
            <label>Product Size</label>
            <input type="text" value={product.size} />
            <label>Price</label>
            <input type="text" value={product.price} />
            <label>In stock</label>
            <select name="instock" id="instock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.img} alt="product" className="uploadImg"/>
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
