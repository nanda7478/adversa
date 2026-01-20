import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const FaqSection = () => {
    return (
        <>
           <section className="faq-section">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div className="section-heading text-center wow animate__animated animate__fadeInUp">
						<div className="sub-heading-title"> <img src="images/sub-heading-logo.png" alt=""/>FAQ'S</div>
					<div className="heading-title">Got a quick question?</div>
					<p>We're here to help you make the right decision. Explore our frequently asked questions and find answers below.</p>
                </div>
				<div className="faq-box wow animate__animated animate__fadeInUp">
					<div className="faq-accordion" id="faqExample">
						<div className="card">
							<div className="card-header" id="heading11">
								<div className="card-header-title collapsed" data-bs-toggle="collapse" role="button" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">How does the platform ensure data accuracy? </div>
							</div>
							<div id="collapse11" className="collapse" aria-labelledby="heading11" data-bs-parent="#faqExample">
								<div className="card-body default-css">
								<p>How does the platform ensure data accuracy?</p>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-header" id="heading12">
								<div className="card-header-title collapsed" data-bs-toggle="collapse" role="button" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">How does the platform ensure data accuracy? </div>
							</div>
							<div id="collapse12" className="collapse" aria-labelledby="heading12" data-bs-parent="#faqExample">
								<div className="card-body default-css">
								<p>How does the platform ensure data accuracy?</p>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-header" id="heading13">
								<div className="card-header-title collapsed" data-bs-toggle="collapse" role="button" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">How does the platform ensure data accuracy? </div>
							</div>
							<div id="collapse13" className="collapse" aria-labelledby="heading13" data-bs-parent="#faqExample">
								<div className="card-body default-css">
								<p>How does the platform ensure data accuracy?</p>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-header" id="heading14">
								<div className="card-header-title collapsed" data-bs-toggle="collapse" role="button" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">How does the platform ensure data accuracy?</div>
							</div>
							<div id="collapse14" className="collapse" aria-labelledby="heading14" data-bs-parent="#faqExample">
								<div className="card-body default-css">
								<p>How does the platform ensure data accuracy?</p>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-header" id="heading15">
								<div className="card-header-title collapsed" data-bs-toggle="collapse" role="button" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">How does the platform ensure data accuracy? </div>
							</div>
							<div id="collapse15" className="collapse" aria-labelledby="heading15" data-bs-parent="#faqExample">
								<div className="card-body default-css">
								<p>How does the platform ensure data accuracy?</p>
								</div>
							</div>
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
export default FaqSection;