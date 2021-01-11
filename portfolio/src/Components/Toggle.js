import { useState } from "react";
import styled from "styled-components";

const Toggle = ({ children, title, subtitle }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <ToggleStyle layout onClick={() => setToggle(!toggle)}>
      <h3 layout className="vertical-timeline-element-title">
        {title}
      </h3>
      <h4 layout className="vertical-timeline-element-subtitle">
        {subtitle}
      </h4>
      {toggle ? children : ""}
    </ToggleStyle>
  );
};

const ToggleStyle = styled.div`
  padding: 0rem;
  cursor: pointer;
`;

export default Toggle;
