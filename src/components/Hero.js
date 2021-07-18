import Navbar from "./Navbar";
import headerImageMobile from "../images/mobile/image-header.jpg";
import headerImage from "../images/desktop/image-header.jpg";

const Hero = () => {
  const checkScreenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  return (
    <div
      className="md:bg-center md:h-screen app bg-bottom w-full h-auto p-0 m-0 pb-28 font-display text-white bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          checkScreenWidth > 768
            ? `url(${headerImage})`
            : `url(${headerImageMobile})`,
      }}
    >
      <Navbar></Navbar>
      <h1 className="md:pt-6 md:pb-24 md:text-5xl text-3xl mb-4 mx-auto text-center font-text uppercase text-white tracking-widest">
        We are creatives{" "}
      </h1>
      <svg
        className="m-auto"
        width="36"
        height="114"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          stroke="#FFF"
          strokeWidth="6"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 3v100M3 95.484l15 15 15-15" />
        </g>
      </svg>
    </div>
  );
};

export default Hero;
