import WalletIcon from "../assets/icons/ui/coin.svg";
import "../styles/userGreeting.css";

interface Props {
  name: string;
}

export default function UserGreeting({ name }: Props) {
  return (
    <div className="user-greeting">
      <img src={WalletIcon} alt="coin icon" className="user-icon" />

      <h2 className="text-subtitle-24-semibold">
        ¡Hola <span className="user-name">{name}</span>!
      </h2>
    </div>
  );
}