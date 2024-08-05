import React from "react";
import styles from "../ui/index.module.css";
import photo from "../../../assets/png/photo Vlad Terzi.png";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";

const Sidebar = () => {
  return (
    <div className={styles.left_side}>
      <div className={styles.user_block}>
        <div className={styles.user_avatar}>
          <img src={photo} alt="user avatar" />
          <span>...</span>
        </div>
        <SecondTitle weight="400" fz="20px">
          Vlad Terzi
        </SecondTitle>
      </div>
      <ul className={styles.list}>
        <li>My Ads</li>
        <li>My Profile</li>
        <li>Subscription</li>
        <li>Exit</li>
      </ul>
    </div>
  );
};

export default Sidebar;
