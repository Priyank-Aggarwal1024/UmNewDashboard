import '../styles/Sidebar.css'
import arrow from '../assets/arrow.svg'
import logo from '../assets/logo.svg'
import logoutImg from '../assets/logout.svg'
import avatar from '../assets/avatar.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import dashicon from '../assets/dashicon.svg'
import taskicong from '../assets/taskicong.svg'
import hackicon from '../assets/hackicon.svg'
import cross from '../assets/cross.svg'
function Sidebar({ slug, navOpen, setNavOpen }) {
    const navigate = useNavigate()

    return (
        <div className={`umnd-sidebar ${navOpen && "sidebar-nav-show"}`}>
            <div className="umnd-sidebar-top">
                <div className="umnd-st-nav">
                    <div className="umnd-st-arrow" onClick={() => navigate("/")}>
                        <img src={arrow} alt="Arrow" />
                    </div>
                    <div className="sidebar-close-icon">

                        {
                            navOpen && <img src={cross} alt='Cross' style={{ cursor: "pointer" }} onClick={() => setNavOpen(false)} />
                        }
                    </div>

                </div>
                <div className="umnd-st-logo">
                    <img src={logo} alt="Logo" />
                </div>
                {
                    slug && <div className="umnd-st-navlinks">
                        <NavLink to={`/course/${slug}`} className="umnd-st-navlink">
                            <img src={dashicon} alt="Dash Icon" />
                            <p>Dashboard</p>
                        </NavLink>
                        <NavLink to={`/task/${slug}`} className="umnd-st-navlink">
                            <img src={taskicong} alt="Task Icon" />
                            <p>Tasks</p>
                        </NavLink>
                        <NavLink to={"/"} className="umnd-st-navlink unmd-st-hackathon">
                            <img src={hackicon} alt="Hack Icon" />
                            <p>Hackathon</p>
                            <div className="unmd-st-hack-new">New</div>
                        </NavLink>
                    </div>
                }
            </div>
            <div className="umnd-sidebar-bottom">
                <div className="umnd-sb-user">
                    <img src={avatar} alt="Avatar" />
                    <div className="umnd-sbu-username">Salmaan Ahmed</div>
                </div>
                <div className="umnd-sb-logout">
                    <img src={logoutImg} alt="Logout " />
                    <p>Logout</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;