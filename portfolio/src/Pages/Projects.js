// Dependencies
import styled from "styled-components";
// Animation
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <StyledProjects
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Projects</h1>
    </StyledProjects>
  );
};

const StyledProjects = styled(motion.div)``;

export default Projects;
