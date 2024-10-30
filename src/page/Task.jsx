import { useParams } from 'react-router-dom';
import '../styles/Task.css'
import { useEffect, useState } from 'react';
import courses from '../courses';
import arrow2 from '../assets/arrow2.svg'
import journey from '../assets/journey.svg'
import pending from '../assets/pending.svg'
import accepted from '../assets/accepted.svg'
import view from '../assets/view.svg'
import hamburger from '../assets/hamburger.svg'

function Task({ setSlug, navOpen, setNavOpen }) {
    const { slug } = useParams();
    const [course, setCourse] = useState(null);
    const tasks = [
        {
            heading: "HTML: Structuring Web Page",
            status: "Pending",
            tasklink: "/",
            submitlink: "/"
        },
        {
            heading: "HTML: Structuring Web Page",
            status: "Approved",
            tasklink: "/",
            submitlink: "/"
        },
        {
            heading: "HTML: Structuring Web Page",
            status: "Pending",
            tasklink: "/",
            submitlink: "/"
        },
        {
            heading: "HTML: Structuring Web Page",
            status: "Pending",
            tasklink: "/",
            submitlink: "/"
        },
        {
            heading: "HTML: Structuring Web Page",
            status: "Pending",
            tasklink: "/",
            submitlink: "/"
        },
        {
            heading: "HTML: Structuring Web Page",
            status: "Pending",
            tasklink: "/",
            submitlink: "/"
        },
        {
            heading: "HTML: Structuring Web Page",
            status: "Pending",
            tasklink: "/",
            submitlink: "/"
        },
        {
            heading: "HTML: Structuring Web Page",
            status: "Pending",
            tasklink: "/",
            submitlink: "/"
        },
        {
            heading: "HTML: Structuring Web Page",
            status: "Pending",
            tasklink: "/",
            submitlink: "/"
        },
        {
            heading: "HTML: Structuring Web Page",
            status: "Pending",
            tasklink: "/",
            submitlink: "/"
        },
        {
            heading: "HTML: Structuring Web Page",
            status: "Pending",
            tasklink: "/",
            submitlink: "/"
        },
        {
            heading: "HTML: Structuring Web Page",
            status: "Pending",
            tasklink: "/",
            submitlink: "/"
        },
    ]
    useEffect(() => {
        let cou = courses.filter((item) => item.slug == slug);
        if (cou && cou.length) {
            setCourse(cou[0]);
        }
        setSlug(slug);
    }, [slug])
    return (
        <>
            <div className="umnd-task">
                <div className="umnd-task-top">
                    {
                        !navOpen && <img src={hamburger} alt="Hamburger" style={{ cursor: "pointer" }} onClick={() => setNavOpen(true)} />
                    }
                    <img src={arrow2} alt="Arrow2" />
                    <p>{course?.name}</p>
                </div>
                <div className="umnd-task-bottom">
                    <div className="umnd-task-main">
                        <div className="umnd--main-task-top">
                            <img src={journey} alt="Journey" />
                            <p>Assignments </p>
                        </div>
                        <div className="umnd-tm-tasks">
                            <div className="umnd-tm-row umnd-tm-row-top">
                                <p className="umnd-row-top-para1">No.</p>
                                <p className="umnd-row-top-para2">Task</p>
                                <p className="umnd-row-top-para3">Status</p>
                                <p className="umnd-row-top-para4">Actions</p>
                            </div>
                            {
                                tasks.map((item, idx) => (<div className="umnd-tm-row umnd-tm-row-tasks" key={idx}>
                                    <div className="umnd-tmr-no">
                                        <p>{idx + 1}</p>
                                    </div>
                                    <div className="umnd-tmr-heading">{item.heading}</div>
                                    <div className="umnd-tmr-status">
                                        {
                                            item.status == "Pending" ? <img src={pending} alt="Pending" /> :
                                                <img src={accepted} alt="Accepted" />
                                        }
                                        <span>{item.status}</span>
                                    </div>
                                    <div className="umnd-tmr-actions">
                                        <div className="umnd-tmra-view">
                                            <span>View Task</span>
                                            <img src={view} alt="View" />
                                        </div>
                                        <div className="umnd-tmra-submit">
                                            {
                                                item.status == "Approved" ? "View Feedback" : "Submit Task"
                                            }
                                        </div>
                                    </div>
                                </div>))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Task;