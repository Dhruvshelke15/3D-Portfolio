import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import LinksBtn from './canvas/LinksBtn';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-secondary" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-secondary" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-secondary">Dhruv</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Websites, User <br className="sm:block hidden" />
            interfaces and Web Applications <br className="sm:block hidden" />
            Front-End enthusiast, Back-end connoisseur.
          </p>
          <div className="flex flex-col justify-left mt-5"></div>
          <div className="absolute xs: w-full justify-center">
            <LinksBtn />
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about"></a>
      </div>
    </section>
  );
};

export default Hero;
