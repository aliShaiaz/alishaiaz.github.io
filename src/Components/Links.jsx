import React from "react";

const Links = ({link, text}) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
      >
        {text}
      </a>
    </>
  );
};

export default Links;
