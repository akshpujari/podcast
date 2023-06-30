import Footer from "./footer";

function BodyBottom() {
    return (
        <div className="px-44 mt-28 mx-auto text-center"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}bg-graphic-bottom.svg)`,
                maxWidth: '90rem',
            }}>
            <div className="text-2xl leading-tight font-bold">
                We have what you’re looking for
            </div>
            <div className="w-2/5 mt-6 leading-5 text-xs m-auto poppins text-blue-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a
            </div>
            <button className="py-5 px-14 my-20 text-white">Get Started Now</button>
            <Footer></Footer>
        </div>
    )
}

export default BodyBottom;