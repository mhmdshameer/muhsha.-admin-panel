import "./productList.css"
import { Delete, Edit } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
    const [data, setData]= useState(productRows);

    const handleDelete= (id)=>{
        setData(data.filter((item)=> item.id !== id));
      }
      const columns = [
        { field: "id", headerName: "ID", width: 100 },
        { field: "product", headerName: "Product", width: 160, renderCell: (params) =>{
          return (
            <div className="productListItem">
              <img  src={params.row.image} alt="" className="productListImage"/>
              {params.row.name}
            </div>
          )
        } },
    
        {
          field: "stock",
          headerName: "Stock",
          width: 160,
        },
        {
          field: "status",
          headerName: "Status",
          width: 100,
        },
        {
          field: "price",
          headerName: "Price",
          width: 100,
        },
        {field: "action",
          headerName: "Action",
          width:160,
          renderCell: (params)=>{
            return (
              <>
              <Link to={"/product/"+params.row.id}>
                <button className="button edit"> <Edit/> </button>
              </Link>
                <button className="button delete" onClick={()=> handleDelete(params.row.id)}> <Delete/> </button>
    
              </>
            )
          }
        }
      ];
    
  return (
    <div className="productList">
       <div className="productList">
      <DataGrid
       disableRowSelectionOnClick
        rows={data}
        columns={columns}
        checkboxSelection
      />
    </div>
    </div>
  )
}
