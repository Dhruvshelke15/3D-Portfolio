import React, { useEffect, useState } from 'react';
import '../../index.css';
import ResumePdf from '../../assets/Dhruv Shelke Resume.pdf';

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

  function openInNewTab(url) {
    window.open(url, '_blank');
  }

  return (
    <div className={`flex flex-row ${isMobile ? 'flex-wrap' : ''}`}>
      <button
        type="button"
        className={`m-2 mt-2 md:m-2 md:mt-2 bg-tertiary hover:bg-secondary hover:text-primary py-2 px-6 md:py-4 md:px-6 rounded-xl flex items-center outline-none text-white font-bold shadow-md shadow-primary transition duration-300 `}
        onClick={() => openInNewTab('https://github.com/Dhruvshelke15')}
      >
        Visit Github
      </button>

      {isMobile ? (
        <div className="m-2">
          <button
            type="button"
            className="bg-tertiary hover:bg-blue-500 hover:text-primary py-2 px-6 rounded-xl flex items-center outline-none text-white font-bold shadow-md shadow-primary transition duration-300"
            onClick={() =>
              openInNewTab(
                'https://www.linkedin.com/in/dhruv-shelke-37347216b/'
              )
            }
          >
            LinkedIn
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="m-2 mt-2 md:m-2 md:mt-2 bg-tertiary hover:bg-blue-500 hover:text-primary py-2 px-6 rounded-xl flex items-center outline-none text-white font-bold shadow-md shadow-primary transition duration-300"
          onClick={() =>
            openInNewTab('https://www.linkedin.com/in/dhruv-shelke-37347216b/')
          }
        >
          Visit LinkedIn
        </button>
      )}

      <a href={ResumePdf} download="Dhruv's Resume" target="_blank">
        <button
          type="button"
          className={`m-2 mt-2 md:m-2 md:mt-2 bg-tertiary hover:bg-green-500 hover:text-primary py-2 px-6 md:py-4 md:px-6 rounded-xl flex items-center outline-none text-white font-bold shadow-md shadow-primary transition duration-300`}
        >
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default LinksBtn;
