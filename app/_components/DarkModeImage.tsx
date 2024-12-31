import "./dark-mode-image.css";

export interface DarkModeImagePropTypes {
  darkSrc: string;
  lightSrc: string;
  alt: string;
}

export default function DarkModeImage({
  darkSrc,
  lightSrc,
  alt,
}: DarkModeImagePropTypes) {
  return (
    <div
      className="dark-mode-image"
      role="img"
      aria-label={alt}
      style={
        {
          "--dark-src": `url(${darkSrc})`,
          "--light-src": `url(${lightSrc})`,
        } as React.CSSProperties
      }
    />
  );
}
