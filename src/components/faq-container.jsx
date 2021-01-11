import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

import "../styles/frequently-asked-questions.sass";
export const FrequentlyAskedQuestion = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <span className="p-2 m-0 w-100 faq-slicer text-left text-white d-md-flex justify-content-md-end">
                <div className="faq-container d-flex flex-column text-left">
                    <div className="d-flex justify-content-end">
                        <span className="container-fluid faq-heading w-100">
                            {props.question}
                        </span>
                        <button className="inline-block faq-action" onClick={() => setOpen(!open)}>
                            <FontAwesomeIcon icon={open ? faMinus : faPlus} />
                        </button>
                    </div>
                    <span className={open ? "faq-answer p-md-1 w-100 p-1" : "d-none"}>
                        {props.answer}
                    </span>
                </div>
            </span>
        </>
    )
}

// To align the content of frequently asked question to left we have 
export const FrequentlyAskedQuestionRight = (props) => (
    <>
        <span className="p-2 m-0 w-100 faq-slicer text-left text-white d-md-flex justify-content-md-start">
            <div className="faq-container d-flex flex-column">
                <div className="d-flex justify-content-end">
                    <span className="container-fluid faq-heading w-100">
                        {props.question}
                    </span>
                    <button className="inline-block faq-action">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <span className={props.open ? "faq-answer p-md-1" : "d-none"}>
                    {props.answer}
                </span>
            </div>
            <div className="faq-answer ">
            </div>
        </span>
    </>
);