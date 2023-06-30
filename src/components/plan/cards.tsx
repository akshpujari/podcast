import PlanCard from "./card";
import PlanCardActive from "./card-active";

function PlanCards() {
    return (
        <div className="flex gap-20 justify-center">
            <PlanCard></PlanCard>
            <PlanCardActive></PlanCardActive>
            <PlanCard></PlanCard>
        </div>
    )
}

export default PlanCards;