import React from "react";
const ProcessSection = () => {
    return (
        <>
           <section className="process-section">
    <div className="container">

        
        <div className="mb-5">
            <div className="process-badge mb-2">
                <i className="bi bi-gem"></i> PROCESS
            </div>

            <h2 className="fw-bold mb-3">Our Approach</h2>
            <p className="text-muted" style={{maxWidth: "520px"}}>
                Our streamlined process ensures quick, efficient results,
                from setup to completion. Enjoy clear steps and full transparency
                at every stage.
            </p>
        </div>

       
        <div className="row g-4">

            
            <div className="col-lg-4">
                <div className="process-card">
                    <span className="step-number">01</span>

                    <h5>Simplified Onboarding</h5>

                    <ul>
                        <li>Quick and easy setup for immediate use.</li>
                        <li>Step-by-step guidance for smooth onboarding.</li>
                        <li>No technical expertise required to get started.</li>
                    </ul>
                </div>
            </div>


            <div className="col-lg-4">
                <div className="process-card">
                    <span className="step-number">02</span>

                    <h5>AI-Powered Efficiency</h5>

                    <ul>
                        <li>Automatic savings on every transaction.</li>
                        <li>Real-time analytics to track spending.</li>
                        <li>Seamless adjustments to maximize savings.</li>
                    </ul>
                </div>
            </div>



            <div className="col-lg-4">
                <div className="process-card">
                    <span className="step-number">03</span>

                    <h5>Transparent Communication</h5>

                    <ul>
                        <li>Regular updates on progress and changes.</li>
                        <li>Clear terms with no hidden fees.</li>
                        <li>Dedicated support available at all stages.</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</section>

        </>
    );  
}
export default ProcessSection;