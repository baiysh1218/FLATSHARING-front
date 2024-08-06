import React from "react";
import styles from "../ui/index.module.css";
import photo from "../../../assets/png/photo Vlad Terzi.png";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";
import { useGetUserQuery } from "../../../app/redux/auth/authApi";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { data } = useGetUserQuery({});
  const navigate = useNavigate();
  console.log("data", data);
  return (
    <div className={styles.left_side}>
      <div className={styles.user_block}>
        <div className={styles.user_avatar}>
          <img
            src={
              data?.picture_url
                ? photo
                : "https://i.pinimg.com/564x/25/ee/de/25eedef494e9b4ce02b14990c9b5db2d.jpg"
            }
            alt="user avatar"
          />
          <span>...</span>
        </div>
        <SecondTitle weight="400" fz="20px">
          {data?.full_name}
        </SecondTitle>
      </div>
      <ul className={styles.list}>
        <li onClick={() => navigate("/account/myads")}>My Ads</li>
        <li onClick={() => navigate("/account/myprofile")}>My Profile</li>
        <li>Subscription</li>
        <li>Exit</li>
      </ul>
    </div>
  );
};

export default Sidebar;
