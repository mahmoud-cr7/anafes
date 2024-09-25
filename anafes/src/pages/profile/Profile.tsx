import InputField from "../../components/input/Input";
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
          <InputField
            id="name"
            name="name"
            type="text"
            label="الاسم"
            required={true}
            defaultValue={user.name}
          />
          <InputField
            id="email"
            name="email"
            type="email"
            label="البريد الالكتروني"
            required={true}
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
        <InputField
          id="oldPassword"
          name="oldPassword"
          type="password"
          label="كلمة السر الحالية"
          required={true}
        />
        <InputField
          id="newPassword"
          name="newPassword"
          type="password"
          label="كلمة السر الجديدة"
          required={true}
        />
        <InputField
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="تأكيد كلمة السر"
          required={true}
        />
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
