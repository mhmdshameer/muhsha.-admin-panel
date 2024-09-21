import "./productList.css";
import { Delete, Edit } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProduct } from "../../redux/apiCalls";

export default function ProductList() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    getProduct(dispatch);
  }, [dispatch]);
  
  const products = useSelector((state) => state.product.products);
  console.log(products)


  const handleDelete = (id) => {

  };
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img src={params.row.img} alt="" className="productListImage" />
            {params.row.title}
          </div>
        );
      },
    },

    {
      field: "inStock",
      headerName: "Stock",
      width: 150,
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
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="button edit">
                {" "}
                <Edit />{" "}
              </button>
            </Link>
            <button
              className="button delete"
              onClick={() => handleDelete(params.row.id)}
            >
              {" "}
              <Delete />{" "}
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="productList">
        <DataGrid
          disableRowSelectionOnClick
          rows={products}
          columns={columns}
          getRowId={(row) => row._id}
          checkboxSelection
        />
      </div>
    </div>
  );
}
