import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FeatureIcon from "../components/FeatureIcon";
import Funfact from "../components/Funfact";
import TeamMemberGrid from "../components/TeamMemberGrid";
// import TestimonialSlider from "../components/TestimonialSlider";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import ModalVideo from "react-modal-video";
class About extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        {/* <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>About Us</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/*====================  End of breadcrumb area  ====================*/}

        <div className="page-wrapper section-space--inner--top--120">
          {/*About section start*/}
          <div className="about-section section-space--inner--bottom--120">
            <div className="container">
              <div className="row row-25 align-items-center">
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-image-two">
                    <img src="assets/img/about/about-3.jpg" alt="" />
                    <span className="video-popup">
                      <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        videoId="OrS-93U4AYQ"
                        onClose={() => this.setState({ isOpen: false })}
                      />
                      <button onClick={this.openModal}>
                        <i className="ion-ios-play-outline" />
                      </button>
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-content-two">
                    <h1>Welcome to ARK-TECH</h1>
                    {/* <h3>Best in Industry</h3> */}
                    <p>
                      ARK-TECH Engineering Services is a leading Architectural
                      Consultation Company at Lucknow in the field of
                      consultation, construction, supervision of
                      construction,architectural and structural designing,
                      preparation of estimates, surveying, valuation, interior
                      decoration with expertise in Vaastu. The organisation is
                      running its head office at 647/22, Shiv Vihar, Sector - I,
                      Jankipuram, and in its branch office at Mangalam Grand,
                      IIM Road, Lucknow which consists of more than 16 staff
                      members as architects, engineers, draughtsmen,
                      construction executives and authorized property valuers.
                      The whole team comprises of more than 800 people, who are
                      specialized in different fields related to construction
                      industry and concerned with the organisation.
                    </p>

                    <p>
                      ARK-TECH Engineering Services has an experience of more
                      than 26 years now which boasts construction and designing
                      of thousands of buildings, as residential, commercial,
                      government development works and religious buildings. It
                      has served thousands of residences in all over the city of
                      Lucknow and other cities in UP and other states also and
                      is a well known and reputed Architect of northern India
                      who accomplish the related task in a well defined manner
                      with entire satisfaction of the client for providing
                      better option of design and low cost construction. For the
                      present, with an awareness of the past, for a future which
                      is essentially unknown. We appeal you all to avail the
                      opportunity of our expertise to construct the prosperous
                      house with least cost.
                    </p>
                    <a
                      href="services"
                      className="ht-btn--default ht-btn--default--dark-hover section-space--top--20"
                    >
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About section end*/}

          {/* Feature Icon */}
          <FeatureIcon background="grey-bg" />

          {/*About section start*/}
          <div className="about-section section-space--inner--120">
            <div className="container">
              <div className="about-wrapper row">
                <div className="col-sm-6 col-12 order-1 order-lg-2">
                  <div className="about-image about-image-1">
                    <img src="assets/img/about/about-1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-sm-6 col-12 order-2 order-lg-3">
                  <div className="about-image about-image-2">
                    <img src="assets/img/about/about-2.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-12 order-3 order-lg-1">
                  <div className="about-content about-content-1">
                    <h1>
                      <span>ARK TECH</span>Engineering Services
                    </h1>
                    <p>
                      We provide the best services in the field of architectural
                      consultation, construction, supervision of construction,
                      architectural and structural designing, construction of
                      multistoried complexes, consultancy and construction in
                      the field of environment, preparation of estimates,
                      surveying, valuation of property and interior decoration
                      with expertise in Vaastu.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-12 order-4">
                  <div className="about-content about-content-2">
                    <p>
                      We have provided our services in designing of thousands of
                      buildings, as residential, commercial complexes,
                      Government development works, hospitals and religious
                      buildings.
                    </p>
                    <a
                      href={`${process.env.PUBLIC_URL}/contact-us`}
                      className="ht-btn--default ht-btn--default--dark-hover section-space--top--20"
                    >
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About section end*/}

          {/* Fun fact */}
          <Funfact />

          {/* Team member */}
          <TeamMemberGrid />

          {/* Testimonial Slider */}
          {/* <TestimonialSlider /> */}

          {/* Brand logo */}
          <BrandLogoSlider background="" />
        </div>

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default About;
