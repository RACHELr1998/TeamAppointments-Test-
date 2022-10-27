import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/appointments">Appointments</NavLink>
            <span> | </span>
            <NavLink to="/appointments/new">New</NavLink>
        </div>
    );
}

export default Menu;
