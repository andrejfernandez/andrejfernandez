// Dependencies
import styled from "styled-components";
// Animation
import { pageAnimation, titleAnim, nameAnim } from "../animation";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <StyledHome
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Intro>
        <div className="ContentWrapper">
          <motion.h3 variants={titleAnim}>
            <span id="hi">Hi, </span>
            <span>my name is</span>
          </motion.h3>
          <motion.h1 variants={nameAnim}>Andre</motion.h1>
        </div>
      </Intro>
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
  overflow: hidden;
`;

const Intro = styled(motion.div)`
  padding: 0;
  margin: 0;
  margin-top: 10rem;
  margin-bottom: 10rem;
  .ContentWrapper {
    width: 100%;
    text-align: center;

    h3 {
      font-size: 8em;
    }
    h1 {
      color: #fcfd01;
      font-size: 13em;
    }
  }
`;

export default Home;
