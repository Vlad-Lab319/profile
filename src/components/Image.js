import React from "react";

const Image = ( {name} ) => {
  try {
    // Import image on demand
    const image = require(`../assets/img/screenshots/Screenshot_${name}.webp`);

    // console.log("image: ", image.default);
    // If the image doesn't exist. return null
    if (!image) return null;
    return <img src={image} alt={name}/>;
  } catch (error) {
    console.log(`Image with name "${name}" does not exist`);
    return null;
  }
};

export default Image;