// Components
import GlobalStyle from "./Components/GlobalStyle";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

// Pages
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

// Dependencies
import styled from "styled-components";
// Animation
import { AnimatePresence } from "framer-motion";
// Router
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <MainWrapper>
          <Switch location={location} key={location.pathname}>
            <Route path="/Home" exact>
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
        </MainWrapper>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;

const MainWrapper = styled.div`
  margin-top: 1rem;
  overflow: hidden;
`;
