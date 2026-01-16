import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
          <footer class="footer-section">
    <div class="container">
        <div class="row gy-4">

            
            <div class="col-lg-4 col-md-6">
                <div class="footer-brand d-flex align-items-start">
                    <div class="logo-icon me-3">
                        <i class="bi bi-hexagon-fill"></i>
                    </div>
                    <div>
                        <h4 class="mb-0">AdsVersa</h4>
                        <small>DIGITAL MARKETING AGENCY</small>
                    </div>
                </div>
            </div>

           
            <div class="col-lg-2 col-md-6">
                <ul class="footer-links">
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Benefits</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">Pricing</a></li>
                </ul>
            </div>

           
            <div class="col-lg-3 col-md-6">
                <ul class="footer-links">
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Track my Order</a></li>
                    <li><a href="#">Return my Order</a></li>
                    <li><a href="#">FAQs</a></li>
                </ul>
            </div>

           
            <div class="col-lg-3 col-md-6">
                <ul class="footer-links">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                </ul>
            </div>

        </div>

        
        <div class="footer-bottom text-center mt-4">
            <small>© Adsversa digital marketing</small>
        </div>
    </div>
</footer>

        </>
    );
};

export default Footer;