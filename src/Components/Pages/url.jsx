import React from "react";

const URLs = ({ url, placeHolder }) => {
  return (
    <>
      <a href={url}>{placeHolder}</a>
    </>
  );
};

export default URLs;
