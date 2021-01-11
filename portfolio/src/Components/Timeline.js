// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faBuilding } from "@fortawesome/free-solid-svg-icons";

// Data
import timelineElements from "../Data/timelineElements";

// Vertical Timeline
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Components
import Toggle from "./Toggle";

// Style
import "../Styles/timeline.css";

import { ReactComponent as SchoolIcon } from "../Images/school.svg";

const Timeline = () => {
  const schoolIconStyles = {
    background: "#fcfd01",
    color: "black",
  };
  const workIconStyles = { background: "#fcfd01" };
  return (
    <VerticalTimeline>
      {timelineElements.map((element) => {
        const isSchoolIcon = element.icon === "school";
        return (
          <VerticalTimelineElement
            key={element.key}
            date={element.date}
            dateClassName="date"
            iconStyle={isSchoolIcon ? schoolIconStyles : workIconStyles}
            icon={<SchoolIcon />}
          >
            <Toggle title={element.title} subtitle={element.location}>
              <p id="description">{element.description}</p>
              <p id="tech"># {element.tech}</p>
            </Toggle>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
