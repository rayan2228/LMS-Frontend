import React from "react";

interface Source {
  srcSet: string;
  media?: string;
}

interface ImageProps {
  sources: Source[];
  alt: string;
  fallbackSrc?: string;
  className?: string;
  classNameImg?: string;
  style?: React.CSSProperties;
  width?: string | number;
  height?: string | number;
}

const Image: React.FC<ImageProps> = ({
  sources,
  alt,
  fallbackSrc,
  className,
  classNameImg,
  style,
  width = "auto",
  height = "auto",
}) => {
  return (
    <picture className={className} style={{ display: "block", ...style }}>
      {sources.map(({ srcSet, media }, index) => (
        <source key={index} srcSet={srcSet} media={media} />
      ))}
      <img
        src={fallbackSrc || `https://via.placeholder.com/${width}x${height}`}
        alt={alt}
        style={{
          display: "block",
          width: width,
          height: height,
          objectFit: "cover",
        }}
        className={classNameImg}
      />
    </picture>
  );
};

export default Image;
