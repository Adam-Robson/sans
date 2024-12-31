import Navigation from "./Navigation";
// import DarkModeImage from "@/_components/DarkModeImage";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <Navigation />
      {/* <DarkModeImage
        darkSrc="/images/subtitle_drk.svg"
        lightSrc="/images/subtitle_lt.svg"
        alt="le fog subtitle"
      /> */}
    </header>
  );
}
