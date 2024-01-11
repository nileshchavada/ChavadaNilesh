import { ThemeProvider } from 'styled-components';
import { Theme } from './utils/Themes.js';
import Navbar from './components/page/Navbar.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/page/Home.js';
import Skills from './components/page/skills.js';
// import Projects from './components/page/project.js';
import Contact from './components/page/contact.js';
import Footer from './components/page/footer.js';
import Experience from './components/page/experience.js';
import Education from './components/page/education.js';
import styled from 'styled-components';

const Body = styled.div`
  background: ${({ theme }) => theme.bg};
  width: 100%;
  height: calc(100% - 1000px);
  overflow-x: hidden;
  font-family: ${({ theme }) => theme.montserrat};
`;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Navbar />
        <Body>
          <Home />
          <Skills />
          <Experience />
          <Education />
          {/* <Projects /> */}
          <Contact />
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
