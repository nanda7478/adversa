import React from "react";

const AboutSection = () => {
    return (
        <>
         <section className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-7">
                        <div className="section-heading default-css wow animate__animated animate__fadeInLeft">
                            <div className="sub-heading-title"> <img src="images/sub-heading-logo.png" alt=""/>ABOUT US</div>
                            <div className="heading-title"> Get to Know AdsVersa</div>
                            <p>Welcome to AdsVersa — a results-focused digital marketing agency dedicated to helping businesses grow online. We are a team of 10+ experienced professionals, specialising in SEO, performance marketing, and data-driven digital solutions.</p>
                            <p>With a strong portfolio and proven success in New Zealand’s competitive markets, our goal is simple:</p>
                            <p>deliver measurable growth, transparent reporting, and long-term digital success for your brand.</p>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="about-img wow animate__animated animate__fadeInRight">
                            <figure><img src="images/about-img.png" alt=""/></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );  
}
export default AboutSection;