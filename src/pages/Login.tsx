import { useState, useContext } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import LoginIllustration from "../assets/images/login-illustration.png";
import EyeIcon from "../assets/icons/ui/eye.svg";
import EyeOffIcon from "../assets/icons/ui/eye_off.svg";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { Link } from "react-router-dom";

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
        <div className="login-content">
          <h1 className="text-title-48 login-title">
            Iniciar sesión
          </h1>
  
          <form className="login-form" onSubmit={handleSubmit}>
            <TextField
              label="Correo electrónico"
              type="email"
              placeholder="juan@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              success={email.includes("@")}
            />
            <div className="password-block">
              <TextField
                label="Contraseña"
                type={showPassword ? "text" : "password"}
                placeholder="Escribe tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                iconRight={
                  <img
                    src={showPassword ? EyeOffIcon : EyeIcon}
                    alt="toggle"
                    width={20}
                  />
                }
                onIconRightClick={() =>
                  setShowPassword(!showPassword)
                }
              />
              <Link to="/forgot-password" className="forgot-password text-caption-12">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
  
            {error && (
              <p className="error-message text-caption-14">
                {error}
              </p>
            )}
            <div className="login-actions">
              <Button
                type="submit"
                variant={!email || !password ? "disabled" : "primary"}
                fullWidth
              >
                Iniciar sesión
              </Button>
            </div>
          </form>
        </div>
      </div>
  
      {/* RIGHT SIDE */}
      <div className="login-right">
        <img
          src={LoginIllustration}
          alt="Login illustration"
          className="login-image"
        />
      </div>
    </div>
  );

}