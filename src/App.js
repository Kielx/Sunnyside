import Hero from "./components/Hero";
import Section from "./components/Section";
import GraphicSection from "./components/graphicSection";

import section1ImageMobile from "./images/mobile/image-transform.jpg";
import section1Image from "./images/desktop/image-transform.jpg";
import section2ImageMobile from "./images/mobile/image-stand-out.jpg";
import section2Image from "./images/desktop/image-stand-out.jpg";
import section3ImageMobile from "./images/mobile/image-graphic-design.jpg";
import section3Image from "./images/desktop/image-graphic-design.jpg";
import section4ImageMobile from "./images/mobile/image-photography.jpg";
import section4Image from "./images/desktop/image-photography.jpg";

function App() {
  return (
    <>
      <Hero></Hero>
      <Section
        image={section1Image}
        imageMobile={section1ImageMobile}
        headerText="Transform your brand"
        text="          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you."
        decorationColor="hsl(51, 100%, 49%)"
      ></Section>
      <Section
        image={section2Image}
        imageMobile={section2ImageMobile}
        headerText="Stand out to the right audience"
        text="Using a collaborative formula of
        designers, researchers, photographers, videographers, and copywriters,
        we’ll build and extend your brand in digital places."
        decorationColor="#fd7867"
      ></Section>
      <GraphicSection
        image={section3Image}
        imageMobile={section3ImageMobile}
        headerText="Graphic design"
        text="Great design makes you memorable. We deliver
      artwork that underscores your brand message and captures potential
      clients’ attention."
        textColor="darkDesaturatedCyan"
      ></GraphicSection>
      <GraphicSection
        image={section4Image}
        imageMobile={section4ImageMobile}
        headerText="Photography "
        text="Increase your credibility by getting the most stunning,
        high-quality photos that improve your business image."
        textColor="darkBlue"
      ></GraphicSection>

      <div className="font-text">
        I Client testimonials We put our trust in Sunnyside and they delivered,
        making sure our needs were met and deadlines were always hit. Emily R.
        Marketing Director Sunnyside’s enthusiasm coupled with their keen
        interest in our brand’s success made it a satisfying and enjoyable
        experience. Thomas S. Chief Operating Officer Incredible end result! Our
        sales increased over 400% when we worked with Sunnyside. Highly
        recommended! Jennie F. Business Owner About Services Projects Contact
      </div>
    </>
  );
}

export default App;
