import styles from "./Profile.module.scss";
import profile from "@/assets/images/profile.png";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileImageWrapper}>
        <div className={styles.profileImageBorder}></div>
        <img
          src={profile}
          alt="Фото автора"
          className={styles.profileImage}
          draggable={false}
        />
      </div>
      <p>Илья Буторин</p>
      <p>Студент</p>
    </div>
  );
};

export default Profile;
