import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const ProtectedRoute: React.FC = () => {
  const { loggedIn } = useAuth();

  // If not logged in, redirect to login page
  return loggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
