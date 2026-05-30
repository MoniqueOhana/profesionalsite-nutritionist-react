import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
    return (
        <nav className="w-full bg-[#BAE6A7] shadow-md mb-20">
      <div className="max-w-7xl mx-auto px-16 py-7 flex items-center justify-between">
            <img
  src={logo}
  alt="Logo Nutricionista"
  className="w-[180px] object-contain"
/>

            <ul className="flex gap-10 text-[#3f3f3f] text-2xl font-bold-600 font-['Cormorant_Garamond']">
                <li>
            <NavLink
            to="/"
            className={({ isActive }) =>
                isActive
                ? 'text-orange-500'
                : 'hover:text-orange-500 transition'
            }
            >
            Home
            </NavLink>
        </li>

        <li>
            <NavLink
            to="/aboutme"
            className={({ isActive }) =>
                isActive
                ? 'text-orange-500'
                : 'hover:text-orange-500 transition'
            }
            >
            Sobre Mim
            </NavLink>
        </li>

        <li>
            <NavLink
            to="/services"
            className={({ isActive }) =>
                isActive
                ? 'text-orange-500'
                : 'hover:text-orange-500 transition'
            }
            >
            Serviços
            </NavLink>
        </li>

        <li>
            <NavLink
            to="/testimonials"
            className={({ isActive }) =>
                isActive
                ? 'text-orange-500'
                : 'hover:text-orange-500 transition'
            }
            >
            Depoimentos
            </NavLink>
        </li>

        <li>
            <NavLink
            to="/contact"
            className={({ isActive }) =>
                isActive
                ? 'text-orange-500'
                : 'hover:text-orange-500 transition'
            }
            >
            Contato
            </NavLink>
        </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;