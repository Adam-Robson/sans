import Footer from "@/_components/_footer/Footer";
import Header from "./_components/_header/Header";
import "./page.css";
import { sourceCode } from "./_fonts/fonts";

export default function Home() {
  return (
    <div className="homepage">
      <div className="background"></div>
      <Header />
      <div className="content">
        <div className="welcome-text-container">
          <p className={`${sourceCode.className} welcome-text`}>
            le fog is a band from the pacific northwest. they make melodic,
            psychedelic & fuzzy music that is original work. listen by clicking
            the speaker icon below or visit the music page!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
