import React from "react";

const Icon = ({ name, logoProps }) => {
  try {
    // Import image on demand
    const image = require(`../assets/img/svg/${name}.svg`);
    const svgImg = `../assets/img/svg/${name}.svg`;

    // If the image doesn't exist. return null
    if (!image) return null;
    return <img src={image} alt={name} height={logoProps.height} width={logoProps.width} fill={logoProps.color} />;
  } catch (error) {
    console.log(`Image with name "${name}" does not exist`);
    return null;
  }
};

export default Icon;