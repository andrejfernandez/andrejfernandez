// Style
import styled from "styled-components";
// Animation
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";
// Components
import CardList from "../Components/CardList";

const Projects = () => {
  return (
    <StyledProjects
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <CardList />
    </StyledProjects>
  );
};

const StyledProjects = styled(motion.div)`
  padding-top: 1rem;
  h1 {
    text-align: center;
    margin-bottom: 1rem;
    color: #fcfd01;
  }
`;

export default Projects;
