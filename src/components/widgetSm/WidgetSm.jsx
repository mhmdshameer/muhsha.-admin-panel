import { Fullscreen } from "@mui/icons-material";
import "./widgetSm.css";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
 const getUsers = async()=>{
    try{
      const res = await userRequest.get("users/?new=true")
      setUsers(res.data);
    }catch(err){
  }
 }
 getUsers();
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
      {users.map( user =>(

        <li className="widgetSmListItem" key={user._id}>
          <img
            src={user.img || "/img/noAvatar.avif"}
            alt="Staff img"
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Fullscreen className="widgetSmIcon" />
            display
          </button>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
