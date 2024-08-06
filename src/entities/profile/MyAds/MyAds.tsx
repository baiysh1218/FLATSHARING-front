import styles from "../ui/index.module.css";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";
import DatePicker from "react-datepicker";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { Text } from "../../../shared/Text/Text";
import arrow from "../../../assets/icons/arrowDown.svg";
import MyAdsList from "./list/MyAdsList";
import { useGetUsersProductsQuery } from "../../../app/redux/product/apiProducts";

const MyAds = () => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

  const { data } = useGetUsersProductsQuery({});
  console.log(data);

  return (
    <div className={styles.right_side}>
      <div className={styles.ads_header}>
        <SecondTitle
          style={{
            cursor: "pointer",
            paddingBottom: "20px",
            width: "22%",
            borderBottom: "2px solid black",
          }}
          fz="24px"
        >
          Current Ads ({data?.length})
        </SecondTitle>
        <SecondTitle style={{ cursor: "pointer" }} fz="24px">
          Archive Ads
        </SecondTitle>
      </div>
      <div className={styles.ads_filter}>
        <div className={styles.filters}>
          <div className={styles.filter}>
            <label>Check-in</label>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              placeholderText="Select a date"
              className={styles.datePicker}
            />
            <FaAngleDown className={styles.icon} />
          </div>
          <div className={styles.filter}>
            <label>Check-out</label>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              placeholderText="Select a date"
              className={styles.datePicker}
            />
            <FaAngleDown className={styles.icon} />
          </div>
        </div>

        <div className={styles.search_btn_block}>
          <div className={styles.btn_text}>
            <Text>Sorting</Text>
            <Text fz="20px">Upcoming dates</Text>
          </div>
          <div className={styles.search_btn}>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <MyAdsList data={data} />
    </div>
  );
};

export default MyAds;
