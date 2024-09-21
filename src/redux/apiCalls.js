import { loginStart, loginSuccess, loginFailure } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import { deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductStart } from "./productRedux";
import { getProductSuccess } from "./productRedux";
import { getProductFailure } from "./productRedux";

export const login = async (dispatch, user) =>{
    dispatch(loginStart());
    try{
      const res = await publicRequest.post("/auth/login",user);
      dispatch(loginSuccess(res.data));
    }catch(err){
      dispatch(loginFailure())
    }
};

export const getProduct = async (dispatch) =>{
  dispatch(getProductStart());
  try{
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  }catch(err){
    dispatch(getProductFailure())
  }
}

export const deleteProduct = async (id, dispatch) =>{
  dispatch(deleteProductStart());
  try{
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(res.data));
  }catch(err){
    dispatch(deleteProductFailure())
  }
}