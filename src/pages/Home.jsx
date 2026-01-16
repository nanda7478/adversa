import React from "react";
import HeroSection from "./HomeSection/HeroSection.jsx";
import AboutSection from "./HomeSection/AboutSection.jsx";
import WhyChooseSection from "./HomeSection/WhyChooseSection.jsx";
import BenefitSection from "./HomeSection/BenefitSection.jsx";
import ProcessSection from "./HomeSection/ProcessSection.jsx";
import ProductSection from "./HomeSection/ProductSection.jsx";
const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <WhyChooseSection />
            <BenefitSection />
            <ProcessSection />
            <ProductSection />
        </>
    );      
}
export default Home;