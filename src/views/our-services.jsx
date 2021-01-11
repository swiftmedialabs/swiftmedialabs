import React, { useState } from 'react';
import "../styles/our-services.sass";
import { ServicesButton, ServicesSlideShowComponent } from "../components/services-component.jsx";

// #services
// services-socialMediaMarketing
// services-title
// services-laptop-button-container
// services-laptop-buttons
// -services-action-button
// services-portfolio-container
// - services-portfolio-button
function OurServices() {
    const [webDev, setWebDev] = useState(false);
    const [mobileDev, setMobileDev] = useState(false);
    const [uiDesign, setUiDesign] = useState(true);
    const [socialMediaMarketing, setsocialMediaMarketing] = useState(false);
    const [seo, setCloudTech] = useState(false);

    function resetAll() {
        setWebDev(false)
        setMobileDev(false)
        setUiDesign(false)
        setsocialMediaMarketing(false)
        setCloudTech(false)
    }


    return (
        <div className="container-fluid row m-0 p-0" id="services">
            <div className="container-fluid col-md-6 m-0 p-0 d-flex justify-content-center align-content-end flex-column">
                <div className="container services-content text-md-left">
                    <span className="services-purple-container-mobile">
                    </span>
                    <h5 className="services-socialMediaMarketing primary-blue font-600 px-4" data-aos="fade-up" data-aos-duration="500">
                        <i className="fas fa-caret-right primary-red" data-aos="fade-up" data-aos-duration="500" /> OUR SERVICES</h5>
                    <div className="services-inverter d-flex flex-column-reverse flex-md-column">

                        <h3 className="services-title primary-orange font-600 px-4" data-aos="fade-up" data-aos-duration="500">Transforming your ideas <br /> into Reality</h3>
                        <div className="services-laptop-button-container w-100">
                            <div className="d-flex d-md-flex flex-row services-laptop-buttons">
                                <ServicesButton
                                    clickAction={() => { resetAll(); setWebDev(true) }}
                                    display="Web Development"
                                />
                                <ServicesButton
                                    display="Mobile Development"
                                    clickAction={() => { resetAll(); setMobileDev(true) }}
                                />
                            </div>
                            <div className="w-100 d-flex d-md-flex flex-row services-laptop-buttons">

                                <ServicesButton
                                    display="UI/UX Development"
                                    clickAction={() => { resetAll(); setUiDesign(true) }}
                                />
                                <ServicesButton
                                    display="Social Media"
                                    clickAction={() => { resetAll(); setsocialMediaMarketing(true) }}
                                />
                            </div>
                            <div className="w-100 d-flex d-md-flex flex-row justify-content-start services-laptop-buttons">
                                <ServicesButton
                                    display="SEO"
                                    clickAction={() => { resetAll(); setCloudTech(true) }}
                                />
                            </div>
                        </div>
                        <div className="d-block d-md-none">
                            <div className="h-100 d-flex justify-content-center align-items-center services-slider-content pl-0 ml-0">
                                <div className="services-inner-content-mobile">
                                    <div className={webDev ? "services-1" : "d-none"}>
                                        <h1 data-aos="fade-up" data-aos-duration="500">
                                            Web Dev
                    </h1>
                                    </div>
                                    <div className={mobileDev ? "services-2" : "d-none"}>
                                        <h1 data-aos="fade-up" data-aos-duration="500">
                                            Mobile Dev</h1>
                                    </div>
                                    <div className={uiDesign ? "services-3 text-left " : "d-none"}>
                                        <h1 className="primary-red" data-aos="fade-up" data-aos-duration="500">
                                            UI/UX Design</h1>
                                        <p className="primary-blue " data-aos="fade-up" data-aos-duration="500">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nam nihil reprehenderit iure. Assumenda dolores et quae doloribus! Architecto, tempora. Odio a quas numquam mollitia molestias explicabo enim magnam? Dolorum?
                            </p>
                                        <p>
                                            <div className="primary-blue text-left" data-aos="fade-up" data-aos-duration="500">
                                                <input type="checkbox" checked className="custom-checkbox" /> Lorem ipsum dolor sit. <br />
                                                <input type="checkbox" checked className="custom-checkbox" /> Lorem ipsum dolor sit. <br />
                                                <input type="checkbox" checked className="custom-checkbox" /> Lorem ipsum dolor sit. <br />
                                                <input type="checkbox" checked className="custom-checkbox" /> Lorem ipsum dolor sit. <br />
                                            </div>
                                        </p>
                                    </div>
                                    <div className={socialMediaMarketing ? "services-4" : "d-none"}>
                                        <h1>
                                            socialMediaMarketing                    </h1>
                                    </div>
                                    <div className={seo ? "services-5" : "d-none"}>
                                        <h1>
                                            SEO                    </h1>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid services-portfolio-container py-4 mt-md-4">
                        <a href="#portfolio services-portfolio-button" className="services-portfolio-button primary-red-bg">VIEW PORTFOLIO</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 pl-0 ml-0">
                <div className="h-100 d-flex justify-content-center align-items-center services-slider-content">
                    <div className="services-inner-content">
                        <div className={webDev ? "services-1 d-none d-md-block" : "d-none"}>
                            <ServicesSlideShowComponent
                                listItems={['Premium Hosting','Hand Coded','CMS','Services and Ecommerce Website']}
                                listItems1={[null]}
                                listItems2={[null]}
                                title="Web Development"
                                text="If your business idea is unique, so should be your website. Your online presence is more than just a necessity. It's what translates a potential customer into a permanent consumer. We create websites that are highly interactive to ensure fast and secured connections."
                            />
                        </div>
                        <div className={mobileDev ? "services-2 d-none d-md-block" : "d-none"}>
                            <ServicesSlideShowComponent
                                listItems={['iOS/Android App Development', 'User Friendly UI', 'Cross Platform Support','Ecommerce Platform Development']}
                                listItems1={[null]}
                                listItems2={[null]}
                                title="Mobile Development"
                                text="Our diligent website and app developers code platforms that speak bountiful. Keeping seamless communication and translation as goals, our developers may code from scratch or use platforms like wordpress &amp; Many more"
                            />
                        </div>
                        <div className={uiDesign ? "services-3 text-left d-none d-md-block" : "d-none"}>
                            <ServicesSlideShowComponent
                                listItems={['Highly creative, User Friendly UI Designs', ' In-depth User Experience Research and Flow Chart', 'Interactive Prototyping/Microinteractions/Advanced Animation', 'Optimization for all devices(desktop,tablet and mobile)']}
                                listItems1={[null]}
                                listItems2={[null]}
                                title="UI/UX Design"
                                text="We use UI/UX website designing with prototypes to understand both your and your company's needs and build a website or and app for you from scratch!
So be it a food delivery app or an e-commerce website or anything else, our expert designers have got you covered."
                            />
                        </div>
                        <div className={socialMediaMarketing ? "services-4 d-none d-md-block" : "d-none"}>
                            <ServicesSlideShowComponent
                                listItems={[null]}
                                listItems1={['Facebook', 'Instagram', 'Influencer Marketing', 'WhatsApp Marketing']}
                                listItems2={['Youtube', 'Twitter', 'Google', 'Pinterest']}
                                title="Social Media Marketing"
                                text="Driving audience engagement is one thing, but ensuring that your audience sticks with your brand is our flair. We exploit social media as a connecting technique to build your brand and sustain it to increase sales and drive website traffic. With our lab mates' well-examined strategies and experience, a customer would want to follow your brand on social media. Your brand's performance is monitored until you get the demanded result."
                            />
                        </div>
                        <div className={seo ? "services-5 d-none d-md-block" : "d-none"}>
                            <ServicesSlideShowComponent
                                listItems={['Develop and implement link building strategy.',
                                    'SEO best practices are adequately executed on newly developed code',
                                    'Research competitor keywords and provide suggestions for improvement.',
                                'Legit Backlinks']}
                                listItems1={[null]}
                                listItems2={[null]}
                                title="SEO"
                                text="You must have tried everything to be on the top of the web search, but you are yet to try our services. Your visibility matters to us, so our experienced handlers strictly use: "
                            />
                        </div>

                    </div>
                </div>
                <span className="services-purple-container d-none d-md-block"></span>
            </div>
        </div >
    )
}
export default OurServices