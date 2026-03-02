import Layout from "./Layout";
import "../styles/page.css";

interface PageComingSoonProps {
  title: string;
  description?: string;
}

export default function PageComingSoon({
  title,
  description = "Esta sección estará disponible próximamente.",
}: PageComingSoonProps) {
  return (
    <Layout>
      <div className="page-container">
        <h2 className="text-subtitle-24-semibold">{title}</h2>
        <p className="text-body page-description">{description}</p>
      </div>
    </Layout>
  );
}