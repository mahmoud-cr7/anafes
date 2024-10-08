import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./Nav.css";
const Nav = () => {
  const { loggedIn, setLoggedIn } = useAuth();
  const navigate = useNavigate();

  // Logout function to set loggedIn to false and navigate to home
  const handleLogout = () => {
    setLoggedIn(false); // Set loggedIn to false
    localStorage.removeItem("token"); 
    localStorage.removeItem("user"); // Optionally clear user info from localStorage
    navigate("/"); // Redirect to home
  };

  return (
    <>
      {loggedIn ? (
        // Show icons and logo when logged in
        <>
          <div className="nav">
            <div className="icons">
              <img
                src="/src/assets/icons/outt.svg"
                alt=""
                onClick={handleLogout}
              />
              <img
                className="img"
                src="/src/assets/icons/notification_icon.png"
                alt=""
              />
              <img
                className="img"
                src="/src/assets/icons/support_chat_icon.png"
                alt=""
              />
            </div>
            <img src="/src/assets/images/logo.png" alt="logo" />
          </div>
        </>
      ) : (
        // Only show the logo when not logged in
        <div className="logged-out">
          <img src="/src/assets/images/logo.png" alt="logo" />
        </div>
      )}
    </>
  );
};

export default Nav;
