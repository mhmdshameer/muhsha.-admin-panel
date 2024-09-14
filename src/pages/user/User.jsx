import {
  CalendarToday,
  LocationCityOutlined,
  MailOutline,
  PermIdentity,
  Publish,
  Smartphone,
} from "@mui/icons-material";
import "./user.css";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
       <Link to="/newUser">
        <button className="userAddButton">Create</button>
       </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="/img/avatar7.avif"
              alt="User dp"
              className="userShowImage"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck69</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">25.2.2001</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <Smartphone className="userShowIcon" />
              <span className="userShowInfoTitle">+91 9870231432</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck69@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationCityOutlined className="userShowIcon" />
              <span className="userShowInfoTitle">New york | USA </span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  value="annabeck69"
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  value="Anna Becker"
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  value="annabannabeck69@gmail.comeck69"
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  value="+91 9870231432"
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  value="New york | USA"
                  className="userUpdateInput"
                ></input>
              </div>
            </div>
            <div className="userUpdateRight"></div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="/img/avatar7.avif"
                  alt="uploaded"
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
