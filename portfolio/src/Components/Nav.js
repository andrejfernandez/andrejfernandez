// Dependencies
import styled from "styled-components";
import { Link, BrowserRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} size="2x" />
          </Link>
        </li>
        <li>
          <Link to="/AboutMe">
            <FontAwesomeIcon icon={faUser} size="2x" />
          </Link>
        </li>
        <li>
          <Link to="/Projects">
            <FontAwesomeIcon icon={faCode} size="2x" />
          </Link>
        </li>
        <li>
          <Link to="/Contact">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  background: black;
  width: 5rem;
  height: 100vh;
  position: fixed;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li a {
    display: flex;
    align-items: center;
    height: 5rem;
    color: white;
    text-decoration: none;
  }
`;

export default Nav;
