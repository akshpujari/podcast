import ReviewCard from "./card";

function ReviewCards() {
    return (
        <div className="flex gap-16 justify-center">
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
            {/* <ReviewCard></ReviewCard> */}
        </div>
    )
}

export default ReviewCards;