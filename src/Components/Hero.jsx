const Hero = () => {
    return (
        <main className="hero">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe doloribus tempore commodi aliquid nemo reiciendis culpa quisquam magnam laborum. Deserunt voluptas soluta id, illo esse, doloribus aliquid facere laboriosam totam, quam obcaecati delectus quaerat?</p>

                <div className="hero-btn">
                    <button>Shop now</button>
                    <button>Categories</button>
                </div>
                <div className="shop">
                    <p>Also avaliable on</p>
                    <div className="brand-icon">
                        <img src="/images/amazon.png" alt="" />
                        <img src="/images/flipkart.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/shoe.png" alt="error" />
            </div>
        </main>
    );
}

export default Hero