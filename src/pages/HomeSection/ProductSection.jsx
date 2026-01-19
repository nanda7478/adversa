import React from "react";
const ProductSection = () => {
    return (
        <>
       <section className="product-section">
    <div className="container">
        <div className="product-row">
			<div className="row wow animate__animated animate__fadeInUp">
				<div className="col-sm-7">
					<div className="section-heading default-css ">
						<div className="sub-heading-title"> <img src="images/sub-heading-logo.png" alt=""/>PRODUCT</div>
						<div className="heading-title">AI-Driven Savings</div>
						<p>Save more on every purchase with AI-powered optimization that ensures you get the best possible value for your business, automatically.</p>
						<div className="product-btns">
							<a href="#" className="theme-btn btn-black" role="button"><img src="images/btn-arrow.png" alt=""/> Get Adversa</a>
						</div>
					</div>
				</div>
				<div className="col-sm-5">
					<div className="product-img">
						<figure><img src="images/ai-driven-savings-img.png" alt=""/></figure>
					</div>
				</div>
			</div>
			<div className="row wow animate__animated animate__fadeInUp">
				<div className="col-sm-7">
					<div className="section-heading default-css ">
						<div className="sub-heading-title"> <img src="images/sub-heading-logo.png" alt=""/>PRODUCT</div>
						<div className="heading-title">Real-Time Insights</div>
						<p>Track your spending with detailed analytics and real-time updates, giving you full transparency and control over every transaction.</p>
						<div className="product-btns">
							<a href="#" className="theme-btn btn-black" role="button"><img src="images/btn-arrow.png" alt=""/> Get Adversa</a>
						</div>
					</div>
				</div>
				<div className="col-sm-5">
					<div className="product-img">
						<figure><img src="images/real-time-insights-img.png" alt=""/></figure>
					</div>
				</div>
			</div>
			<div className="row wow animate__animated animate__fadeInUp">
				<div className="col-sm-7">
					<div className="section-heading default-css ">
						<div className="sub-heading-title"> <img src="images/sub-heading-logo.png" alt=""/>PRODUCT</div>
						<div className="heading-title">Customizable Plans</div>
						<p>Save more on every purchase with AI-powered optimization that ensures you get the best possible value for your business, automatically.</p>
						<div className="product-btns">
							<a href="#" className="theme-btn btn-black" role="button"><img src="images/btn-arrow.png" alt=""/> Get Adversa</a>
						</div>
					</div>
				</div>
				<div className="col-sm-5">
					<div className="product-img">
						<figure><img src="images/customizable-plans-img.png" alt=""/></figure>
					</div>
				</div>
			</div>
        </div>
    </div>
</section>

        </>
    );
}
export default ProductSection;