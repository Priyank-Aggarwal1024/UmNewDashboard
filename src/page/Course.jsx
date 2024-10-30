import { useEffect, useState } from 'react';
import '../styles/Course.css'
import { Link, useParams } from 'react-router-dom';
import arrow2 from '../assets/arrow2.svg'
import progress from '../assets/progress.svg'
import tempVideo from '../assets/temp.mp4'
import courses from '../courses';
import journey from '../assets/journey.svg'
import ibutton from '../assets/ibutton.svg'
import play from '../assets/play.svg'
import playg from '../assets/playg.svg'
import marrow from '../assets/module-arrow.svg'
import hamburger from '../assets/hamburger.svg'
function Course({ setSlug, navOpen, setNavOpen }) {
    const { slug } = useParams();
    const [course, setCourse] = useState(null);
    const [courseContent, setCourseContent] = useState([
        {
            module_name: "Intro to Web Development",
            module_no: 1,
            module_time: "52 min",
            module_lecture_complete: 1,
            module_lecture_total: 3,
            module_lectures: [
                {
                    lecture_no: 1,
                    lecture_name: "Welcome to Android Platform",
                    lecture_completed: true,
                    lecture_link: ""
                },
                {
                    lecture_no: 2,
                    lecture_name: "Some two liner topic statement can be represented in this way",
                    lecture_completed: true,
                    lecture_link: ""
                },
                {
                    lecture_no: 3,
                    lecture_name: "Some two liner topic statement can be represented in this way",
                    lecture_completed: false,
                    lecture_link: ""
                }
            ],
            module_open: true
        },
        {
            module_name: "Intro to Web Development",
            module_no: 2,
            module_time: "52 min",
            module_lecture_complete: 1,
            module_lecture_total: 3,
            module_lectures: [
                {
                    lecture_no: 1,
                    lecture_name: "Welcome to Android Platform",
                    lecture_completed: true,
                    lecture_link: ""
                },
                {
                    lecture_no: 2,
                    lecture_name: "Welcome to Android Platform",
                    lecture_completed: true,
                    lecture_link: ""
                },
                {
                    lecture_no: 3,
                    lecture_name: "Welcome to Android Platform",
                    lecture_completed: false,
                    lecture_link: ""
                }
            ],
            module_open: false
        },
        {
            module_name: "Intro to Web Development",
            module_no: 2,
            module_time: "52 min",
            module_lecture_complete: 1,
            module_lecture_total: 3,
            module_lectures: [
                {
                    lecture_no: 1,
                    lecture_name: "Welcome to Android Platform",
                    lecture_completed: true,
                    lecture_link: ""
                },
                {
                    lecture_no: 2,
                    lecture_name: "Welcome to Android Platform",
                    lecture_completed: true,
                    lecture_link: ""
                },
                {
                    lecture_no: 3,
                    lecture_name: "Welcome to Android Platform",
                    lecture_completed: false,
                    lecture_link: ""
                }
            ],
            module_open: false
        },
        {
            module_name: "Intro to Web Development",
            module_no: 2,
            module_time: "52 min",
            module_lecture_complete: 1,
            module_lecture_total: 3,
            module_lectures: [
                {
                    lecture_no: 1,
                    lecture_name: "Welcome to Android Platform",
                    lecture_completed: true,
                    lecture_link: ""
                },
                {
                    lecture_no: 2,
                    lecture_name: "Welcome to Android Platform",
                    lecture_completed: true,
                    lecture_link: ""
                },
                {
                    lecture_no: 3,
                    lecture_name: "Welcome to Android Platform",
                    lecture_completed: false,
                    lecture_link: ""
                }
            ],
            module_open: false
        },
        {
            module_name: "Intro to Web Development",
            module_no: 2,
            module_time: "52 min",
            module_lecture_complete: 1,
            module_lecture_total: 3,
            module_lectures: [
                {
                    lecture_no: 1,
                    lecture_name: "Welcome to Android Platform",
                    lecture_completed: true,
                    lecture_link: ""
                },
                {
                    lecture_no: 2,
                    lecture_name: "Welcome to Android Platform",
                    lecture_completed: true,
                    lecture_link: ""
                },
                {
                    lecture_no: 3,
                    lecture_name: "Welcome to Android Platform",
                    lecture_completed: false,
                    lecture_link: ""
                }
            ],
            module_open: false
        },
        {
            module_name: "Intro to Web Development",
            module_no: 2,
            module_time: "52 min",
            module_lecture_complete: 1,
            module_lecture_total: 3,
            module_lectures: [
                {
                    lecture_no: 1,
                    lecture_name: "Welcome to Android Platform",
                    lecture_completed: true,
                    lecture_link: ""
                },
                {
                    lecture_no: 2,
                    lecture_name: "Welcome to Android Platform",
                    lecture_completed: true,
                    lecture_link: ""
                },
                {
                    lecture_no: 3,
                    lecture_name: "Welcome to Android Platform",
                    lecture_completed: false,
                    lecture_link: ""
                }
            ],
            module_open: false
        },
    ])
    const handleModuleClick = (index) => {
        const newCc = courseContent.map((item, idx) => {
            if (idx == index) {
                item.module_open = !item.module_open;
                return item;
            }
            return item;
        });
        setCourseContent(newCc);
    }
    const handleClickLectures = (e) => {
        e.stopPropagation();
    }
    useEffect(() => {
        let cou = courses.filter((item) => item.slug == slug);
        if (cou && cou.length) {
            setCourse(cou[0]);
        }
        setSlug(slug)
    }, [slug])
    return (
        <>
            <div className="umnd-course">
                <div className="umnd-course-top">
                    <div className="umnd-act-left">
                        <div className="sidebar-open-icon">

                            {
                                !navOpen && <img src={hamburger} alt="Hamburger" style={{ cursor: "pointer" }} onClick={() => setNavOpen(true)} />
                            }
                        </div>
                        <img src={arrow2} alt="Arrow" style={{ cursor: "pointer" }} />
                        <p>{course?.name}</p>
                    </div>
                    <div className="umnd-ct-right">
                        <div className="umnd-ctr-progress">
                            <div className="umnd-ctr-progress-inner">
                                <img src={progress} alt="Progress" className="umnd-ctr-progress-img" />
                                <p className="umnd-ctr-progress-text" >
                                    69%
                                </p>
                            </div>
                            <div className="umnd-ctrp-para">Your Progress</div>
                        </div>
                        <div className="umnd-ctr-task-outer">
                            <Link to={`/task/${slug}`} className="umnd-ctr-task">Tasks</Link>
                        </div>
                    </div>
                </div>
                <div className="umnd-course-bottom">
                    <div className="umnd-cb-videocontent">
                        <div className="umnd-cbv-video-div">
                            <video src={tempVideo} controls></video>
                        </div>
                        <div className="umnd-cbv-videodetails">
                            <div className="umnd-cbv-vd-module">Module 1. <b>Intro to Web Development</b></div>
                            <div className="umnd-cbv-vd-lecture">Welcome to Android Platform</div>
                        </div>
                    </div>
                    <div className="umnd-cd-coursecontent">
                        <div className="umnd-cdc-top">
                            <img src={journey} alt="Journey" />
                            <div className="umnd-cdc-cc-outr">
                                <p className="umnd-cdc-cc">Course Content</p>
                                <img src={ibutton} alt="iButton" />
                            </div>
                        </div>
                        <div className="umnd-cdc-bottom">
                            {
                                courseContent.map((item, idx) => (<div className={`umnd-cdcb-module ${item.module_open && "open"}`} key={idx} onClick={() => handleModuleClick(idx)}>
                                    <div className="umnd-cdcb-module-header">
                                        <div className={`umnd-cbcdmh-top ${item.module_open && "open"}`}>
                                            <p>Module {item.module_no} : {item.module_name}</p>
                                            <img src={marrow} alt="M Arrow" className={`umnd-cbcdmh-top-img ${item.module_open && "open"}`} />
                                        </div>
                                        <div className="umnd-cbcdmh-bottom">
                                            <span>{item.module_time}</span>
                                            <span className="vertical-line"></span>
                                            <span>{item.module_lecture_complete} / {item.module_lecture_total} lectures</span>
                                        </div>
                                    </div>
                                    {
                                        item.module_open && <div className="umnd-cdcb-lectures" onClick={handleClickLectures}>
                                            {
                                                item.module_lectures.map((lecture, lecidx) => (<div className="umnd-cdcb-lecture" key={lecidx}>
                                                    <img src={play} alt="Play" className="pt-1" />
                                                    <p className="umnd-cdcbl-heading">{lecture.lecture_name}</p>
                                                    {
                                                        lecture.lecture_completed ? <div className="umnd-lecture-checkbox-checked">
                                                            <div className="umnd-lecture-checkbox-checked-inner">✔</div>
                                                        </div> : <div className="umnd-lecture-checkbox">
                                                            <div className="umnd-lecture-checkbox-inner"></div>
                                                        </div>
                                                    }
                                                </div>))
                                            }
                                        </div>
                                    }
                                </div>))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Course;