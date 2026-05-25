import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MainLayout() {
    return (
    <div className="min-h-screen w-full flex flex-col bg-[#fdfaf6]">

    <Navbar />

    <main className="flex-1 w-full flex flex-col">
        <Outlet />
    </main>

    <Footer />

    </div>
)
}

export default MainLayout