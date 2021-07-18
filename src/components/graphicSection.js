/* eslint-disable jsx-a11y/anchor-is-valid */

/**
   * PurgeCSS:
   * order-1
   * order-2
   * md:order-1
   * md:order-2
   * text-display-darkDesaturatedCyan
   * text-display-darkBlue
   * text-blue-500
   * text-pink-500
   *

   */

const GraphicSection = ({
  image,
  imageMobile,
  headerText,
  text,
  textColor,
}) => {
  const checkScreenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  return (
    <section
      className="md:w-1/2 h-auto p-0 m-0 bg-cover bg-no-repeat pt-64 bg-top"
      style={{
        backgroundImage:
          checkScreenWidth > 768 ? `url(${image})` : `url(${imageMobile})`,
      }}
    >
      <div>
        <h2
          className={`xl:pt-72 lg:pt-48 md:pt-32 pt-20 pb-4 text-3xl mb-4 mx-auto text-center font-text text-display-${textColor} font-extrabold`}
        >
          {headerText}
        </h2>
        <p
          className={`lg:px-32 text-center text-display-${textColor} font-md font-semibold pb-16 px-4`}
        >
          {text}
        </p>
      </div>
    </section>
  );
};

export default GraphicSection;
