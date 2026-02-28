import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    display: "block",
    padding: "10px 0",
    color: "white",
    textDecoration: "none",
    fontWeight: isActive ? "bold" : "normal",
    background: isActive ? "rgba(255,255,255,0.2)" : "transparent",
    borderRadius: "8px",
    paddingLeft: "10px",
  });

  const handleLogout = () => {
    auth?.logout();
    navigate("/");
  };

  return (
    <div
      style={{
        width: "250px",
        background: "#1f7a8c",
        color: "white",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h3>VitaWallet</h3>

        <nav style={{ marginTop: "30px" }}>
          <NavLink to="/dashboard" style={linkStyle}>
            Inicio
          </NavLink>
          <NavLink to="/" style={linkStyle}>
            Transferir
          </NavLink>
          <NavLink to="/" style={linkStyle}>
            Recargar
          </NavLink>
          <NavLink to="/exchange" style={linkStyle}>
            Intercambiar
          </NavLink>
          <NavLink to="/" style={linkStyle}>
            Perfil
          </NavLink>
          <NavLink to="/" style={linkStyle}>
            Ayuda
          </NavLink>

        </nav>
      </div>

      <button
        onClick={handleLogout}
        style={{
          background: "transparent",
          color: "white",
          border: "1px solid white",
          padding: "8px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}