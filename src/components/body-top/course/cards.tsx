import Card from "./card";

function Cards() {
    return (
        <div className="w-3/5">
            <div className="flex gap-4">
                <div className="relative -top-4">
                    <Card></Card>
                </div>
                <div>
                    <Card></Card>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="relative -top-4">
                    <Card></Card>
                </div>
                <div>
                    <Card></Card>
                </div>
            </div>
        </div>
    )
}

export default Cards;