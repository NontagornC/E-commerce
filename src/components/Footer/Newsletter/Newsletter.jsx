import "./Newsletter.scss";
import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa"

const Newsletter = () => {
    return (
        <div className="newsletter_section">
            <div className="newsletter_content">
                <span className="small_text">
                    SUBSCRIBE
                </span>
                <span className="big_text">
                    Sign up for New Product
                </span>
                
                <div className="form">
                    <input type="text" placeholder="Email Address"/>
                    <button>Subscribe</button>
                </div>
                <div className="text">
                    Will be used in accordacne with our Privacy
                </div>
                <div className="social_icons">
                    <div className="icon">
                        <FaFacebookF size={14}/>
                    </div>
                    <div className="icon">
                        <FaTwitter size={14}/>
                    </div>
                    <div className="icon">
                        <FaInstagram size={14}/>
                    </div>
                    <div className="icon">
                        <FaLinkedinIn size={14}/>
                    </div>
                </div>
            </div>
        </div>
        );
};

export default Newsletter;
