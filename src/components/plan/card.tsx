function PlanCard() {
    return (
        <div
            style={{ border: '1px solid #7A3199' }}
            className="w-72 p-7 rounded-lg"
        >
            <div className="font-bold">
                Basic Plan
            </div>
            <div className="text-xs poppins mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
            </div>
            <div className="my-6 text-3xl font-bold purple">$ 54 <span className="text-sm ml-3 font-normal">/month</span></div>
            <ul className="font-bold text-xs mb-8">
                <li className="leading-5">Free access to video class</li>
                <li className="leading-5">Free access to video class</li>
                <li className="leading-5">Free access to video class</li>
            </ul>
            <button className="aks-outline py-3 px-8 text-xs">
                Start Free Trial
            </button>
        </div>
    )
}

export default PlanCard;