import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
       <>
          <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="about-ftr">
                                <div className="ftr-logo">
                                    <a href="#"><img src="images/logo.png" alt="Logo"/></a>
                                </div>
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Product </a> </li>
                                        <li><a href="#">Benefits </a> </li>
                                        <li><a href="#">Reviews </a> </li>
                                        <li><a href="#">Pricing </a> </li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="ftr-platforms">
                                <p>You may also find me on these platforms!</p>
                                <a href="#"><img src="images/github-icon.png" alt=" Logo"/></a>
                                <a href="#"><img src="images/twitter-icon.png" alt=" Logo"/></a>
                                <a href="#"><img src="images/figma-icon.png" alt=" Logo"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-section">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="copyright">
                                <p> @Adsversa digital marketing </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </footer>
     </>
    );
};

export default Footer;