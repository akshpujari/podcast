function ReviewCard() {
    return (
        <div className="px-9 py-12 shadow-lg rounded-lg" style={{ width: 465 }}>
            <div className="flex gap-5">
                <img src="Lolla 1.png"></img>
                <div>
                    <div className="font-bold">Lolla Smith</div>
                    <div className="text-sm">Microsoft</div>
                    <img src="Frame 20.png"></img>
                </div>
            </div>
            <div className="poppins text-xs mt-6 leading-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make             </div>
        </div>
    )
}

export default ReviewCard;