import React, { Component } from "react";
import { inject } from "mobx-react";
import Iframe from 'react-iframe'


class Header extends Component {


    render() {
        return (
            <div className="hero">
                <div className="container">
                    <div className="hero-inner">
                        <div className="hero-copy">
                            <h1 className="hero-title mt-0">Create video ads in Google in a few clicks</h1>
                            <p className="hero-paragraph">benefit the power of AI to create powerful video ads.</p>
                            <Iframe width="450" height="250" url="https://www.youtube.com/embed/Q4qAge6FSX0?autoplay=1"/>
                            <div className="hero-figure anime-element">
                                <div className="hero-figure-box hero-figure-box-01" data-rotation="45deg"></div>
                                <div className="hero-figure-box hero-figure-box-02" data-rotation="-45deg"></div>
                                <div className="hero-figure-box hero-figure-box-03" data-rotation="0deg"></div>
                                <div className="hero-figure-box hero-figure-box-04" data-rotation="-135deg"></div>
                                <div className="hero-figure-box hero-figure-box-05"></div>
                                <div className="hero-figure-box hero-figure-box-06"></div>
                                <div className="hero-figure-box hero-figure-box-07"></div>
                                <div className="hero-figure-box hero-figure-box-08" data-rotation="-22deg"></div>
                                <div className="hero-figure-box hero-figure-box-09" data-rotation="-52deg"></div>
                                <div className="hero-figure-box hero-figure-box-10" data-rotation="-50deg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header;
