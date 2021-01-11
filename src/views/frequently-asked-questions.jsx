import React from 'react';
import { FrequentlyAskedQuestion, FrequentlyAskedQuestionRight } from '../components/faq-container';
// faq-container 
// faq-heading
// faq-action

function FAQ() {
    return (
        <>
            <div className="container-fluid py-4">
                <div className="d-flex flex-column justify-content-center">
                    <h4 className="primary-orange font-600 faq-title">Frequently Asked Questions</h4>
                    <p className="primary-red py-md-4">Our Plans have everything you need to take your project to the next level</p>
                </div>
                <div className="container-fluid row">
                    <div className="col-12 col-md-6 text-right">
                        {/* Frequently Asked Questions */}
                        <FrequentlyAskedQuestion
                            question="Lorem question text"
                            answer="Lorem ipsum dolor sit amet alsdfna ndfla lsn lsoo,w lsljsfjer ewjrewijr weriuewroiuewoiewr"
                        />
                        <FrequentlyAskedQuestion
                            question="Lorem question text"
                            answer="Lorem ipsum dolor sit amet alsdfna ndfla lsn lsoo,w lsljsfjer ewjrewijr weriuewroiuewoiewr"
                        />
                        <FrequentlyAskedQuestion
                            question="Lorem question text"
                            answer="Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor 
                            in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat
                             cupidatat non proident, sunt in culpa 
                             qui officia deserunt mollit anim id est 
                             laborum."
                        />
                    </div>
                    <div className="col-12 col-md-6">

                        <FrequentlyAskedQuestionRight
                            question="Lorem question text"
                            answer="Lorem ipsum dolor sit amet alsdfna ndfla lsn lsoo,w lsljsfjer ewjrewijr weriuewroiuewoiewr"
                        />
                        <FrequentlyAskedQuestionRight
                            question="Lorem question text"
                            answer="Lorem ipsum dolor sit amet alsdfna ndfla lsn lsoo,w lsljsfjer ewjrewijr weriuewroiuewoiewr"
                        />
                        <FrequentlyAskedQuestionRight
                            question="Lorem question text"
                            answer="Lorem ipsum dolor sit amet alsdfna ndfla lsn lsoo,w lsljsfjer ewjrewijr weriuewroiuewoiewr"
                        />
                    </div>
                </div>
            </div>
        </>

    )
}
export default FAQ