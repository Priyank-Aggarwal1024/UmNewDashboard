import '../styles/AllCourses.css'
import arrow2 from '../assets/arrow2.svg'
import whatsapp from '../assets/whatsapp.svg'
import medal from '../assets/medal.svg'
import journey from '../assets/journey.svg'
import courses from '../courses'
import { Link } from 'react-router-dom'
import arrow3 from '../assets/arrow3.svg'
import hamburger from '../assets/hamburger.svg'

function AllCourses({ navOpen, setNavOpen }) {
    return (
        <>
            <div className="umnd-allcourses">
                <div className="umnd-allcourses-top">
                    <div className="umnd-act-left">
                        {
                            !navOpen && <img src={hamburger} alt="Hamburger" style={{ cursor: "pointer" }} onClick={() => setNavOpen(true)} />
                        }
                        <img src={arrow2} alt="Arrow" style={{ cursor: "pointer" }} />
                        <p>Hey, Salmaan. Select Your Courses!!</p>
                    </div>
                    <div className="umnd-act-right">
                        <div className="umnd-actr-achivement">
                            <img src={medal} alt="Medal" />
                            <div className="umnd-actra-para1">Bronze
                                <span className="font-ma"> I</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7" viewBox="0 0 8 7" fill="none">
                                <circle cx="3.69682" cy="3.44956" r="3.39994" fill="white" fillOpacity="0.1" />
                            </svg>
                            <div className="umnd-actra-para2">48 XP</div>
                        </div>
                        <div className="umnd-actr-whatsgroup">
                            <img src={whatsapp} alt="Whats App" />
                            <p>Join Whatsapp Group</p>
                        </div>
                    </div>
                </div>
                <div className="umnd-allcourses-bottom">
                    <div className="umnd-acb-inner">
                        <div className="umnd-acb-top">
                            <img src={journey} alt="Journey" />
                            <p>Select Your Courses</p>
                        </div>
                        <div className="umnd-acb-bottom">
                            {
                                courses.map((item, idx) => (<Link to={`/course/${item.slug}`} className="umnd-acb-course" key={idx}>
                                    <div className="umnd-acbc-left">
                                        <img src={item.icon} alt={item.name} className="umnd-acbc-left-icon" />
                                        <p>{item.name}</p>
                                    </div>
                                    <div className="umnd-acbc-right">
                                        <img src={arrow3} alt="Arrow 3" />
                                    </div>
                                </Link>))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllCourses;