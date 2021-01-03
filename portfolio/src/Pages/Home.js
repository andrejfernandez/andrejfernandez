// Dependencies
import styled from "styled-components";
// Animation
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <StyledHome
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >

      <motion.div>
        <motion.h3>
          <span id="hi">Hi, </span>
          <span>my name is</span>
        </motion.h3>
        <motion.h1>Andre</motion.h1>
      </motion.div>
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
  overflow: hidden;
`;

const Intro = styled(motion.div)`
  display: block;
  height: 80px;
  #hi {
    height: 80vh;
  }
`;


export default Home;
