import styles from "../ui/index.module.css";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";
import DatePicker from "react-datepicker";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { Text } from "../../../shared/Text/Text";
import arrow from "../../../assets/icons/arrow_white.png";

const MyAds = () => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
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
          Current Ads (3)
        </SecondTitle>
        <SecondTitle style={{ cursor: "pointer" }} fz="24px">
          Archive Ads (1)
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
            <Text>Upcoming dates</Text>
          </div>
          <div className={styles.search_btn}>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAds;
