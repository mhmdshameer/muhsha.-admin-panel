import { Assessment, Equalizer, Feedback, Home,  Mail, Message, Payments, Person, Report, Storefront, Timeline, TrendingUp, Visibility } from "@mui/icons-material";
import "./sidebar.css";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
      <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem active">
                    <Home className="sidebarIcon" />
                    Home
                </li>
                <li className="sidebarListItem">
                    <Timeline className="sidebarIcon" />
                    Analytics
                </li>
                <li className="sidebarListItem">
                    <TrendingUp className="sidebarIcon" />
                    Sales
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem ">
                    <Person className="sidebarIcon" />
                    Users
                </li>
                <li className="sidebarListItem">
                    <Storefront className="sidebarIcon" />
                    Products
                </li>
                <li className="sidebarListItem">
                    <Payments className="sidebarIcon" />
                    Transactions
                </li>
                <li className="sidebarListItem">
                    <Equalizer className="sidebarIcon" />
                    Reports
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notification</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem ">
                    <Mail className="sidebarIcon" />
                    Mail
                </li>
                <li className="sidebarListItem">
                    <Feedback className="sidebarIcon" />
                    Feedback
                </li>
                <li className="sidebarListItem">
                    <Message className="sidebarIcon" />
                    Messages
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem ">
                    <Visibility className="sidebarIcon" />
                    Manage
                </li>
                <li className="sidebarListItem">
                    <Assessment className="sidebarIcon" />
                    Analytics
                </li>
                <li className="sidebarListItem">
                    <Report className="sidebarIcon" />
                    Reports
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}
