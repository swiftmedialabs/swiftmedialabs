import React from 'react';
import "../styles/about-us.sass";
import AboutImage from "../assets/about.png";
import AboutTriangles from "../assets/about-section/triangle.svg";
import PurpleDots from "../assets/about-section/purple-dots.svg";
// about-branding
// about-title
// about-tagline
// about-paragraph
// get-started-container
// - get-started-button
function AboutUs() {
    return (
        <div className="container-fluid row">
            <div className="col-12 col-md-6">
                <img src={AboutImage} alt="About Swift Media Labs" className="about-png d-none d-md-block" />
            </div>
            <div className="col-12 col-md-6 about-content p-0 m-0">
                <div className="about-md-container container-fluid text-left d-md-flex flex-column justify-content-center align-content-center">
                    <div className="container-fluid">
                        <img src={AboutTriangles} alt="Swift Media Lab Triangles" className="about-triangles d-none d-md-block" />

                        <h5 className="about-branding primary-blue" data-aos="fade-up" data-aos-duration="500">
                            <div className="fas fa-caret-right primary-red" data-aos="fade-up" data-aos-duration="500"><i class="fa fa-caret-right d-inline position-relative about-second-light-caret" aria-hidden="true"></i></div> ABOUT US</h5>
                        <h2 className="about-title primary-orange" data-aos="fade-up" data-aos-duration="500">Great Digital Agency</h2>
                        <p className="about-tagline" data-aos="fade-up" data-aos-duration="500">Our products are fully custom-made, built with the latest technologies and cloud-architectures. </p>
                        <p className="about-paragraph" data-aos="fade-up" data-aos-duration="500">Our expert labmates in Swift Media Labs come with years of experience in 360 degree marketing and brand building. Our designers and strategists are dedicated to understanding your brand’s intricate needs and conduct intensive market research. Developers, analysts and executives further work towards getting you closer to your goal. We ideate campaigns and intellectual properties to translate organic crowd into potential customers</p>
                        <div className="container-fluid get-started-container text-center text-md-left">
                            <a href="#get-started" className="get-started-button primary-orange" data-aos="fade-up" data-aos-duration="500">Get Started <i class="fas fa-chevron-right" aria-hidden="true"></i> <i class="fas fa-chevron-right" aria-hidden="true"></i> </a>
                        </div>
                        <img src={PurpleDots} alt="Swift Media Labs Purple Dots" className="purple-dots d-none d-md-block" />

                    </div>
                </div>
            </div>
        </div>

    )
}
export default AboutUs