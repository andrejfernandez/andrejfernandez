// Dependencies
import styled from "styled-components";
// Animation
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Contact</h1>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)``;

export default Contact;
