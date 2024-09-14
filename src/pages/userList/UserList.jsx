import "./userList.css";
import { Delete, Edit } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
  const [data, setData] =useState(userRows);

  const handleDelete= (id)=>{
    setData(data.filter((item)=> item.id !== id));
  }
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "user", headerName: "User", width: 160, renderCell: (params) =>{
      return (
        <div className="userListUser">
          <img  src={params.row.avatar} alt="" className="userListImage"/>
          {params.row.username}
        </div>
      )
    } },

    {
      field: "email",
      headerName: "Email",
      width: 160,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 100,
    },
    {field: "action",
      headerName: "Action",
      width:160,
      renderCell: (params)=>{
        return (
          <>
          <Link to={"/user/"+params.row.id}>
            <button className="button edit"> <Edit/> </button>
          </Link>
            <button className="button delete" onClick={()=> handleDelete(params.row.id)}> <Delete/> </button>

          </>
        )
      }
    }
  ];



  return (
    <div className="userList">
      <DataGrid
       disableRowSelectionOnClick
        rows={data}
        columns={columns}
        checkboxSelection
      />
    </div>
  );
}
