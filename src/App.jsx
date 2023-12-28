import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  Education,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from './components';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary overflow-hidden">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Education />
          <Experience />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
