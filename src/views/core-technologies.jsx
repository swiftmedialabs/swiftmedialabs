import React, { useState } from 'react';
import "../styles/core-technologies.sass";
import PurpleDots from "../assets/about-section/purple-dots.svg"

function CoreTechnologies() {
    const [design, setDesign] = useState(true);
    const [development, setDevelopment] = useState(false);
    const [marketing, setMarketing] = useState(false);

    function resetAll() {
        setDesign(false)
        setDevelopment(false)
        setMarketing(false)
    }

    return (
        <div class="container-fluid w-100 d-md-flex  justify-content-center align-content-center px-0 mx-0">

            <div class="container-fluid row px-0 mx-0">
                <div className="container-fluid d-flex justify-content-center align-content-center px-0 mx-0">
                    <div class="col-md-12 d-flex flex-column justify-content-center align-content-center px-0">
                        <img src={PurpleDots} alt="Swift Media Labs Purple Dots" className="purple-dots-core-tech d-none d-md-block" />
                        <h3 class="text-center py-4 primary-orange font-600 core-tech-heading">Core Technologies</h3>
                        <p class="p-md-2 text-center px-md-4 p-0 core-tech-intro">Our services and solutions are multifaceted with a focus on the best use of the platform technology mentioned below</p>
                        <div class="text-center p-4 px-md-4 ">
                            <div class="core-tech-tab-container d-md-flex justify-content-center align-content-center">
                                <div className="w-md-50 d-md-flex justify-content-center core-tech-tabs align-content-around row">
                                    <div class="core-tech-section col-3">
                                        <span class={design ? "core-tech-1 font-weight-bolder" : "core-tech-1"} onClick={() => { resetAll(); setDesign(true) }}>Design</span>
                                        {/* <CoreTechnologiesTabButton
                                        clickAction={() => { resetAll(); setDesign(true) }}
                                        display = "Design"
                                        /> */}
                                    </div>
                                    <div class="core-tech-section col-md-6 col-6">
                                        <span class={development ? "core-tech-2 font-weight-bolder" : "core-tech-2"} onClick={() => { resetAll(); setDevelopment(true) }}>Development </span>
                                        {/* <CoreTechnologiesTabButton
                                        clickAction={() => { resetAll(); setDevelopment(true) }}
                                        display = "Development"
                                        /> */}
                                    </div>
                                    <div class="core-tech-section col-3">
                                        <span class={marketing ? "core-tech-3 font-weight-bolder" : "core-tech-3"} onClick={() => { resetAll(); setMarketing(true) }}>Marketing </span>
                                        {/* <CoreTechnologiesTabButton
                                        clickAction={() => { resetAll(); setMarketing(true) }}
                                        display = "Marketing"
                                        /> */}
                                    </div>



                                </div>
                            </div>
                            <div class="tab-content">
                                <div class="web-dev-tab py-4 p-md-4">
                                    <div className={design ? "technologies-1" : "d-none"}>
                                        <div class="container p-md-4">
                                            <div class="container d-flex flex-row justify-content-around py-0 py-md-4 px-md-4 core-tech-images">
                                                <div class="web-dev-container text-center primary-blue">


                                                </div>
                                                <div class="web-dev-container text-center primary-blue">

                                                </div>
                                                <div class="web-dev-container text-center primary-blue">
                                                    <i class="fa fa-figma" aria-hidden="true"></i>
                                                </div>
                                                <div class="web-dev-container text-center primary-blue">
                                                    <i class="fa fa-google" aria-hidden="true"></i>
                                                </div>
                                                <div class="web-dev-container text-center primary-blue">
                                                    <i class="fa fa-google" aria-hidden="true"></i>
                                                </div>
                                                <div class="web-dev-container text-center primary-blue">
                                                    <i class="fa fa-google" aria-hidden="true"></i>
                                                </div>
                                                <div class="web-dev-container text-center primary-blue">
                                                    <i class="fa fa-google" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container d-flex flex-row justify-content-around py-0 py-md-4 px-md-4 core-tech-images">
                                            <div class="web-dev-container text-center primary-blue">
                                                <i class="fab fa-php" aria-hidden="true"></i>
                                            </div>
                                            <div class="web-dev-container text-center primary-blue">
                                                <i class="fab fa-sketch" aria-hidden="true"></i>
                                            </div>
                                            <div class="web-dev-container text-center primary-blue">
                                                <i class="fa fa-google" aria-hidden="true"></i>
                                            </div>
                                            <div class="web-dev-container text-center primary-blue">
                                                <i class="fa fa-google" aria-hidden="true"></i>
                                            </div>
                                            <div class="web-dev-container text-center primary-blue">
                                                <i class="fa fa-google" aria-hidden="true"></i>
                                            </div>
                                            <div class="web-dev-container text-center primary-blue">
                                                <i class="fa fa-google" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={development ? "technologies-2" : "d-none"}>
                                        <div class="container p-md-4">
                                            <div class="container d-flex flex-row justify-content-around py-md-4 px-md-4 core-tech-images">
                                                <div class="web-dev-container text-center primary-blue">

                                                    <i class="fab fa-react" aria-hidden="true">
                                                    </i>

                                                </div>

                                                <div class="web-dev-container text-center primary-blue">
                                                    <i class="fab fa-wordpress" aria-hidden="true"></i>
                                                </div>
                                                <div class="web-dev-container text-center primary-blue">
                                                    <i class="fab fa-bootstrap" aria-hidden="true"></i>
                                                </div>
                                                <div class="web-dev-container text-center primary-blue">
                                                    <i class="fab fa-node" aria-hidden="true"></i>
                                                </div>
                                                <div class="web-dev-container text-center primary-blue">
                                                    <i class="fab fa-html5" aria-hidden="true"></i>
                                                </div>
                                                <div class="web-dev-container text-center primary-blue">
                                                    <i class="fab fa-css3-alt" aria-hidden="true"></i>
                                                </div>
                                                <div class="web-dev-container text-center primary-blue">
                                                    <i class="fab fa-js" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container d-flex flex-row justify-content-around py-md-4 px-md-4 core-tech-images">
                                            <div class="web-dev-container text-center primary-blue">
                                                <i class="fab fa-gulp" aria-hidden="true"></i>
                                            </div>
                                            <div class="web-dev-container text-center primary-blue">
                                                <i class="fab fa-github" aria-hidden="true"></i>
                                            </div>
                                            <div class="web-dev-container text-center primary-blue">
                                                <i class="fab fa-node-js" aria-hidden="true"></i>
                                            </div>
                                            <div class="web-dev-container text-center primary-blue">
                                                <i class="fab fa-sass" aria-hidden="true"></i>
                                            </div>
                                            <div class="web-dev-container text-center primary-blue">
                                                <i class="fab fa-vuejs" aria-hidden="true"></i>
                                            </div>
                                            <div class="web-dev-container text-center primary-blue">
                                                <i class="fab fa-unity" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={marketing ? "technologies-3" : "d-none"}>
                                        <div class="container p-md-4">
                                            <div class="container d-flex flex-row justify-content-around py-md-4 px-md-4 core-tech-images">
                                                <div class="web-dev-container text-center primary-blue">
                                                    <i class="fab fa-mailchimp" aria-hidden="true"></i>
                                                </div>
                                                <div class="web-dev-container text-center primary-blue">
                                                    <i class="fab fa-youtube" aria-hidden="true"></i>
                                                </div>
                                                <div class="web-dev-container text-center primary-blue">
                                                    <i class="fab fa-facebook-f" aria-hidden="true"></i>
                                                </div>
                                                <div class="web-dev-container text-center primary-blue">
                                                    <i class="fab fa-instagram" aria-hidden="true"></i>
                                                </div>
                                                <div class="web-dev-container text-center primary-blue">
                                                    <i class="fab fa-google" aria-hidden="true"></i>
                                                </div>
                                                <div class="web-dev-container text-center primary-blue">
                                                    <i class="fab fa-twitter" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container d-flex flex-row justify-content-around py-md-4 px-md-4 core-tech-images">
                                            <div class="web-dev-container text-center primary-blue">
                                                <i class="fab fa-whatsapp" aria-hidden="true"></i>
                                            </div>
                                            <div class="web-dev-container text-center primary-blue">
                                                <i class="fab fa-yoast" aria-hidden="true"></i>
                                            </div>
                                            <div class="web-dev-container text-center primary-blue">
                                                <i class="fab fa-telegram-plane" aria-hidden="true"></i>
                                            </div>
                                            <div class="web-dev-container text-center primary-blue">
                                                <i class="fab fa-google-plus-g" aria-hidden="true"></i>
                                            </div>
                                            <div class="web-dev-container text-center primary-blue">
                                                <i class="fab fa-hubspot" aria-hidden="true"></i>
                                            </div>
                                            <div class="web-dev-container text-center primary-blue">
                                                <i class="fab fa-salesforce" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="app-dev-tab d-none">

                                </div>
                                <div class="designing-tab d-none">
                                    <div class="container-fluid row py-4 px-md-4">
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </div>
        </div >
    )
}
export default CoreTechnologies