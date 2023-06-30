import AboutCourse from "./about";
import Cards from "./cards";

function Course() {
    return (
        <div className="text-black flex flex-wrap">
            <Cards></Cards>
            <div className="w-2/5">
                <AboutCourse></AboutCourse>
            </div>
        </div>
    )
}

export default Course;