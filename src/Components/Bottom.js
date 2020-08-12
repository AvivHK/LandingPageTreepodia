import React, { Component } from "react";
import * as firebase from 'firebase';
var app = firebase.initializeApp({
    apiKey: "AIzaSyCRgxI6giUZALWTyPNTwdRlVScDCeYN6CM",
    authDomain: "treepodia-708e6.firebaseapp.com",
    databaseURL: "https://treepodia-708e6.firebaseio.com",
    projectId: "treepodia-708e6",
    storageBucket: "treepodia-708e6.appspot.com",
    messagingSenderId: "629285030890",
    appId: "1:629285030890:web:3f28299879654d2764c093",
    measurementId: "G-MW9EX8PC0H"
});




class Bottom extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            familyName: "",
            company: "",
            website: "",
            industry: "",
            email: "",
            phone: "",
        }
    }

    buttonClicked = () => {
        app.database().ref('users' + this.state.email).set({
            firstName: this.state.firstName,
            familyName: this.state.familyName,
            company: this.state.company,
            website: this.state.website,
            industry: this.state.industry,
            email: this.state.email,
            phone: this.state.phone,
        });
    }

    changeValue = async event => {
        await this.setState({
            [event.target.id === "firstNameInput" ? "firstName" : event.target.id === "lastNameInput" ? "familyName" : event.target.id === "companyInput" ? "company" : event.target.id === "websiteInput" ? "website" : event.target.id === "IndustrySelect" ? "industry" : event.target.id === "emailInput" ? "email" : "phone"]: event.target.value
        })
    }



    render() {
        return (
            <div className="container-sm">
                <div className="pricing-inner section-inner">
                    <div className="pricing-header text-center">
                        <h2 className="section-title mt-0">Contact us today to try it:</h2>
                    </div>
                    <div className="pricing-tables-wrap">
                        <div className="pricing-table">
                            <div className="pricing-table-inner is-revealing">
                                <div className="pricing-table-main">
                                    <div id="forum" className="pricing-table-header pb-24">
                                    </div>
                                    <ul className="pricing-table-features list-reset text-xs">
                                        <li id="firstName" className="labelAndInput">
                                            <span className="label">First Name:</span>
                                            <input id="firstNameInput" className="myInput" onChange={this.changeValue} value={this.state.firstName}></input>
                                        </li>
                                        <li id="familyName" className="labelAndInput">
                                            <span className="label">Family Name:</span>
                                            <input id="lastNameInput" className="myInput" onChange={this.changeValue} value={this.state.familyName}></input>
                                        </li>
                                        <li id="company" className="labelAndInput">
                                            <span className="label">Company:</span>
                                            <input id="companyInput" className="myInput" onChange={this.changeValue} value={this.state.company}></input>
                                        </li>
                                        <li id="website" className="labelAndInput">
                                            <span className="label">Website:</span>
                                            <input id="websiteInput" className="myInput" onChange={this.changeValue} value={this.state.website}></input>
                                        </li>
                                        <li id="industry" className="labelAndInput">
                                            <span className="label">Industry:</span>
                                            <select id="IndustrySelect" onChange={this.changeValue} value={this.state.industry}>
                                                <option value=""></option>
                                                <option value="retail">Retail</option>
                                                <option value="travel">Travel</option>
                                                <option value="services">Services</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </li>
                                        <li id="email" className="labelAndInput">
                                            <span className="label">Email:</span>
                                            <input id="emailInput" className="myInput" onChange={this.changeValue} value={this.state.email}></input>
                                        </li>
                                        <li id="phone" className="labelAndInput">
                                            <span className="label">Phone:</span>
                                            <input id="phoneInput" className="myInput" onChange={this.changeValue} value={this.state.phone}></input>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pricing-table-cta mb-8">
                                    <a id="myBtn" onClick={this.buttonClicked} className="button button-primary button-shadow button-block">I want to learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Bottom;
