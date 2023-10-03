import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='layout'>
            <header className='mt-5'>
                <div className='flex justify-around space-x-4'>
                    <div className="logo">M<span>AD</span></div>
                    <ul className='flex justify-center space-x-4'>
                        <li><NavLink to={"/home"}className={"font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"} >Home</NavLink></li>
                        <li><NavLink to={"/about"}className={"font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"} >Portfolio</NavLink></li>
                        <li><NavLink to={"/works"}className={"font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"} >Works</NavLink></li>
                        <li><NavLink to={"/skills"}className={"font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"} >Skills</NavLink></li>
                        <li><NavLink to={"/contact"}className={"font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"} >Contact</NavLink></li>
                    </ul>
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