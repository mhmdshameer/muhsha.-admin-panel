import { Fullscreen } from "@mui/icons-material";
import "./widgetSm.css";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="./img/avatar6.avif"
            alt="Staff img"
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Sarah Petals</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Fullscreen className="widgetSmIcon" />
            display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="./img/avatar2.avif"
            alt="Staff img"
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anjali Lakshmi</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Fullscreen className="widgetSmIcon" />
            display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="./img/avatar3.avif"
            alt="Staff img"
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Mathew Leaves</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Fullscreen className="widgetSmIcon" />
            display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="./img/avatar5.avif"
            alt="Staff img"
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Catherine Howls</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Fullscreen className="widgetSmIcon" />
            display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="./img/avatar4.avif"
            alt="Staff img"
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">William Needles</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Fullscreen className="widgetSmIcon" />
            display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
