import React from 'react';
import "../styles/happy-list.sass";

// primary-orange
// primary-blue-bg
// d-flex
// happy-list



function HappyList() {
    return (
        <>
            <div className="happy-list-section container-fluid p-0 m-0">

                <h3 className="happy-list-title font-weight-bold py-4 primary-orange font-600">Our Happy list</h3>
                <div className="container-fluid  primary-blue-bg">
                    <div className="happy-list row text-white d-flex justify-content-center align-content-center">
                        <div className="w-25 d-flex flex-column font-600">
                            <h1>11+</h1>
                            <p>Team Members</p>
                        </div>
                        <div className="boxed"></div>
                        <div className=" w-25 d-flex flex-column font-600">
                            <h1>50+</h1>
                            <p>Enquiries Generated</p>
                        </div>
                        <div className="boxed"></div>
                        <div className="w-25 d-flex flex-column font-600">
                            <h1>10+</h1>
                            <p>Clients Served</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HappyList