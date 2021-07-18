import Hero from "./components/Hero";
import Section from "./components/Section";
import GraphicSection from "./components/graphicSection";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import section1ImageMobile from "./images/mobile/image-transform.jpg";
import section1Image from "./images/desktop/image-transform.jpg";
import section2ImageMobile from "./images/mobile/image-stand-out.jpg";
import section2Image from "./images/desktop/image-stand-out.jpg";
import section3ImageMobile from "./images/mobile/image-graphic-design.jpg";
import section3Image from "./images/desktop/image-graphic-design.jpg";
import section4ImageMobile from "./images/mobile/image-photography.jpg";
import section4Image from "./images/desktop/image-photography.jpg";
import Testimonials from "./components/Testimonials";

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
        learnMore="learnMoreYellow"
        order={[2, 1]}
      ></Section>

      <Section
        image={section2Image}
        imageMobile={section2ImageMobile}
        headerText="Stand out to the right audience"
        text="Using a collaborative formula of
        designers, researchers, photographers, videographers, and copywriters,
        we’ll build and extend your brand in digital places."
        learnMore="learnMoreRed"
        order={[1, 2]}
      ></Section>
      <div className="cont md:flex">
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
      </div>
      <Testimonials></Testimonials>
      <Gallery></Gallery>
      <Footer></Footer>
    </>
  );
}

export default App;
