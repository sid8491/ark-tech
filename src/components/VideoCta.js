import React, { Component } from "react";
import ModalVideo from "react-modal-video";

class VideoCta extends Component {
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
        {/*====================  video cta area ====================*/}
        <div className="video-cta-area section-space--inner--120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="video-cta-content">
                  <h4 className="video-cta-content__small-title">ABOUT US</h4>
                  <h3 className="video-cta-content__title">
                    We are Best construction in the world
                  </h3>
                  <p className="video-cta-content__text">
                    ARK-TECH Engineering Services is a leading Architectural
                    Consultation Company at Lucknow in the field of
                    consultation, construction, supervision of
                    construction,architectural and structural designing,
                    preparation of estimates, surveying, valuation, interior
                    decoration with expertise in Vaastu. The organisation is
                    running its head office at 647/22, Shiv Vihar, Sector - I,
                    Jankipuram, and in its branch office at Mangalam Grand, IIM
                    Road, Lucknow which consists of more than 16 staff members
                    as architects, engineers, draughtsmen, construction
                    executives and authorized property valuers. The whole team
                    comprises of more than 800 people, who are specialized in
                    different fields related to construction industry and
                    concerned with the organisation.
                  </p>
                  <a
                    href={`${process.env.PUBLIC_URL}/contact-us`}
                    className="ht-btn ht-btn--round"
                  >
                    CONTACT US
                  </a>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 col-md-6">
                <div className="cta-video-image">
                  <div className="video-popup">
                    <ModalVideo
                      channel="youtube"
                      isOpen={this.state.isOpen}
                      videoId="OrS-93U4AYQ"
                      onClose={() => this.setState({ isOpen: false })}
                    />
                    <button onClick={this.openModal}>
                      <div className="cta-video-image__image">
                        <img
                          src="assets/img/backgrounds/video-cta.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="cta-video-image__icon">
                        <i className="ion-ios-play" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of video cta area  ====================*/}
      </div>
    );
  }
}

export default VideoCta;
