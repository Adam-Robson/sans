import Footer from "@/_components/_footer/Footer";
import Header from "./_components/_header/Header";
import "./page.css";

export default function Home() {
  return (
    <div className="homepage">
      <div className="background"></div>
      <Header />
      <Footer />
    </div>
  );
}
