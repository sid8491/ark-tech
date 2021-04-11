import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class Contact extends Component{
    render(){
        return(
            <div>
                {/* Navigation bar */}
                <NavBar/>

                {/* breadcrumb */}
                {/*====================  breadcrumb area ====================*/}
                {/* <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>Contact Us</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/*====================  End of breadcrumb area  ====================*/}

                {/*====================  content page content ====================*/}
                <div className="page-wrapper section-space--inner--120">
                {/*Contact section start*/}
                <div className="conact-section">
                    <div className="container">
                    
                    <div className="row">
                        <div className="col-lg-4 col-12">
                        <div className="contact-information">
                            <h3>Contact Information</h3>
                            <ul>
                                <li>
                                    <span className="icon"><i className="ion-android-map" /></span>
                                    <span className="text"><span>647/22, Shiv Vihar, Sector-I, Jankipuram, Lucknow</span></span>
                                </li>
                                <li>
                                    <span className="icon"><i className="ion-home" /></span>
                                    <span className="text"><span>Mangalam Grand, IIM Road, Bithouli, Lucknow</span></span>
                                </li>
                                <li>
                                    <span className="icon"><i className="ion-ios-telephone" /></span>
                                    <span className="text">Call us at: <a href="tel:1234567890">+91 941 502 3637</a></span>
                                </li>
                                <li>
                                    <span className="icon"><i className="ion-ios-email" /></span>
                                    <span className="text">Email us at: <a href="mailto:arktech@gmail.com">arktech@gmail.com</a></span>
                                </li>
                                <li>
                                    <span className="icon"><i className="ion-android-desktop" /></span>
                                    <span className="text">Visit us at: <a href="http://www.arktechlucknow.com">www.arktechlucknow.com</a></span>
                                </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-8 col-12">
                        <div className="contact-form">
                            <h3>Leave Your Message</h3>
                            <form id="contact-form">
                            <div className="row row-10">
                                <div className="col-md-6 col-12 section-space--bottom--20"><input name="con_name" type="text" placeholder="Your Name" /></div>
                                <div className="col-md-6 col-12 section-space--bottom--20"><input name="con_email" type="email" placeholder="Your Email" /></div>
                                <div className="col-12"><textarea name="con_message" placeholder="Your Message" defaultValue={""} /></div>
                                <div className="col-12"><button>Send Message</button></div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    <div className="row section-space--bottom--50 pt-3">
                        <div className="col">
                            <div className="contact-map">
                            <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.468483903413!2d80.94578395117536!3d26.92035876615763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957add115218d%3A0xf763eab120a96b47!2sARK-TECH%20Engineering%20Services!5e0!3m2!1sen!2sin!4v1618093326883!5m2!1sen!2sin" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="row section-space--bottom--50">
                        <div className="col">
                            <div className="contact-map">
                            <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.117684753907!2d80.92052361549932!3d26.931483383119634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399956f824c5a4f5%3A0xf2ad73b92ceb1479!2sMangal%20utsav%20lawn!5e0!3m2!1sen!2sin!4v1618093752645!5m2!1sen!2sin" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*Contact section end*/}
                </div>
                {/*====================  End of content page content  ====================*/}
                
                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default Contact;