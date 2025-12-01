import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <Link to="/generate">Generate Keys</Link>
      <Link to="/encrypt">Encrypt & Sign</Link>
      <Link to="/decrypt">Decrypt & Verify</Link>
    </div>
  );
}