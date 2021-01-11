import React from 'react';
import "../styles/workflow.sass";
// workflow-container
// workflow-title
// workflow-intro-para
// workflow-steps-container
// workflow-step-1-container
// - step-no-1
// - step-title-1
// - step-desc-1
// workflow-step-2-container
// - step-no-2
// - step-title-2
// - step-desc-2
// workflow-step-3-container
// - step-no-3
// - step-title-3
// - step-desc-3
function Workflow() {
    return (
        <div className="container-fluid workflow-container p-md-4 d-flex justify-content-center flex-column">
            <div className="container-fluid">
                <h1 className="workflow-title font-600 primary-orange px-md-4">Workflow</h1>
                <div className="container-fluid workflow-intro-para px-md-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ab beatae cum nemo! <br />
                 Fugiat dolorem, quisquam eius tenetur libero quae.
            </div>
            </div>

            <div className="container-fluid row workflow-steps-container p-md-4">
                <div className="workflow-hover col-md-4 text-md-left workflow-step-1-container">
                    <div className="step-container d-flex justify-content-center justify-content-md-start pt-4 align-content-center">

                        <p className="step-no-1 w-25 text-center primary-blue font-600">STEP 1</p>
                    </div>
                    <h4 className="step-title-1 primary-orange font-600 text-center text-md-left">Send your brief</h4>
                    <p className="step-desc-1 primary-blue"> Mail us your brief, and get on a call with us! We’d understand what your brand desires
                    and strategize to yield the best result with
                     minimum investment. We coordinate with you at every step of your brand’s development.</p>
                </div>
                <div className="workflow-hover col-md-4 text-md-left">
                    <div className="step-container d-flex justify-content-center justify-content-md-start pt-4 align-content-center">

                        <p className="step-no-2 w-25 text-center primary-blue font-600">STEP 2</p>
                    </div>
                    <h5 className="step-title-2 primary-orange font-600 text-center text-md-left">Wait for delivery</h5>
                    <p className="step-desc-2 primary-blue">Our expert team of strategists, designers, and developers work hand-in-hand to custom serve your brand. We continue for a fixed timeline until we have met your goal, and the project has been finalised.</p>
                </div>
                <div className="workflow-hover col-md-4 text-md-left">
                    <div className="step-container d-flex justify-content-center justify-content-md-start pt-4 align-content-center">
                        <p className="step-no-3 w-25 text-center primary-blue font-600">STEP 3</p>
                    </div>
                    <h5 className="step-title-3 primary-orange font-600 text-center text-md-left">Get your files!</h5>
                    <p className="step-desc-3 primary-blue">Once your brand has an online presence, or a campaign has successfully landed, you get your file(s). That shouldn’t be the end of our journey, though. We continue to monitor progress and develop further strategies to ensure your brand stands strong through market fluctuations.</p>
                </div>
            </div>

        </div>
    )
}
export default Workflow