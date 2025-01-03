import React, { useState } from "react";

function Image({ src, alt, layout, objectFit, quality, style }) {
  const [loaded, setLoaded] = useState(false);

  // Simulate quality by using a high-resolution image
  const highQualitySrc = `${src}?q=${quality || 75}`;

  // Apply layout="fill" and objectFit="cover" styles
  const imageStyles = {
    position: layout === "fill" ? "absolute" : "static",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: objectFit || "cover",
    opacity: loaded ? 1 : 0,
    transition: "opacity 0.3s ease-in-out",
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", ...style }}>
      <img
        src={highQualitySrc}
        alt={alt}
        style={imageStyles}
        onLoad={() => setLoaded(true)}
        loading="lazy" // Native lazy loading
      />
      {!loaded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#f0f0f0", // Placeholder background
          }}
        />
      )}
    </div>
  );
}

export default Image;