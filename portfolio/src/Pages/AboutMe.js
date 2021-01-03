// Dependencies
import styled from "styled-components";
// Animation
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <StyledAboutMe
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Andre Fernandez</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sunt
        mollitia deserunt atque perferendis error reprehenderit explicabo
        pariatur magnam, tenetur veritatis consequuntur nisi, fugiat voluptate
        nobis possimus, consequatur architecto rem. Praesentium consectetur
        repudiandae saepe incidunt ducimus expedita amet ullam tenetur sit
        quaerat. Aliquid tenetur aliquam commodi exercitationem ex illo nemo
        voluptate quidem excepturi. Obcaecati accusamus vitae quae perspiciatis
        ipsa suscipit illum aperiam, molestiae natus, culpa qui voluptatem
        architecto commodi sunt adipisci excepturi ducimus minus provident
        magnam nemo et quasi? Temporibus totam assumenda, exercitationem tenetur
        dolore laborum non autem voluptatem recusandae perferendis quibusdam
        animi, facere eos ratione vero nam quo quod.
      </p>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled(motion.div)``;

export default AboutMe;
