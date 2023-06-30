import ReviewCards from "./cards";
import CustomersReview from "./customers-review";


function Review() {
    return (
        <div className="py-24 px-44">
            <CustomersReview></CustomersReview>
            <div className="py-9">
                <ReviewCards></ReviewCards>
            </div>
        </div>
    )
}

export default Review;