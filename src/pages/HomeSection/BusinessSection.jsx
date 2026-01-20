import React from "react";
const BusinessSection = () => {
    return (
        <>
           <section className="business-today-section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="section-heading text-center wow animate__animated animate__fadeInUp">
                            <figure><img src="images/business-today-logo.png" alt=""/></figure>
                        <div className="heading-title">Start Saving More and Streamlining Your Business Today.</div>
                            <p>Experience the power of automated savings and optimized spending. Get started now to boost your business efficiency and maximize returns.</p>
                            <div className="business-today-btn">
                                <a href="#" className="theme-btn btn-black" role="button"><img src="images/btn-arrow.png" alt=""/> Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default BusinessSection;