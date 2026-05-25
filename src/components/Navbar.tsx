import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
            <h2>Nutricionista Najara Limeira</h2>

            <ul className="flex gap-8 text-gray-700 font-medium">
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