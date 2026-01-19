import React from "react";
import HeroSection from "./HomeSection/HeroSection.jsx";
import AboutSection from "./HomeSection/AboutSection.jsx";
import WhyChooseSection from "./HomeSection/WhyChooseSection.jsx";
import BenefitSection from "./HomeSection/BenefitSection.jsx";
import ProcessSection from "./HomeSection/ProcessSection.jsx";
import ProductSection from "./HomeSection/ProductSection.jsx";
import PricingSection from "./HomeSection/PricingSection.jsx";
import ScheduleSection from "./HomeSection/ScheduleSection.jsx";
const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <WhyChooseSection />
            <BenefitSection />
            <ProcessSection />
            <ProductSection />
            <PricingSection />
            <ScheduleSection />
        </>
    );      
}
export default Home;