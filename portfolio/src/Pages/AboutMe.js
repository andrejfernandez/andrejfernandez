// Dependencies
import styled from "styled-components";
// Animation
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";
// Components
import Timeline from "../Components/Timeline";

const AboutMe = () => {
  return (
    <StyledAboutMe
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledContent>
        <h1>A little bit about myself...</h1>
        <p>
          I am currently in my senior year, persuing a B.A.S. in Computing
          Technology and Software Development from Valencia College.
        </p>
        <p>
          I spend a lot of my time coding either for class, or personal
          projects, and I very much enjoy learning a new language or framework.
        </p>

        <p>
          Below is a timeline showing relevant school and web courses that I
          have taken.
        </p>
      </StyledContent>
      <Timeline />
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled(motion.div)`
  margin-top: 2rem;
`;

const StyledContent = styled.div`
  text-align: center;
  margin: 0 2rem 2rem 2rem;

  h1 {
    margin-bottom: 1rem;
    color: #fcfd01;
  }
  p {
    font-size: 1.2rem;
    margin: 0 rem 0 2rem;
    line-height: 2rem;
  }
`;

export default AboutMe;
