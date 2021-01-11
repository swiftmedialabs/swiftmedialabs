import React from 'react';
import "../styles/header.sass";
import HeaderBanner from "../assets/Group-35701.png";
function Header() {
    // const [taskCount, setTaskCount] = useState(0);
    // const tasks = ["WEB DESIGN", "APP DESIGN", "SOCIAL MEDIA", "DIGITAL MARKETING"];
    // const [currentTask, setCurrentTask] = useState("WEB DESIGN");


    return (
        <>
            <div id="home" className="header-container container-fluid row text-md-left pl-md-4 d-block d-md-flex justify-content-center align-content-center p-0 m-0">
                <div className="col-12 col-md-6 p-0 m-0">
                    <div className="col-12 p-0 h-100 d-flex flex-column justify-content-center align-content-center m-0">
                        <div className="header-intro-text pl-md-4 p-2 m-0">
                            <h1 className="primary-blue we-do py-0 my-0" data-aos="fade-up" data-aos-duration="500">WE DO</h1>
                            <h1 className="primary-orange fading-up-text my-0 py-0" data-aos="fade-up" data-aos-duration="500">WEB DESIGN</h1>
                            <p className="primary-blue header-paragraph px-2 px-md-1 m-0 text-left pt-3 py-md-4" data-aos="fade-up">Get all your marketing concerns solved under one roof of experts! Build cross-communication between your brand’s website/app, design, marketing and advertising. Together, we monitor every aspect until we reach the desired goal. </p>

                            <div className="mobile-banner d-block d-md-none h-100">
                                <img src={HeaderBanner} className="d-inline w-100" alt="Swift Media Labs Header" />
                                <span className="d-md-none d-inline-block header-purple-container-small">
                                </span>
                            </div>
                            <div className="portfolio-button-container container-fluid d-flex flex-row justify-content-center justify-content-md-start pt-4 p-md-4">

                                <span>
                                    <a href="/portfolio" className="portfolio-button primary-red-bg" data-aos="fade-up" data-aos-duration="600">VIEW PORTFOLIO
                                </a>
                                </span>
                                <span className="portfolio-arrows d-md-inline-flex flex-row  justify-content-center align-content-center d-none">
                                    <i className="fas fa-chevron-right primary-red chevron-1" data-aos="fade-up" data-aos-duration="500" />
                                    <i className="fas fa-chevron-right primary-red chevron-2" data-aos="fade-up" data-aos-duration="500" />
                                    <i className="fas fa-chevron-right primary-red chevron-3" data-aos="fade-up" data-aos-duration="500" />
                                </span>
                            </div>
                        </div>
                        <div className="container-fluid primary-blue follow-section p-0 ">
                            <h6>FOLLOW US</h6>
                            <p className="follow-icons text-white d-flex justify-content-center justify-content-md-start">
                                <a href="https://facebook.com/swiftmedialabs"><i className="fab fa-facebook follow--container primary-blue-bg d-flex justify-content-center align-items-md-center  align-items-center align-self-center" title="facebook" /></a>
                                <a href="https://twitter.com/swiftmedialabs"><i className="fab fa-twitter follow--container primary-blue-bg d-flex justify-content-center align-items-md-center  align-items-center align-self-center" /></a>
                                <a href="https://instagram.com/swiftmedialabs"><i className="fab fa-instagram bg-warning follow--container primary-blue-bg d-flex justify-content-center align-items-md-center align-items-center  align-self-center" /></a>
                                <a href="https://www.linkedin.com/company/swift-media-labs/"><i className="fab fa-linkedin bg-danger follow--container primary-blue-bg d-flex justify-content-center align-items-md-center align-items-center  align-self-center" /></a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-none d-md-block h-100 p-0 m-0">
                    <div className="header-image" >
                        <img src={HeaderBanner} alt="SML Header " />
                    </div>
                </div>
                <span className="d-none d-md-inline-block header-purple-container">
                </span>
            </div>
        </>
    )

}
export default Header