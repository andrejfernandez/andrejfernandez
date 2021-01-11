// Dependencies
import styled from "styled-components";
import { NavLink } from "react-router-dom";
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
      {/* <h1>
        <NavLink id="logo" to="/">
          {""}
        </NavLink>
      </h1> */}
      <ul>
        <li>
          <NavLink to="/Home" activeClassName="Active">
            <div className="content-wrapper">
              <FontAwesomeIcon className="icon" icon={faHome} size="1x" />
              <h4>Home</h4>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/AboutMe" activeClassName="Active">
            <div className="content-wrapper">
              <FontAwesomeIcon className="icon" icon={faUser} size="1x" />
              <h4>About Me</h4>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Projects" activeClassName="Active">
            <div className="content-wrapper">
              <FontAwesomeIcon className="icon" icon={faCode} size="1x" />
              <h4>Projects</h4>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" activeClassName="Active">
            <div className="content-wrapper">
              <FontAwesomeIcon className="icon" icon={faEnvelope} size="1x" />
              <h4>Contact</h4>
            </div>
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

// Styling
const StyledNav = styled.nav`
  min-height: 3vh;
  //display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #1d1d1d;
  transition: 200ms ease;

  #logo {
    font-size: 2rem;
    font-weight: lighter;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: auto;
  }

  li {
    padding-left: 1rem;
    padding-right: 1rem;
    position: relative;
  }

  a {
    color: white;
    filter: greyscale(100%) opacity(0.7);
    text-decoration: none;
    display: flex;
    padding: 16px 16px;
  }

  .content-wrapper {
    display: flex;
    .icon {
      margin-right: 0.5em;
    }
  }

  li:hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.1);
    a {
      background: #161616;
      border-radius: 20em;
    }
  }

  // Active classes
  .Active {
    background: #161616;
    border-radius: 20em;
    .icon {
      color: #fcfd01;
    }
  }

  @media only screen and (max-width: 1250px) {
    h4 {
      display: none;
    }
  }
`;

export default Nav;
