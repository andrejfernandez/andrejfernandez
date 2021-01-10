// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faBuilding } from "@fortawesome/free-solid-svg-icons";

// Data
import timelineElements from "../Data/timelineElements";

// Plugin
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import Toggle from "./Toggle";
import { motion, AnimateSharedLayout } from "framer-motion";

// Style
import "../Styles/timeline.css";

const Timeline = () => {
  const schoolIconStyles = {
    background: " #fcfd01",
    color: "#000000",
    display: "flex",
    paddingRight: "1rem",
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
            icon={
              isSchoolIcon ? (
                <FontAwesomeIcon icon={faSchool} size="2x" />
              ) : (
                <FontAwesomeIcon icon={faBuilding} size="2x" />
              )
            }
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
