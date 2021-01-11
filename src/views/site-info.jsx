import React from 'react';
import "../styles/site-info.sass";

function SiteInfo() {
    return (
        <>
            <div className="primary-blue-bg p-4">
                <div className="site-info-container container text-white">
                    <div className="row">
                        <div className="d-none d-md-block col-md-3 site-info-block">
                            <div className="site-info-inner-content d-flex justify-content-start p-1">
                                <div className="google d-flex justify-content-center align-items-center">
                                    <i class="fab fa-google p-1" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="text-white text-left">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iste ex quas eos dolore in voluptatem itaque vel expedita excepturi atque!
                            </div>
                        </div>
                        <div className="col-12 text-left text-md-center col-md-3 site-info-block">
                            <h6 className="font-weight-bold pt-2 d-none d-md-block">COMPANY</h6>
                            <div className="d-flex flex-column justify-content-around h-75 text-left">
                                <a href="/brochure/SML%20COMAPNY%20PROFILE.pdf" className="download-brochure">Download Brochure</a>
                                <div className="text-white company-indent d-none d-md-block"><a href="/faq">FAQ</a></div>
                                <div className="text-white company-indent d-none d-md-block"><a href="/terms">Terms</a></div>
                                <div className="text-white company-indent d-none d-md-block"><a href="/privacy-policy.html">Privacy</a></div>
                                <div className="text-white company-indent d-none d-md-block"><a href="/blog">Blog</a></div>
                            </div>
                        </div>
                        <div className="d-none col-md-2 site-info-block text-left d-md-flex flex-column justify-content-around">

                        </div>
                        <div className="col-12 col-md-4 pt-4 pt-md-0 site-info-block text-left d-flex flex-column justify-content-around">
                            <h6 className="font-weight-bolder primary-md-orange">Contact</h6>
                            <div className="site-phone">Phone: <a href="tel:+12502994850">+1 (250) 299-4850</a> | <a href="tel:+919665194760">+91-9665194760</a></div>
                            <div className="site-mail">Email: <a href="mailto:swiftmedialabs@gmail.com">swiftmedialabs@gmail.com</a></div>
                            <div className="site-address">Head Office: <a href="https://maps.google.com/canada">Whiteshield Crescent South, Kamloops, B. C, Canada</a></div>
                            <div className="site-address">Address: <a href="https://maps.google.com/boisar">Mumbai, Maharashtra </a></div>

                        </div>
                        <div className="col-12 d-block d-md-none pl-0">
                            <div className="d-block d-md-none ">
                                <div className="d-flex justify-content-start">
                                    <div className="p-2 d-flex justify-content-around follow-icons-site">
                                        <a href="http://facebook.com/swiftmedialabs" className="m-1"><div className="">facebook</div><i class="fab fa-facebook p-1" aria-hidden="true" aria-label="facebook"></i></a>
                                        <a href="http://twitter.com/swiftmedialabs" className="m-1"><div className="invisible">facebook</div><i class="fab fa-twitter p-1" aria-hidden="true" aria-label="twitter"></i></a>
                                        <a href="http://instagram.com/swiftmedialabs" className="m-1"><div className="invisible">facebook</div><i class="fab fa-instagram p-1" aria-hidden="true" aria-label="instagram"></i></a>
                                        <a href="http://linkedin.com/company/swift-media-labs" className="m-1"><div className="invisible">facebook</div><i class="fab fa-linkedin-in p-1" aria-hidden="true" aria-label="linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="bottom-site-info-links d-flex d-md-none justify-content-around">
                                    <div className="text-white"><a href="#faq" className="text-white">FAQ</a></div>
                                    <div>|</div>
                                    <div className="text-white"><a href="/terms" className="text-white">Terms</a></div>
                                    <div>|</div>
                                    <div className="text-white"><a href="/privacy-policy.html" className="text-white">Privacy</a></div>
                                    <div>|</div>
                                    <div className="text-white"><a href="/blog" className="text-white">Blog</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-block primary-blue-bg">
                <div className="bottom-line-container d-flex justify-content-center">
                    <div className="bottom-line-white d-block"></div>
                </div>
            </div>
            {/* Bottom most section */}
            <div className="container-fluid primary-blue-bg pl-md-4 m-0 bottom-site-info">
                <div className="container row">
                    <div className="col-md-6 d-none d-md-block pl-md-4">
                        <div className="d-flex justify-content-start">
                            <div className="p-2 d-flex justify-content-around follow-icons-site">
                                <a href="http://facebook.com/swiftmedialabs" className="m-1"><div className="d-none">facebook</div><i class="fab fa-facebook p-1" aria-hidden="true" aria-label="facebook"></i></a>
                                <a href="http://twitter.com/swiftmedialabs" className="m-1"><div className="d-none">facebook</div><i class="fab fa-twitter p-1" aria-hidden="true" aria-label="twitter"></i></a>
                                <a href="http://instagram.com/swiftmedialabs" className="m-1"><div className="d-none">facebook</div><i class="fab fa-instagram p-1" aria-hidden="true" aria-label="instagram"></i></a>
                                <a href="http://linkedin.com/company/swift-media-labs" className="m-1"><div className="d-none">facebook</div><i class="fab fa-linkedin p-1" aria-hidden="true" aria-label="linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 text-white py-4 text-md-right copyright-content">
                        &copy; 2020 - All Rights Reserved
                    </div>
                </div>
            </div>
        </>)
}
export default SiteInfo