/* eslint-disable no-constant-binary-expression */
import { Link } from "react-router-dom";
import "./Sidebar.css";

const SideBar = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="sideBar">
      <div className="profile-card">
        <div className="student">
          <div className="student-content">
            <h3>{user.name || " الاسم"}</h3>
            <p>طالب</p>
          </div>
          <img
            src={
              `/src/assets/images/${user.profileImg}` ||
              "/src/assets/images/select_profile.png"
            }
            alt="Student"
          />
        </div>
        <div className="school">
          <div className="school-content">
            <h3>{user.school.name || "اسم المدرسة"}</h3>
            <p>{user.grade.name || " المرحلة"} </p>
          </div>
          <img src="/src/assets/images/logo.png" alt="School" />
        </div>
        <button className="btn">
          <Link to="/layout/profile">الملف الشخصي</Link>
        </button>
      </div>
      <ul>
        <li>
          <h3 className="active">
            <Link to="/layout/courses">المواد الدراسية</Link>
          </h3>
          <img src="/src/assets/icons/home_selection.png" alt="Courses" />
        </li>
        <li>
          <h3>جدول المهام</h3>
          <img src="/src/assets/icons/special_groups.png" alt="Tasks" />
        </li>
        <li>
          <h3>المنافسون الاوائل</h3>
          <img src="/src/assets/icons/help.png" alt="Competitors" />
        </li>
        <li>
          <h3>التقارير</h3>
          <img src="/src/assets/icons/res_icon.png" alt="Reports" />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
