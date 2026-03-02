import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/sidebar.css";

export default function Sidebar() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth?.logout();
    navigate("/");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <nav className="sidebar-nav">

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link text-subtitle-24-semibold active"
                : "sidebar-link text-subtitle-24"
            }
          >
            Inicio
          </NavLink>

          <NavLink to="/transfer" className="sidebar-link text-subtitle-24">
            Transferir
          </NavLink>

          <NavLink to="/recharge" className="sidebar-link text-subtitle-24">
            Recargar
          </NavLink>

          <NavLink
            to="/exchange"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link text-subtitle-24-semibold active"
                : "sidebar-link text-subtitle-24"
            }
          >
            Intercambiar
          </NavLink>

          <NavLink to="/profile" className="sidebar-link text-subtitle-24">
            Perfil
          </NavLink>

          <NavLink to="/help" className="sidebar-link text-subtitle-24">
            Ayuda
          </NavLink>

        </nav>

        <button
          className="logout-btn text-subtitle-24"
          onClick={handleLogout}
        >
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}