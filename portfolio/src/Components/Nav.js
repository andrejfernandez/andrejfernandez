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
      <h1>
        <NavLink id="logo" to="/">
          {""}
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink
            className="icon"
            id="Home"
            to="/Home"
            activeStyle={selected1}
          >
            <div className="content-wrapper">
              <FontAwesomeIcon className="icon" icon={faHome} size="1x" />
              <h4>Home</h4>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="icon"
            id="AboutMe"
            to="/AboutMe"
            activeStyle={selected2}
          >
            <div className="content-wrapper">
              <FontAwesomeIcon className="icon" icon={faUser} size="1x" />
              <h4>About Me</h4>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="icon"
            id="Projects"
            to="/Projects"
            activeStyle={selected3}
          >
            <div className="content-wrapper">
              <FontAwesomeIcon className="icon" icon={faCode} size="1x" />
              <h4>Projects</h4>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="icon"
            id="Contact"
            to="/Contact"
            activeStyle={selected4}
          >
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

const selected1 = {
  background: "#161616",
  borderRadius: "20em",
  color: "#fcfd01",
};
const selected2 = {
  background: "#161616",
  borderRadius: "20em",
  color: "#01fffc",
};
const selected3 = {
  background: "#161616",
  borderRadius: "20em",
  color: "#00fe00",
};
const selected4 = {
  background: "#161616",
  borderRadius: "20em",
  color: "#ff02fb",
};

const StyledNav = styled.nav`
  min-height: 8vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 6rem;
  background: #1d1d1d;
  transition: 200ms ease;

  #logo {
    font-size: 2rem;
    font-weight: lighter;
  }

  ul {
    display: flex;
    list-style: none;
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
      color: #23d997;
    }
    #Home {
      color: #fcfd01;
    }
    #AboutMe {
      color: #01fffc;
    }
    #Projects {
      color: #00fe00;
    }
    #Contact {
      color: #ff02fb;
    }
  }
`;

export default Nav;
