import React, { Component } from "react";
import { inject } from "mobx-react";
import Iframe from 'react-iframe'

class Header extends Component {


    render() {
        return (
            <div className="features section">
                <div className="container">
                    <div className="features-inner section-inner has-bottom-divider">
                        <div className="features-wrap">
                            <div className="feature text-center is-revealing">
                                <div className="feature-inner">
                                    <div className="feature-icon">
                                        <img src="https://i.ibb.co/nzD74jT/Image-One.png" alt="Feature 01"></img>
                                    </div>
                                    <p className="text-sm mb-0">If you use Google Ads today, most likely you allocate at
                                    least 80% of you budget in
                                    Search and Shopping ads.</p>
                                </div>
                            </div>
                            <div className="feature text-center is-revealing">
                                <div className="feature-inner">
                                    <div className="feature-icon">
                                        <img src="https://i.ibb.co/fv1dnBb/Image-Two.jpg" alt="Feature 02"></img>
                                    </div>
                                    <p className="text-sm mb-0">Google Display Network seems trickier. It requires content
                                    creation, bidding and
                                    targeting.</p>
                                </div>
                            </div>
                            <div className="feature text-center is-revealing">
                                <div className="feature-inner">
                                    <div className="feature-icon">
                                        <img src="https://i.ibb.co/DQ2MkCD/Image-Three.jpg" alt="Feature 03"></img>
                                    </div>
                                    <p className="text-sm mb-0">With SLEVA you can create hundr eds of videos ads, and use
                                    them in Google Smart
                                    Display campaign in a few clicks. You will gain a unique combination of
                                    branding, website
                                    traffic and ROAS – better than most of your existing campaigns.</p>
                                </div>
                            </div>
                            <div className="feature text-center is-revealing">
                                <div className="feature-inner">
                                    <div className="feature-icon">
                                        <Iframe width="450" height="315" src="https://www.youtube.com/embed/bz742mHxeZo" />

                                    </div>
                                    <p className="text-sm mb-0">see a short illustration of the system</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header;
