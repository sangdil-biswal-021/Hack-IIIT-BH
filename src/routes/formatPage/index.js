import React from "react";
import classes from "../formatPage/index.module.css";


import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import myImg from './img/marker.png';
import user from './img/users-alt.png';
import phoneCall from './img/phone-call.png';
import checkedImg from './img/checked.png';
import styles from './index.module.css';
import "react-vertical-timeline-component/style.min.css";

const CustomIcon = ({ icon }) => {
  return <img src={icon} alt="Timeline Icon" className={styles.img}  />;
};
const FormatSpace = () => {
  return (
    <>
      <VerticalTimeline>
        {/* ist */}

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2e020c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #f5cf76" }}
          date="August 1"
          iconStyle={{ background: "#f20c42", color: "#000", display: "flex", padding:"10px" ,scale:"80%"}}

          icon={<CustomIcon icon={myImg} />}
        >
          <h3 className={classes.verticalTimelineElementTitle}>Round 1</h3>
          <p className={classes.verticalTimelineElementP}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </VerticalTimelineElement>

        {/* 2nd */}

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2e020c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #f5cf76" }}
          date="August 10"
          iconStyle={{ background: "#f20c42", color: "#000", display: "flex", padding:"10px" ,scale:"80%"}}
          icon={<CustomIcon icon={user} />}
        >
          <h3 className={classes.verticalTimelineElementTitle}>
            Idea submission deadline
          </h3>
          <p className={classes.verticalTimelineElementP}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </VerticalTimelineElement>

        {/* 3rd */}

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2e020c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #f5cf76" }}
          date="August 12"
          iconStyle={{ background: "#f20c42", color: "#000", display: "flex", padding:"15px" ,scale:"80%"}}
          icon={<CustomIcon icon={phoneCall} />}
        >
          <h3 className={classes.verticalTimelineElementTitle}>
            Round 1 Result Declaration
          </h3>
          <p className={classes.verticalTimelineElementP}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </VerticalTimelineElement>

        {/* 4th */}

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2e020c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #f5cf76" }}
          date="september 7"
          iconStyle={{ background: "#f20c42", color: "#000", display: "flex", padding:"15px" ,scale:"80%"}}
          icon={<CustomIcon icon={phoneCall} />}
        >
          <h3 className={classes.verticalTimelineElementTitle}>
            Offline Inauguration
          </h3>
          <p className={classes.verticalTimelineElementP}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </VerticalTimelineElement>

        {/* 5th */}

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2e020c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #f5cf76" }}
          date="September 8 - September 9"
          iconStyle={{ background: "#f20c42", color: "#000", display: "flex", padding:"15px" ,scale:"80%"}}
          icon={<CustomIcon icon={phoneCall} />}
        >
          <h3 className={classes.verticalTimelineElementTitle}>
            Offline Hackathon
          </h3>
          <p className={classes.verticalTimelineElementP}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </VerticalTimelineElement>

        {/* 6th */}

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2e020c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #f5cf76" }}
          date="September 10"
          iconStyle={{ background: "#f20c42", color: "#000", display: "flex", padding:"10px" ,scale:"80%"}}
          icon={<CustomIcon icon={checkedImg} />}
        >
          <h3 className={classes.verticalTimelineElementTitle}>
            Result declaration and Prize Distribution
          </h3>
          <p className={classes.verticalTimelineElementP}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

const Format = () => {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.mainText}>
          <h1>HACKATHON EVENTS</h1>
        </div>
        
          <FormatSpace />
        
      </div>
    </>
  );
};

export default Format;
