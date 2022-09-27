import {NavLink} from "react-router-dom";
import './app-bar.css'

const AppBar = () => {
    return (
        <nav className="nav">
            <NavLink className="link" to="/react-execises">Home</NavLink>
            <NavLink className="link" to="/landie">Landie</NavLink>
        </nav>
    )
}

export default AppBar;