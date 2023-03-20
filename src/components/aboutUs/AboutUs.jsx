import "./AboutUs.scss"
import aboutImg from "../../assets/about.jpg"

const About =()=>{
    return (
        <div className="main">
            <div className="text_container">
                <h1>Why Choose Us</h1>
                <span>Welcome to <span>NTGStore.</span>, your store all your online shopping needs! We are an e-commerce store committed to providing you with an exceptional shopping experience.</span>
            </div>
            <div className="detail_container">
                <div className="left">
                    <img src={aboutImg} alt="" />
                </div>
                <div className="right">
                    <h1>Our team at <span>ntgstore</span> is dedicated to offering a wide variety of <span>high-quality products at competitive prices</span></h1>
                    <span>Whether you're looking for the latest fashion trends, the newest technology, or the perfect gift for a loved one, we've got you covered. Our extensive product range includes everything from clothing, accessories, electronics, home goods, and much more.</span>
                </div>
            </div>
        </div>
    )
}

export default About