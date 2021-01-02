// Components
import GlobalStyle from "./Components/GlobalStyle";
import Nav from "./Components/Nav";

// Pages
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

// Dependencies
import styled from "styled-components";

// Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <ContentWrapper>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/AboutMe" exact>
            <AboutMe />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Contact" exact>
            <Contact />
          </Route>
        </Switch>
      </ContentWrapper>
    </div>
  );
}

const ContentWrapper = styled.div`
  margin-left: 5rem;
  color: white;
`;

export default App;
