import React from 'react';
import "../styles/free-website-audit.sass";
import AuditBottomImage from "./../assets/contact-section/contact-section.svg"
import AuditBottomMobile from "./../assets/contact-section/contact-section-mobile.svg"
// primary-blue-bg
// flex-column
// free-website
// website-audit
// w-md-50
// container-fluid
// input-email
// try-btn


function FreeWebsiteAudit() {
    return (
        <>
            <div>
                <div className="free-audit-section  position-absolute container-fluid p-0 text-white d-flex flex-column justify-content-start justify-content-md-center align-items-center">
                    <div className="container-fluid d-flex flex-column justify-content-center align-items-center ">
                        <div>
                            <h1 className="free-website">FREE</h1>
                            <h3 className="website-audit">WEBSITE AUDIT</h3>
                        </div>
                        <div className="container-fluid w-md-50">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ad impedit
                        <br />
                          delectus eligendi reprehenderit.</p>
                        </div>
                        <div className="container-fluid">
                            <span className="container-fluid span">
                                <input class="input-email" type="url" placeholder="https://yourfirm.com" />
                            </span>
                            <span className="container-fluid">

                                <button class="try-btn">Try for free</button>
                            </span>
                        </div>
                    </div>
                </div>
                <img src={AuditBottomImage} alt="Audit Bottom" className="d-none d-md-block audit-bottom-img" />
                <img src={AuditBottomMobile} alt="Audit Bottom" className="d-block d-md-none audit-bottom-img" />

            </div>
        </>
    )
}
export default FreeWebsiteAudit