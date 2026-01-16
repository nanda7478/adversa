import React from "react";
const BenefitSection = () => {
    return (
       <>
         <section className="benefits-section">
    <div className="container">

       
        <div className="mb-5">
            <div className="benefits-badge mb-2">
                <i className="bi bi-gem"></i> BENEFITS
            </div>

            <h2 className="fw-bold mb-3">Why We Shine ?</h2>    
            <p className="text-muted" style={{maxWidth: "520px"}}>
                Leverage the power of AI to automatically optimize your purchases,
                ensuring you get the best value for your business with every transaction.
            </p>
        </div>

       
        <div className="row g-4">

            
            <div className="col-lg-4 col-md-6">
                <div className="benefit-card">
                    <div className="benefit-icon">
                        <i className="bi bi-currency-exchange"></i>
                    </div>
                    <h5>Instant Savings</h5>
                    <p>
                        Get immediate savings on every purchase, powered by AI to optimize
                        your transactions in real-time. No setup required, just seamless savings.
                    </p>
                </div>
            </div>


            <div className="col-lg-4 col-md-6">
                <div className="benefit-card">
                    <div className="benefit-icon">
                        <i className="bi bi-graph-up"></i>
                    </div>
                    <h5>Real-Time Insights</h5>
                    <p>
                        Access detailed spending reports and intelligent insights to make
                        smarter financial decisions. Stay informed with transparency at every step.
                    </p>
                </div>
            </div>


            <div className="col-lg-4 col-md-6">
                <div className="benefit-card">
                    <div className="benefit-icon">
                        <i className="bi bi-sliders"></i>
                    </div>
                    <h5>Flexible Plans</h5>
                    <p>
                        Choose customizable plans that adapt to your business's unique needs,
                        offering the flexibility to adjust as your requirements evolve.
                    </p>
                </div>
            </div>


            <div className="col-lg-4 col-md-6">
                <div className="benefit-card">
                    <div className="benefit-icon">
                        <i className="bi bi-shield-lock"></i>
                    </div>
                    <h5>Secure Transactions</h5>
                    <p>
                        Every transaction is protected with the latest encryption technology,
                        ensuring your business is always secure and your data safe.
                    </p>
                </div>
            </div>

            
            <div className="col-lg-4 col-md-6">
                <div className="benefit-card">
                    <div className="benefit-icon">
                        <i className="bi bi-gear"></i>
                    </div>
                    <h5>Adaptive Features</h5>
                    <p>
                        Enjoy automatic adjustments to your savings and plans, tailored to match
                        your business's spending patterns and goals.
                    </p>
                </div>
            </div>


            <div className="col-lg-4 col-md-6">
                <div className="benefit-card">
                    <div className="benefit-icon">
                        <i className="bi bi-headset"></i>
                    </div>
                    <h5>Dedicated Support</h5>
                    <p>
                        Access personalized assistance whenever you need it from our expert
                        support team, helping you make the most of your benefits.
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>

       </>
    );  
}
export default BenefitSection;