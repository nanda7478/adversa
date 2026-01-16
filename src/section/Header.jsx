import React from "react";

function Header() {
    return (
        <>
           <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
            <div class="container">
                <a class="navbar-brand fw-bold d-flex align-items-center" href="#">
                    <i class="bi bi-hexagon-fill text-success me-2 fs-4"></i> AdsVersa
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navMenu">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#">Product</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Reviews</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Benefits</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Changelog</a></li>
                    </ul>

                    <a href="#" class="btn btn-dark px-4">Get Adsversa</a>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Header;