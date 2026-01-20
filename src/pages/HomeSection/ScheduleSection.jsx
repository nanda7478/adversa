import React from "react";
const ScheduleSection = () => {
    return (
        <>
          <section className="schedule-call-section">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
				<div className="default-css">
					<p><img src="images/safe-purchase-icon.png" alt=""/>100% Safe Purchase</p>
					<p><img src="images/money-back-guarantee-icon.png" alt=""/>17-Day Money Back Guarantee</p>
					<p><img src="images/delivery-icon.png" alt=""/>Delivery In 24h</p>
				</div>
                <div className="section-heading wow animate__animated animate__fadeInUp">
                    <h2>Not sure id we’re a fit?</h2>
					<p>Lets setup a 15 minute call to figure out if we can help you.</p>
					<div className="schedule-call-btn">
						<a href="#" className="theme-btn btn-black" role="button"><img src="images/btn-call.png" alt=""/> Schedule A Call</a>
					</div>
                </div>
            </div>
        </div>
    </div>
</section>
        </>
    );
}
export default ScheduleSection;