import React from "react";

function Header() {
    return (
        <>
           <header>
	<div className="header-section" id="myHeader">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="header-meuu-right">
						<div className="header-logo">
							<a href="index.html"> <img src="/images/logo.png" alt="Logo"/></a>
						</div>
						<div className="menu-navbar">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle collapsed" data-bs-toggle="collapse" data-bs-target="#myNavbar">
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div>
							<div className="collapse navbar-collapse iphonNav nav-top clearfix navigation" id="myNavbar" style={{ display: "block" }}>
								<div className="mobile-logo" style={{ display: "none" }}>
									<a href="#"> <img src="/images/logo.png" alt="Logo"/></a>
								</div>
								<div className="menu-top-menu-container">               
									<ul> 
										<li><a href="#">Product</a> </li>  
										<li><a href="#">Reviews</a> </li>  
										<li><a href="#">Benefits</a> </li>  
										<li><a href="#">Pricing</a> </li>  
										<li><a href="#">Changelog</a> </li>  
									</ul>
								</div>
							</div>
						</div>
						<div className="header-btns">
							<a href="javascript:void(0);" className="theme-btn btn-black" role="button" data-bs-toggle="modal" data-bs-target="#form-popup">
                                <img src="/images/btn-arrow.png" alt=""/> Get Adversa</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
        </>
    )
}
export default Header;