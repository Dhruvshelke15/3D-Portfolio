import React, { useEffect, useState } from 'react';
import '../../index.css';
import ResumePdf from 'C:/Users/Dhruv J/Desktop/3D Portfolio/src/assets/Dhruv Shelke Resume.pdf';

const LinksBtn = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = event => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  function gitVis() {
    var linkUrl = 'https://github.com/Dhruvshelke15';

    window.open(linkUrl, '_blank');
  }
  function linkVis() {
    var linkUrl = 'https://www.linkedin.com/in/dhruv-shelke-37347216b/';

    window.open(linkUrl, '_blank');
  }

  return (
    <div className="flex flex-row">
      <button
        type="submit"
        className="m-12 mt-20 bg-tertiary hover:bg-secondary hover:text-primary py-4 px-12 rounded-xl flex items-center outline-none w-fit text-white font-bold shadow-md shadow-primary transition duration-300 "
        onClick={gitVis}
      >
        Visit Github
      </button>

      <button
        type="submit"
        className="m-12 mt-20 bg-tertiary hover:bg-blue-500 hover:text-primary py-4 px-12 rounded-xl flex items-center outline-none w-fit text-white font-bold shadow-md shadow-primary transition duration-300"
        onClick={linkVis}
      >
        Visit LinkedIn
      </button>
      <a href={ResumePdf} download="Dhruv's Resume" target="_blank">
        <button
          type="submit"
          className="m-12 mt-20 bg-tertiary hover:bg-green-500 hover:text-primary py-4 px-12 rounded-xl flex items-center outline-none w-fit text-white font-bold shadow-md shadow-primary transition duration-300"
        >
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default LinksBtn;