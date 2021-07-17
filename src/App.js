/* eslint-disable jsx-a11y/anchor-is-valid */
import Header from "./components/header";
import headerImage from "./images/image-header.jpg";
import eggImage from "./images/image-transform.jpg";

function App() {
  return (
    <>
      <div
        className="app bg-center w-full h-auto p-0 m-0 pb-28 font-display text-white bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <Header></Header>
        <div className="text-3xl mb-4 mx-auto text-center font-text uppercase text-white tracking-widest">
          We are creatives{" "}
        </div>
        <svg
          className="m-auto"
          width="36"
          height="114"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="#FFF"
            stroke-width="6"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 3v100M3 95.484l15 15 15-15" />
          </g>
        </svg>
      </div>
      <img src={eggImage}></img>
      <div className="font-text">
        Transform your brand We are a full-service creative agency specializing
        in helping brands grow fast. Engage your clients through compelling
        visuals that do most of the marketing for you. Learn more Stand out to
        the right audience Using a collaborative formula of designers,
        researchers, photographers, videographers, and copywriters, we’ll build
        and extend your brand in digital places. Learn more Graphic design Great
        design makes you memorable. We deliver artwork that underscores your
        brand message and captures potential clients’ attention. Photography
        Increase your credibility by getting the most stunning, high-quality
        photos that improve your business image. Client testimonials We put our
        trust in Sunnyside and they delivered, making sure our needs were met
        and deadlines were always hit. Emily R. Marketing Director Sunnyside’s
        enthusiasm coupled with their keen interest in our brand’s success made
        it a satisfying and enjoyable experience. Thomas S. Chief Operating
        Officer Incredible end result! Our sales increased over 400% when we
        worked with Sunnyside. Highly recommended! Jennie F. Business Owner
        About Services Projects Contact
      </div>
    </>
  );
}

export default App;
