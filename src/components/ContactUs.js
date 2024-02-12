import React from "react";
import '../assets/styles/contact-us.css';
import { CoreForm } from "@kineticdata/react/lib/components";

export const ContactUs = () => {
    return (
        <>
            <div className="page-header">
                <span className="page-header-title">
                    CONTACT US
                </span>
            </div>
            <div className="content-wrapper">
                <div className="contact-centered-column">
                    <div className="contact-us-dbl-col">
                        <div className="contact-col-left">
                            <div className="contact-us-big-text">
                                DASA (DES) ASAALT encourages interested industry, academia
                                and non-traditional potential partners to contact us through the
                                following links:
                            </div>
                            <div className="contact-us-med-text-bold">
                                DASA (DES) Headquarters – Public Affairs Office
                            </div>
                            <div className="contact-item">
                                <div className="contact-sm-title">
                                    Point of Contact:
                                </div>
                                <div className="contact-sm-text">
                                    DASA (DES) Public Affairs Office
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-sm-title">
                                    Public Affairs Office Mailbox:
                                </div>
                                <div className="contact-sm-email">
                                    dasades@army.mil
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-sm-title">
                                    Address for Mail Correspondence:
                                </div>
                                <div className="contact-sm-text">
                                    U.S. Army DASA (DES) Headquarters<br/>
                                    ATTN: Strategic Communications and Public Affairs Office<br/>
                                    6662 Gunner Circle, Building 3071, Room 219<br/>
                                    Aberdeen Proving Ground, Maryland 21005<br/>
                                    USA
                                </div>
                                <div className="contact-icon-wrapper">
                                    <i className="fa-brands fa-facebook-f contact-icon" />
                                    <i className="fa-brands fa-x-twitter contact-icon" />
                                    <i className="fa-brands fa-linkedin-in contact-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="contact-col-right">
                            <CoreForm
                                kapp='services'
                                form='contact-us'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}