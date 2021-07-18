/* eslint-disable jsx-a11y/anchor-is-valid */

const Section = ({
  image,
  imageMobile,
  headerText,
  text,
  decorationColor,
  order,
}) => {
  const checkScreenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  return (
    <section className="md:flex w-full h-auto p-0 m-0">
      <img
        src={checkScreenWidth > 768 ? image : imageMobile}
        alt="section header image"
        aria-hidden="true"
        className={`md:order-${order[0]}`}
      ></img>
      <div className={`md:order-${order[1]}`}>
        <h2 className="md:pt-40 md:px-48 md:text-left pt-14 pb-6 text-3xl mb-4 mx-auto text-center font-text text-black font-extrabold">
          {headerText}
        </h2>
        <p className="md:pl-48 md:pr-24 md:text-left text-center text-display-darkModerateCyan font-md font-semibold px-4">
          {text}
        </p>
        <h3
          className="md:pl-48 md:pt-12 md:text-left text-center uppercase font-extrabold font-text text-md pt-6 pb-16"
          style={{
            textDecoration: "underline",
            textDecorationThickness: "50%",
            textUnderlineOffset: "-3px",
            textDecorationColor: decorationColor,
          }}
        >
          <a href="#">Learn More</a>
        </h3>
      </div>
    </section>
  );
};

export default Section;
