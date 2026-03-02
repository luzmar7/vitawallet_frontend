import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Exchange from "../pages/Exchange";
import ExchangeSummary from "../pages/ExchangeSummary";
import Transfer from "../pages/Transfer";
import Recharge from "../pages/Recharge";
import Help from "../pages/Help";
import Profile from "../pages/Profile";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/exchange" element={<Exchange />} />
      <Route path="/exchange-summary" element={<ExchangeSummary />} />
      <Route path="/transfer" element={<Transfer />} />
      <Route path="/recharge" element={<Recharge />} />
      <Route path="/help" element={<Help />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
