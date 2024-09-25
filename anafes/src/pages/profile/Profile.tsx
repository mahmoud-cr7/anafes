import "./profile.css";

const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="profile">
      <div className="img">
        <img src="/src/assets/images/select_profile.png" alt="" />
        <button className="edit">تعديل</button>
      </div>
      <div className="info">
        <form className="login-form">
          <label htmlFor="name"> الاسم</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            defaultValue={user.name}
          />

          <label htmlFor="email"> البريد الالكتروني</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            defaultValue={user.email}
          />

          <div className="btns">
            <button className="btn" type="submit">
              حفظ
            </button>
          </div>
        </form>
      </div>
      <div className="confirm">
        <div className="password">
          <input type="password" id="oldPassword" name="password" required />
          <label htmlFor="oldPassword"> كلمة السر الحالية</label>
        </div>
        <div className="password">
          <input type="password" id="newPassword" name="password" required />
          <label htmlFor="newPassword"> كلمة السر الجديدة</label>
        </div>
        <div className="password">
          <input
            type="password"
            id="confirmPassword"
            name="password"
            required
          />
          <label htmlFor="confirmPassword"> تأكيد كلمة السر </label>
        </div>
        <div className="btns">
          <button className="btn" type="submit">
            حفظ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
