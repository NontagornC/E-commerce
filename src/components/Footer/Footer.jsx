import "./Footer.scss";
import React from "react";
import { FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa"
import Payment from "../../assets/payments.png"

const Footer = () => {
    return (
    <div className="footer">
        <div className="foot_content">
            <div className="col">
                <div className="title">
                    Contact
                </div>
                <div className="c_item">
                    <FaLocationArrow/>
                    <div className="text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    </div>
                </div>
                <div className="c_item">
                    <FaMobileAlt/>
                    <div className="text">
                    Phone : 088 226 6676
                    </div>
                </div>
                <div className="c_item">
                    <FaEnvelope/>
                    <div className="text">
                    e-mail: nontagorn.store@gmail.com
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Category</div>
                <div className="text">Electronics</div>
                <div className="text">Jewelery</div>
                <div className="text">Men's Clothing</div>
                <div className="text">Woman's Clothing</div>

            </div>
            <div className="col">
                <div className="title">Page</div>
                <div className="text">Home</div>
                <div className="text">About</div>
                <div className="text">Privacy Policy</div>
                <div className="text">Returns</div>
                <div className="text">Term & Conditions</div>
                <div className="text">Contact Us</div>
            </div>
        </div>
        <div className="bottom_bar">
            <div className="bottom_bar_content">
                <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Atque repellendus provident quasi eum, quaerat quis?
                </div>
                <img src={Payment} alt="payment" />
            </div>
        </div>
    </div>
    );
};

export default Footer;
