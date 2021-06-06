import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {

    return (
        <div className="contactUsMain">

            <div className="content">

                <div className="title">
                    Contact Us
                </div>

                <br /><br /><br /><br /><br />
                
                    <div className="col">

                        <div className="contact_text">
                            <div className="subtitle">
                                BY PHONE
                        </div>

                            <div className="desc">
                            (Monday to Friday, 9am to 6pm PST)
                            <br />
                            <br />
                            Tel : 031-869-9900
                            <br />
                            Fax : 031-869-9909
                                <br />
                                <br />
                                <br />
                            </div>
                        </div>

                        <div className="contact_text2">
                            <div className="subtitle2">
                                E-mail
                            </div>

                            <div className="desc2">
                                (Google)
                                <br />
                                <br />
                                gkstjr6@gmail.com
                                <br />
                                sosto258@kakao.com
                                <br />
                                <br />    
                                <br />
                            </div>
                        </div>

                        <div className="contact_text3">

                        <div className="subtitle3">
                            ACCOUNT
                        </div>

                        <div className="desc3">
                            (KaKao Bank)
                        <br />
                        <br />
                            3333-10-7376587
                        <br />
                        <br />
                        <br />
                        <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;