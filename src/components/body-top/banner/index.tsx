import BannerMedia from "./media";
import BannerSignUp from "./title";

function Banner() {
    return (
        <div className="flex py-24">
            <BannerSignUp></BannerSignUp>
            <BannerMedia></BannerMedia>
        </div>
    )
}

export default Banner;