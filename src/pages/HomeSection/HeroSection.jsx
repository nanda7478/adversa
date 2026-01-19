import React from "react";
const HeroSection = () => {
    return (
        <>
          <section className="hero-section" style={{ backgroundImage: "url(images/hero-banner.png)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="banner-caption-left text-center wow animate__animated animate__fadeInUp">
                            <div className="banner-caption">
                                <div className="banner-count">
                                    <div className="banner-subtitle">Trusted by 50+ businesses worldwide</div>
                                    <div className="banner-title">Grow Your Business with Results-Driven SEO & Digital Marketing</div>
                                    <p>Maximize savings with Adversa , The digital Marketing business card that optimizes every purchase, giving you unmatched value effortlessly </p>
                                </div>
                                <div className="banner-btns">
                                    <a href="#" className="theme-btn btn-yellow">Get a Free SEO Audit</a>
                                    <a href="#" className="theme-btn btn-black"><img src="images/btn-arrow.png" alt="" /> Get Started</a>
                                </div>
                                <div className="default-css">
                                    <p><i> Put more revenue back into your business — with strategies that actually work.</i></p>
                                    <figure><img src="images/drop-arrow.png" alt=""/></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
        </>
    );
}
export default HeroSection;