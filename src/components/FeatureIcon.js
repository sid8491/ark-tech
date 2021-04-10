import React, { Component } from 'react';

class FeatureIcon extends Component{
    render(){

        let data = [
            {featureIcon: "feature-1.png", featureTitle: "Project Planning", featureDescription: "Architectural Planning and Designing"},
            {featureIcon: "feature-2.png", featureTitle: "Construction and Supervision", featureDescription: "We provide the best services for construction of buildings under the supervision of our expert engineers"},
            {featureIcon: "feature-3.png", featureTitle: "Estimation and Surveying", featureDescription: "As a service provider we do our best in surveying the property's area and provide the best estimation"}
        ];

        let Datalist = data.map((val, i)=>{
            return(
                <div className="col-lg-4 col-md-6 col-12 section-space--bottom--30" key={i}>
                    <div className="feature">
                    <div className="icon">
                        <img src={`assets/img/icons/${val.featureIcon}`} className="img-fluid" alt="" />
                    </div>
                    <div className="content">
                        <h3>{val.featureTitle}</h3>
                        <p>{val.featureDescription}</p>
                    </div>
                    </div>
                </div>
            )
        });

        return(
            <div>
                {/*Feature section start*/}
                <div className={`feature-section section-space--inner--100 ${this.props.background}`}>
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="feature-item-wrapper">
                                <div className="row">
                                    {Datalist}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Feature section end*/}
            </div>
        )
    }
}

export default FeatureIcon;