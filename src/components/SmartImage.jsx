import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SmartImage.css";

export default function SmartImage({ src, alt = "", className = "" }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`smart-image ${loaded ? "loaded" : "loading"} ${className}`}
      onLoad={() => setLoaded(true)}
      loading="lazy"
    />
  );
}

SmartImage.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};
