import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import AllCourses from './page/AllCourses'
import { useEffect, useState } from 'react'
import Course from './page/Course'
import Task from './page/Task'

function App() {
  const [slug, setSlug] = useState(null);
  const { pathname } = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => {
    if ((pathname.includes("/course/")) || (pathname.includes("/task/"))) {
      console.log(pathname)
    } else {
      setSlug(null)
    }
  }, [pathname])
  return (
    <>
      <div className="um-new-dashboard">
        <Sidebar slug={slug} navOpen={navOpen} setNavOpen={setNavOpen} />
        <div className="um-new-dashboard-right">
          <Routes>
            <Route path="/" element={<AllCourses navOpen={navOpen} setNavOpen={setNavOpen} />} />
            <Route path="/course/:slug" element={<Course setSlug={setSlug} navOpen={navOpen} setNavOpen={setNavOpen} />} />
            <Route path="/task/:slug" element={<Task setSlug={setSlug} navOpen={navOpen} setNavOpen={setNavOpen} />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
