import { NavLink, Outlet } from 'react-router-dom'
import Animation from './Animation'

const Layout = () => {
    return (
        <div className='layout'>
            <header>
                <div className="logo">M<span>AD</span></div>
                <ul className='nav-links'>

                    <li className='nav-link '>
                        <NavLink to={"/"} >Home</NavLink>
                        <span className='underline'></span>
                    </li>

                    <li className='nav-link '>
                        <NavLink to={"/about"} >Portfolio</NavLink>
                        <span className='underline'></span>
                    </li>

                    <li className='nav-link '>
                        <NavLink to={"/works"} >Works</NavLink>
                        <span className='underline'></span>
                    </li>

                    <li className='nav-link '>
                        <NavLink to={"/skills"} >Skills</NavLink>
                        <span className='underline'></span>
                    </li>
                </ul>

                <div className="contact-container">
                    <span>Contact</span>
                    <span className='underline'></span>
                </div>

            </header>

            <div className="main">
                <div className="content-wrapper">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout