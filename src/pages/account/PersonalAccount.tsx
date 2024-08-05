import styles from "./ui/index.module.css";
import { useLocation } from "react-router-dom";
import Sidebar from "../../entities/profile/SideBar/Sidebar";
import MyAds from "../../entities/profile/MyAds/MyAds";

const PersonalAccount = () => {
  const location = useLocation();
  return (
    <div className={`container ${styles.account_wrapper}`}>
      <Sidebar />
      <MyAds />
    </div>
  );
};

export default PersonalAccount;
