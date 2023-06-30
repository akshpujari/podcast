import BgPodcast from "./bg-podcast";
import PlanCards from "./cards";
import Duration from "./duration";
import PlanHeader from "./header";

function Plan() {
    return (
        <div className="mt-28 mx-auto relative" style={{ maxWidth: '90rem' }}>
            <PlanHeader></PlanHeader>
            <Duration></Duration>
            <BgPodcast></BgPodcast>
            <PlanCards></PlanCards>
        </div>
    )
}

export default Plan;