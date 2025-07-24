// import Context
import { useContext } from "react";
import cvContext from "../context/cvContext";

// import Sections
import HeroSection from "./main_component/HeroSection";
import ListSection from "./main_component/ListSection";
import PortfolioSection from "./main_component/PortfolioSection";
import ServiceSection from "./main_component/ServiceSection";

// import Data
import expertiesData from "../data/ExpertiesData";
import educationData from "../data/EducationData";
import Banner from "./main_component/Banner";

export default function Main() {

    const { navLink } = useContext(cvContext);



    //render
    return (
        <main>
            {/* hero */}
            <HeroSection />
            {/* experties */}
            <ListSection data={expertiesData} />
            {/* education */}
            <Banner position='end' element={navLink.find(element => element.link === 'EDUCATION')} />
            <ListSection data={educationData} />
            {/* Portfolio */}
            <Banner position='' element={navLink.find(element => element.link === 'PORTFOLIO')} />
            <PortfolioSection />
            {/* service */}
            <Banner position='end' element={navLink.find(element => element.link === 'SERVIZI')} />
            <ServiceSection />
        </main>
    )
}