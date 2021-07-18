/* eslint-disable jsx-a11y/anchor-is-valid */
import TestimonialsCard from "./TestimonialsCard";
import clientImage1 from "../images/image-emily.jpg";
import clientImage2 from "../images/image-thomas.jpg";
import clientImage3 from "../images/image-jennie.jpg";

const Testimonials = ({ image, imageMobile, headerText, text, textColor }) => {
  return (
    <section className="md:py-24 md:flex md:flex-wrap lg:justify-center w-full">
      <h2
        className={`md:w-full md:pb-16 md:text-xl pt-16 pb-8 text-l mb-4 mx-auto text-center font-text text-display-grayishBlue font-extrabold uppercase tracking-widest`}
      >
        Client testimonials
      </h2>
      <TestimonialsCard
        clientImage={clientImage1}
        text="We put our trust in Sunnyside and they delivered, making sure our needs
        were met and deadlines were always hit."
        name="Emily R."
        position="Marketing Director"
      ></TestimonialsCard>
      <TestimonialsCard
        clientImage={clientImage2}
        text="Sunnyside’s enthusiasm coupled with their
        keen interest in our brand’s success made it a satisfying and enjoyable
        experience."
        name="Thomas S."
        position="Chief Operating Officer"
      ></TestimonialsCard>
      <TestimonialsCard
        clientImage={clientImage3}
        text="Incredible end result! Our
        sales increased over 400% when we worked with Sunnyside. Highly
        recommended!"
        name="Jennie F."
        position="Business Owner"
      ></TestimonialsCard>
    </section>
  );
};

export default Testimonials;
