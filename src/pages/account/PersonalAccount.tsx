import styles from "./ui/index.module.css";
import { useLocation } from "react-router-dom";
import Sidebar from "../../entities/profile/SideBar/Sidebar";
import MyAds from "../../entities/profile/MyAds/MyAds";
import MyProfile from "../../entities/profile/MyProfile/MyProfile";

const PersonalAccount = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className={`container ${styles.account_wrapper}`}>
      <Sidebar />
      {location.pathname == "/account/myads" && <MyAds />}
      {location.pathname == "/account/myprofile" && <MyProfile />}
    </div>
  );
};

export default PersonalAccount;
