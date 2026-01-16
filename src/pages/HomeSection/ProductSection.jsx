import React from "react";
const ProductSection = () => {
    return (
        <>
          <section className="product-features-section">
    <div className="container">

       
        <div className="row align-items-center feature-row mb-5">
            <div className="col-lg-6">
                <span className="feature-badge">
                    <i className="bi bi-gem"></i> PRODUCT
                </span>
                <h3 className="feature-title mt-2">AI-Driven Savings</h3>
                <p className="feature-desc">
                    Save more on every purchase with AI-powered optimization that ensures
                    you get the best possible value for your business, automatically.
                </p>
                <a href="#" className="btn feature-btn">
                    <i className="bi bi-arrow-up-right"></i> Get Started
                </a>
            </div>

            <div className="col-lg-6 text-center">
                <div className="feature-image">
                    <img src="feature-1.svg" className="img-fluid" alt="" />
                </div>
            </div>
        </div>

       
        <div className="row align-items-center feature-row flex-lg-row-reverse mb-5">
            <div className="col-lg-6">
                <span className="feature-badge">
                    <i className="bi bi-gem"></i> PRODUCT
                </span>
                <h3 className="feature-title mt-2">Real-Time Insights</h3>
                <p className="feature-desc">
                    Track your spending with detailed analytics and real-time updates,
                    giving you full transparency and control over every transaction.
                </p>
                <a href="#" className="btn feature-btn">
                    <i className="bi bi-arrow-up-right"></i> Get Started
                </a>
            </div>

            <div className="col-lg-6 text-center">
                <div className="feature-image">
                    <img src="feature-2.svg" className="img-fluid" alt="" />
                </div>
            </div>
        </div>

        
        <div className="row align-items-center feature-row">
            <div className="col-lg-6">
                <span className="feature-badge">
                    <i className="bi bi-gem"></i> PRODUCT
                </span>
                <h3 className="feature-title mt-2">Customizable Plans</h3>
                <p className="feature-desc">
                    Choose flexible plans designed to grow with your business, offering
                    personalized options that adapt to meet your unique needs.
                </p>
                <a href="#" className="btn feature-btn">
                    <i className="bi bi-arrow-up-right"></i> Get Started
                </a>
            </div>

            <div className="col-lg-6 text-center">
                <div className="feature-image">
                    <img src="feature-3.svg" className="img-fluid" alt="" />
                </div>
            </div>
        </div>

    </div>
</section>

        </>
    );
}
export default ProductSection;