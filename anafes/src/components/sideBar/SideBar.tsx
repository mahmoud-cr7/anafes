import { Link } from "react-router-dom";
import "./Sidebar.css";
const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="profile-card">
        <div className="student">
          <div className="student-content">
            <h3>محمود وجية</h3>
            <p>طالب</p>
          </div>
          <img src="/src/assets/images/logo.png" alt="" />
        </div>
        <div className="school">
          <div className="school-content">
            <h3>الجبرتي</h3>
            <p>الاول الاعدادي</p>
          </div>
          <img src="/src/assets/images/logo.png" alt="" />
        </div>
        <button className="btn">
          <Link to="/profile">الملف الشخصي</Link>
        </button>
      </div>
      <ul>
        <li>
          <h3 className="active">
            <Link to="/">
             المواد الدراسية
            </Link>
          </h3>
          <img src="/src/assets/icons/home_selection.png" alt="" />
        </li>
        <li>
          <h3>جدول المهام</h3>
          <img src="/src/assets/icons/special_groups.png" alt="" />
        </li>
        <li>
          <h3> المنافسون الاوائل</h3>
          <img src="/src/assets/icons/help.png" alt="" />
        </li>
        <li>
          <h3> التقارير</h3>
          <img src="/src/assets/icons/res_icon.png" alt="" />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
