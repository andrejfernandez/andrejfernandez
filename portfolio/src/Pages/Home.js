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
          <div className="top">
            <motion.h3 variants={titleAnim}>
              <span id="hi">Hi, </span>
              <span>my name is</span>
            </motion.h3>
          </div>
          <div className="bottom">
            <motion.h1 variants={nameAnim}>Andre</motion.h1>
          </div>
        </div>
      </Intro>
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
  overflow: hidden;
`;

const Intro = styled(motion.div)`
  display: flex;
  padding: 1rem;
  width: 35%;
  margin-top: 15rem;
  //margin-left: auto;
  margin-right: auto;
  //margin: auto;

  .ContentWrapper {
    position: fixed;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 100%;
    text-align: center;
    .top {
      h3 {
        font-size: 10vh;
        width: 100%;
        flex: 1;
      }
    }
    .bottom {
      h1 {
        color: #fcfd01;
        font-size: 15vh;
        width: 100%;
        flex: 2;
      }
    }
  }
`;

export default Home;
