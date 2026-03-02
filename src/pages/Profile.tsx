import Layout from "../components/Layout";
import { useMe } from "../hooks/useMe";
import "../styles/profile.css";

import profileImage from "../assets/images/me.jpg";

export default function Profile() {
  const { user } = useMe();

  return (
    <Layout>
      <div className="profile-container">
        <div className="profile-card">
          {/* Avatar */}
          <div className="profile-avatar">
            <img src={profileImage} alt="Profile" />
          </div>

          {/* Nombre */}
          <h2 className="profile-name">Mariluz Vargas Hilari</h2>

          {/* Email del backend */}
          <p className="profile-email">{user?.email}</p>

          {/* Información personal */}
          <div className="profile-info">
            <div className="profile-row">
              <span>País</span>
              <strong>Bolivia</strong>
            </div>

            <div className="profile-row">
              <span>Ciudad</span>
              <strong>La Paz</strong>
            </div>

            <div className="profile-row">
              <span>Teléfono</span>
              <strong>+591 76262607</strong>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
