import "./header.css"

const Header = () => {
    return (
        <div className="header">
        <ul className="nav-list">
            <li className="nav-list__item">Home</li>
            <li className="nav-list__item">About</li>
            <li className="nav-list__item">Contacts</li>
        </ul>
        <h1 className="title">Lendie</h1>
        <button className="btn" type="button">Buy Now</button>
        </div>
    )
}
export default Header