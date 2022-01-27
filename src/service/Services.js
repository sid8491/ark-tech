import React, { Component } from "react";
import NavBar from "../components/NavBar";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
class Services extends Component {
  render() {
    let data = [
      {
        pageLink: "service-details-left-sidebar",
        img: "service1.jpg",
        iconClass: "flaticon-002-welding",
        serviceTitle: "Project Planning",
        serviceSubtitle:
          "We provide the best service related to Architectural planning and designing, structural planning and designing with economy and strength using latest design procedures.",
      },
      {
        pageLink: "service-details-left-sidebar",
        img: "service2.jpg",
        iconClass: "flaticon-004-walkie-talkie",
        serviceTitle: "Construction and Supervision",
        serviceSubtitle:
          "We provide the best services for construction of all type of buildings including residential and multi storied commercial complexes, malls, auditorium, hostel and hospital buildings, buildings related to environmental assets i.e. green buildings, STPs and water treatment plants under the supervision of our expert engineers.",
      },
      {
        pageLink: "service-details-left-sidebar",
        img: "service3.jpg",
        iconClass: "flaticon-015-cart",
        serviceTitle: "Estimation and Surveying",
        serviceSubtitle:
          "As a service provider we do our best in surveying the property's area and provide the estimation with maximum accuracy.",
      },
      {
        pageLink: "service-details-left-sidebar",
        img: "service-3.jpg",
        iconClass: "flaticon-010-tank-1",
        serviceTitle: "Map Approval",
        serviceSubtitle:
          "We create all types of drawings and maps for your property that suit your requirements by utilizing optimum space to fulfill the requirement as well as with application of vaastu expertisation.",
      },
      {
        pageLink: "service-details-left-sidebar",
        img: "service-2.jpg",
        iconClass: "flaticon-004-walkie-talkie",
        serviceTitle: "3D Views",
        serviceSubtitle:
          "We create a 3D View models for your property to bring your imagination in front of you for better perception and easing of construction.",
      },
      {
        pageLink: "service-details-left-sidebar",
        img: "service-1.jpg",
        iconClass: "flaticon-002-welding",
        serviceTitle: "Portfolio of Works",
        serviceSubtitle:
          "Ark-Tech Engineering Services is having experience of the construction and designing of thousands of buildings, as residential and commercial complexes in multi storied buildings, malls, auditorium, hostel and hospital buildings, buildings related to environmental assets i.e. green buildings, STPs and water treatment plants under the supervision of our expert engineers.",
      },
    ];

    let Datalist = data.map((val, i) => {
      return (
        <div
          className="col-lg-4 col-md-6 col-12 section-space--bottom--30"
          key={i}
        >
          <div className="service-grid-item">
            <div className="service-grid-item__image">
              <div className="service-grid-item__image-wrapper">
                <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
                  <img
                    src={`assets/img/service/${val.img}`}
                    className="img-fluid"
                    alt="Service Grid"
                  />
                </a>
              </div>
              <div className="icon">
                <i className={val.iconClass} />
              </div>
            </div>
            <div className="service-grid-item__content">
              <h3 className="title">
                <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
                  {val.serviceTitle}
                </a>
              </h3>
              <p className="subtitle">{val.serviceSubtitle}</p>
              {/* <a
                href={`${process.env.PUBLIC_URL}/${val.pageLink}`}
                className="see-more-link"
              >
                SEE MORE
              </a> */}
            </div>
          </div>
        </div>
      );
    });

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
                                    <h1>Service</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li>Service</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
        {/*====================  End of breadcrumb area  ====================*/}

        {/*====================  service page content ====================*/}
        <div className="page-wrapper section-space--inner--120">
          {/*Service section start*/}
          <div className="service-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="service-item-wrapper">
                    <div className="row">{Datalist}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Service section end*/}
        </div>

        {/*====================  End of service page content  ====================*/}

        {/* Brand logo */}
        <BrandLogoSlider background="grey-bg" />

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default Services;
