import { NavLink } from "react-router-dom";


export default function Navbar() {


    return (
        <>
            <div className="navbar-container">
                <ul>
                    <li >
                        <NavLink to='/'>HOME</NavLink>
                    </li>
                    <li >
                        <NavLink to='/posts'>POSTS</NavLink>
                    </li>
                    <li >
                        <NavLink to='/about'>ABOUT</NavLink>
                    </li>
                </ul>
            </div>

        </>
    )
}
