import React from "react";
const ProcessSection = () => {
    return (
        <>
          <section className="why-we-shine-section proces">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div className="section-heading default-css wow animate__animated animate__fadeInUp">
                    <div className="sub-heading-title"> <img src="images/sub-heading-logo.png" alt=""/>PROCESS</div>
                    <div className="heading-title">Our Approach</div>
					<p>Our streamlined process ensures quick, efficient results, from setup to completion. Enjoy clear steps and full transparency at every stage.</p>
                </div>
            </div>
        </div>
		<div className="why-we-shine-row">
			<div className="row">
				<div className="col-sm-4 wow animate__animated animate__fadeInUp" data-wow-delay="0ms">
					<div className="why-we-shine-box default-css">
						<div className="count">01</div>
						<h3>Simplified Onboarding</h3>
						<ul>
							<li>Quick and easy setup for immediate use.</li>
							<li>Step-by-step guidance for smooth integration.</li>
							<li>No technical expertise required to get started.</li>
						</ul>
					</div>
				</div>
				<div className="col-sm-4 wow animate__animated animate__fadeInUp" data-wow-delay="100ms">
					<div className="why-we-shine-box default-css">
						<div className="count">02</div>
						<h3>AI-Powered Efficiency</h3>
						<ul>
							<li>Automatic savings on every transaction.</li>
							<li>Real-time analytics to track spending.</li>
							<li>Seamless adjustments to maximize savings.</li>
						</ul>
					</div>
				</div>
				<div className="col-sm-4 wow animate__animated animate__fadeInUp" data-wow-delay="200ms">
					<div className="why-we-shine-box default-css">
						<div className="count">03</div>
						<h3>Transparent Communication</h3>
						<ul>
							<li>Regular updates on progress and changes.</li>
							<li>Clear terms and no hidden fees.</li>
							<li>Dedicated support available at all stages.</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
    </div>
</section>

        </>
    );  
}
export default ProcessSection;