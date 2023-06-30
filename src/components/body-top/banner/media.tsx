function BannerMedia() {
    return (
        <div>
            <img
                src={process.env.PUBLIC_URL + 'everyone-is-smiling.png'}
                className="relative left-14"
            />
            <img
                src={process.env.PUBLIC_URL + 'group-business-workers.png'}
                className="relative z-20 -top-48"
            />
        </div>
    )
}

export default BannerMedia;