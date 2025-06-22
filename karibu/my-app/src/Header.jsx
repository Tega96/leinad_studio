import "./Header.css"

function Header() {
    return (
        <div className="total">
            <div>
                <img src="https://th.bing.com/th?q=Black+Lab+Dog&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247" 
                    alt=""
                    className="logo-img" />
            </div>
            <div className="">
                <div className="order">
                    <p>View Cart</p>
                    <p>Order</p>
                    <p>History</p>
                </div>
                <div>
                    <label>
                        <input type="text" placeholder="Products, Parts, Keywords Search" />
                        <button>Search</button>
                    </label>
                </div>
                <nav className="nav-bar">
                    <ul className="nav-item">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <p>800-888-8888</p>
                </nav>
            </div>
        </div>
    )
}

export default Header;