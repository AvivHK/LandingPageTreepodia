import React, { Component } from "react";
import * as firebase from 'firebase';
import axios from "axios";
const userRoute = "http://localhost:4200";



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
            industryOther: "",
            email: "",
            phone: "",
            boolIndustry: false,
            requireFirstName: false,
            requireFamilyName: false,
            requireCompany: false,
            requireWebsite: false,
            requireIndustry: false,
            requireIndustryOther: false,
            requireEmail: false,
        }
    }

    sendMail = async () => {
        await axios.post(`${userRoute}/sendmail`, {
            firstName: this.state.firstName,
            familyName: this.state.familyName,
            company: this.state.company,
            website: this.state.website,
            industry: this.state.industry,
            industryOther: this.state.industryOther,
            email: this.state.email,
            phone: this.state.phone
        });
    }

    buttonClicked = async () => {
        this.sendMail()
        await this.checkValues()
        console.log(this.state.requireFirstName)
        console.log(this.state.requireFamilyName)
        console.log(this.state.requireCompany)
        console.log(this.state.requireWebsite)
        console.log(this.state.requireIndustry)
        console.log(this.state.requireEmail)
        console.log(this.state.requireIndustryOther)

        if (this.state.requireFirstName && this.state.requireFamilyName && this.state.requireCompany && this.state.requireWebsite && this.state.requireIndustry && this.state.requireIndustryOther && this.state.requireEmail) {
            app.database().ref('users' + this.state.email).set({
                firstName: this.state.firstName,
                familyName: this.state.familyName,
                company: this.state.company,
                website: this.state.website,
                industry: this.state.industry,
                email: this.state.email,
                phone: this.state.phone,
            });
            console.log("avov")
        }
    }

    checkValues = async () => {
        if (this.state.firstName === "") {
            await this.setState({
                requireFirstName: true
            })
        }
        else {
            await this.setState({
                requireFirstName: false
            })
        }
        if (this.state.familyName === "") {
            await this.setState({
                requireFamilyName: true
            })
        }
        else {
            await this.setState({
                requireFirstName: false
            })
        }
        if (this.state.company === "") {
            await this.setState({
                requireCompany: true
            })
        }
        else {
            await this.setState({
                requireFirstName: false
            })
        }
        if (this.state.website === "") {
            await this.setState({
                requireWebsite: true
            })
        }
        else {
            await this.setState({
                requireFirstName: false
            })
        }
        if (this.state.industry === "") {
            await this.setState({
                requireIndustry: true
            })
        }
        else {
            await this.setState({
                requireFirstName: false
            })
        }
        if (this.state.industryOther === "" && this.state.industry === "other") {
            await this.setState({
                requireIndustryOther: true
            })
        }
        if (this.state.email === "") {
            await this.setState({
                requireEmail: true
            })
        }
    }


    changeValue = async event => {
        await this.setState({
            [event.target.id === "firstNameInput" ? "firstName" : event.target.id === "lastNameInput" ? "familyName" : event.target.id === "companyInput" ? "company" : event.target.id === "websiteInput" ? "website" : event.target.id === "IndustrySelect" ? "industry" : event.target.id === "industryOtherInput" ? "industryOther" : event.target.id === "emailInput" ? "email" : "phone"]: event.target.value
        })
        if (this.state.industry === "other") {
            this.setState({
                boolIndustry: true
            })
        }
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
                                            {this.state.requireFirstName ? <div className='required'>Must be bigger then 3 characters</div> : null}
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
                                        {this.state.boolIndustry ? <li id="industryOther" className="labelAndInput">
                                            <span className="label">Other:</span>
                                            <input id="industryOtherInput" className="myInput" onChange={this.changeValue} value={this.state.industryOther}></input>
                                        </li> : null}
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
            </div >
        )
    }

}

export default Bottom;
