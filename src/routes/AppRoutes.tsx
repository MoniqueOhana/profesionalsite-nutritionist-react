import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import Services from '../pages/Services'
import Testimonials from '../pages/Testimonials'
import Contact from '../pages/Contact'
import MainLayout from '../layouts/MainLayout'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/services" element={<Services />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;