import HeroSection from "./main_component/HeroSection";
import ExpertiesSection from "./main_component/ExpertiesSection";
import PortfolioSection from "./main_component/PortfolioSection";
import ServiceSection from "./main_component/ServiceSection";


export default function Main() {
    return (
        <main>
            <div className="container">
                {/* hero */}
                <HeroSection />
                {/* experties */}
                <ExpertiesSection />
                {/* Portfolio */}
                <PortfolioSection />
                {/* service */}
                <ServiceSection />
            </div>
        </main>
    )
}