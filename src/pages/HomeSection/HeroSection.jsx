import React from "react";
const HeroSection = () => {
    return (
        <>
          
<section class="hero-section">
    <div class="container position-relative">
        <div class="row justify-content-center text-center">
            <div class="col-lg-8">

                <span class="badge rounded-pill bg-success-subtle text-success px-3 py-2 mb-3">
                    Trusted by 50+ businesses worldwide
                </span>

                <h1 class="fw-bold mt-3">
                    Grow Your Business with <br/>
                    <span>Result-Driven SEO & Digital Marketing</span>
                </h1>

                <p class="text-muted mt-3">
                    We get businesses more from their digital marketing.
                </p>

                <a href="#" class="btn btn-success btn-lg mt-3 px-5">Contact</a>

                <div class="scroll-down mt-4">
                    <i class="bi bi-chevron-down"></i>
                </div>

            </div>
        </div>

       
        <div class="hero-icon left-icon">
            <i class="bi bi-globe fs-1"></i>
        </div>

        <div class="hero-icon right-icon">
            <i class="bi bi-bar-chart-line fs-1"></i>
        </div>
    </div>
</section>
        </>
    );
}
export default HeroSection;