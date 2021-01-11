
import React from 'react';

export const ServicesButton = (props) => (
    <div className="w-50 d-flex d-md-flex justify-content-center">
        <a href="#slide1" className="services-action-button d-flex justify-content-center align-items-center" onClick={props.clickAction}>{props.display}</a>
    </div>
);

export const ServicesSlideShowComponent = (props) => {
    const arrayItems = props.listItems;
    const arrayItems1 = props.listItems1;
    const arrayItems2 = props.listItems2;
    const arrayList = arrayItems.map((list) => (<div className="list-items">< input type="checkbox" checked className="custom-checkbox" /> { list } </div>));
    const arrayList1 = arrayItems1.map((list1) => (<div className="list-items">< input type="checkbox" checked className="custom-checkbox" /> { list1 } </div>));
    const arrayList2 = arrayItems2.map((list2) => (<div className="list-items">< input type="checkbox" checked className="custom-checkbox" /> { list2 } </div>));


    return (
        <div className="text-left bg-white p-4">
            <h1 className="primary-red" data-aos="fade-up" data-aos-duration="500">
                {props.title}
            </h1>
            <p className="primary-blue" data-aos="fade-up" data-aos-duration="500">
                {props.text} </p>
            <p>
                <div className="primary-blue text-left">
                    {arrayList}
                </div>
                <div className="primary-blue text-left">
                    <div className="row">
                        <div className="col-6">

                        {arrayList1}
                        </div>
                        <div className="col-6">

                        {arrayList2}
                        </div>
                    </div>
                </div>
            </p>
        </div >
    )
}