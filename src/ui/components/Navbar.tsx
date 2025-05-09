import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Cutit
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/home"
                    >
                        Inicio
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/products"
                    >
                        Productos
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/customers"
                    >
                        Clientes
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/inventories"
                    >
                        Inventarios
                    </NavLink>
                </div>
            </div>

            {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div> */}
        </nav>
    )
}