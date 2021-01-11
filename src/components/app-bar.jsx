import React from 'react';
import "../styles/app-bar.sass";
import LogoImage from "../assets/logo.png";

function AppBar() {
    // return <h1> AppBar</h1>
    return (
        <>
            <div className="appbar-container container-fluid row ">
                <div className="col-12 col-md-6 first-row d-md-flex flex-row justify-content-md-start align-content-center p-4">
                    <img src={LogoImage} alt="Logo" className="logo-image" />
                </div>
                <div className="app-bar-actions col-md-6 row second-row d-md-flex flex-row justify-content-start align-content-center d-none pt-4">
                    <div class="tab-section col-2 small"><a class="tab-section-1 font-600" href="#home">HOME</a></div>
                    <div class="tab-section col-3 small"><a class="tab-section-2 font-600" href="/portfolio">PORTFOLIO</a></div>
                    <div class="tab-section col-2 small"><a class="tab-section-3 font-600" href="#contact">CONTACT</a></div>
                </div>
            </div>
        </>
    )
}
export default AppBar