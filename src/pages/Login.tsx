import { useState, useContext } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import LoginIllustration from "../assets/images/login-illustration.png";
import EyeIcon from "../assets/icons/ui/eye.svg";
import EyeOffIcon from "../assets/icons/ui/eye_off.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      auth?.login(response.data.token);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

return (
  <div className="login-container">
    {/* LEFT SIDE */}
    <div className="login-left">
      <h1 className="login-title">Iniciar sesión</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Correo electrónico</label>
          <input
            type="email"
            placeholder="juan@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group password-group">
          <label>Contraseña</label>

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Escribe tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <img
              src={showPassword ? EyeOffIcon : EyeIcon}
              alt="toggle password"
              className="password-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>

        {error && <p className="error-message">{error}</p>}

        <button
          type="submit"
          disabled={loading || !email || !password}
          className={`login-button ${
            email && password ? "active" : ""
          }`}
        >
          {loading ? "Cargando..." : "Iniciar sesión"}
        </button>
      </form>
    </div>

    {/* RIGHT SIDE */}
    <div className="login-right">
      <img
        src={LoginIllustration}
        alt="Login illustration"
        style={{ width: "70%" }}
      />
    </div>
  </div>
);
}