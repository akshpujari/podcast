function Footer() {
    return (
        <div className="flex text-xs justify-between text-white border-t-white px-14 py-7" style={{ borderTopWidth: 0.5 }}>
            <div>
                All Right Reserved @Copyright 2023
            </div>
            <div className="flex gap-16">
                <div className="flex gap-6">
                    <div>Terms of Service</div>
                    <div>Privacy Policy</div>
                    <div>Product</div>
                </div>
                <div className="flex gap-4">
                    <img src="facebook.svg" />
                    <img src="youtube.svg" />
                    <img src="instagram.svg" />
                    <img src="twitter.svg" />
                </div>
            </div>
        </div>
    )
}

export default Footer;