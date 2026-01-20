import React from "react";

const PricingSection = () => {
    return (
        <>
           <section className="ticket-register-section">
	<div className="container">
		<div className="row">
			<div className="col-sm-12">
				<div className="section-heading text-center wow animate__animated animate__fadeInDown">
						<div className="sub-heading-title"> <img src="images/sub-heading-logo.png" alt=""/>PRICING</div>
					<div className="heading-title">Choose the Perfect Plan</div>
					<p>We offer flexible pricing plans that align with where your business stands today and where it's headed.</p>
				</div>
			</div>
		</div>
		<div className="ticket-register-row wow animate__animated animate__fadeInUp" data-wow-delay="100ms">
			<div className="row">
				<div className="col-sm-4">
					<div className="ticket-card default-css">
						<p> <b> Starter Plan</b></p>
							<h3>$99/month</h3>
							<p>Ideal for small businesses looking to streamline savings and boost efficiency effortlessly</p>
							<ul>
								<li>Core AI-powered savings features</li>
								<li>Real-time spending insights</li>
								<li>Basic customer support via email</li>
								<li>Access to standard reporting tools</li>
								<li>Monthly plan adjustments</li>
								<li>No long-term commitments</li>
							</ul>
							<div className="ticket-action">
							<a href="#" className="theme-btn btn-black" role="button"><img src="images/btn-arrow.png" alt=""/> Get Adversa</a>
							<p><i>*No commitment- cancel anytime*</i></p>
							</div>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="ticket-card default-css">
						<p> <b> Pro Plan</b></p>
							<h3>$199/month</h3>
							<p>Designed for growing teams that need advanced tools to maximize value and performance.</p>
							<ul>
								<li>Advanced AI optimization</li>
								<li>Detailed analytics</li>
								<li>Priority support via chat and email</li>
								<li>Flexible, customizable plan options</li>
								<li>Multi-user access for teams</li>
								<li>Monthly performance reviews</li>
							</ul>
							<div className="ticket-action">
							<a href="#" className="theme-btn btn-black" role="button"><img src="images/btn-arrow.png" alt=""/> Get Adversa</a>
							<p><i>*No commitment- cancel anytime*</i></p>
							</div>
							<div className="most-popular">MOST POPULAR</div>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="ticket-card default-css">
						<p> <b> Enterprise Plan</b></p>
						<h3>$299/month</h3>
						<p>Perfect for large organizations seeking tailored solutions with dedicated support and features.</p>
						<ul>
							<li>Tailored solutions for large-scale</li>
							<li>Dedicated account manager</li>
							<li>Full access to all premium features</li>
							<li>Enterprise-level security</li>
							<li>Customized analytics dashboards</li>
							<li>24/7 priority customer support</li>
						</ul>
						<div className="ticket-action">
						<a href="#" className="theme-btn btn-black" role="button"><img src="images/btn-arrow.png" alt=""/> Get Adversa</a>
						<p><i>*No commitment- cancel anytime*</i></p>
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
export default PricingSection;