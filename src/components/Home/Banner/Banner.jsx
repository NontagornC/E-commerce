import "./Banner.scss";
import BannerImg from "../../../assets/banner_product.webp"
const Banner = () => {
    return (
        <div className="main_banner">
            <div className="content">
                <div className="text_content">
                    <h1>Sales</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Officia maxime omnis ut eveniet quidem fugiat 
                        quibusdam accusantium saepe ratione amet?
                    </p>
                    <div className="btn">
                        <div className="btn_banner">Read More</div>
                        <div className="btn_banner v2">Shop now</div>
                    </div>
                </div>
                <img className="banner_img" src={BannerImg} alt="Banner_image" />
            </div>
        </div>
    );
};

export default Banner;
