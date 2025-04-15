import LandingPage from "./pages/LandingPage"
import cvContext from "./context/cvContext"
import { useRef } from "react";
export default function App() {

  const sections = {
    home: useRef(null),
    experties: useRef(null),
    portfolio: useRef(null),
    service: useRef(null),
  };

  const navLink = [
    { id: 1, link: 'HOME', ref: sections.home },
    { id: 2, link: 'EXPERTIES', ref: sections.experties },
    { id: 3, link: 'PORTFOLIO', ref: sections.portfolio },
    { id: 4, link: 'SERVIZI', ref: sections.service },
  ];

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <cvContext.Provider value={{ navLink, sections, scrollToSection }}>
      <LandingPage />
      {/* <AccordionItem /> */}
    </cvContext.Provider>

  )
}