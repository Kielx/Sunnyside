import React from "react";

const TestimonialsCard = ({ clientImage, text, name, position }) => {
  return (
    <div className="testimonialsCard lg:max-w-1/4 ">
      <img
        alt="Client"
        src={clientImage}
        className="rounded-full w-16 m-auto"
      ></img>
      <p
        className={`text-center text-display-darkBlue font-md font-semibold px-4 pt-8`}
      >
        {text}
      </p>
      <p
        className={`pt-8 pb-2 text-lmx-auto text-center font-text text-black font-extrabold `}
      >
        {name}
      </p>
      <p
        className={`pb-8 text-sm mb-4 mx-auto text-center font-display text-display-grayishBlue`}
      >
        {position}
      </p>
    </div>
  );
};

export default TestimonialsCard;
