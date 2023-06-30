import Banner from "./banner";
import Course from "./course";
import Header from "./header";

function BodyTop() {
    return (
        <div
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}bg-graphic-top.svg)`,
                maxWidth: '90rem'
            }}
            className="px-44 mx-auto"
        >
            <div className="text-white">
                <Header></Header>
                <Banner></Banner>
                <Course></Course>
            </div>
        </div>
    )
}

export default BodyTop;