// Dependencies
import styled from "styled-components";
// Animation
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";
// Components
import ContactMe from "../Components/ContactMe";

const Contact = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Send me a message...</h1>
      <ContactMe />
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  margin: 0 2rem 2rem 2rem;

  h1 {
    margin-bottom: 1rem;
    color: #fcfd01;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export default Contact;
