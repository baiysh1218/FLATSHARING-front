import React, { ChangeEvent, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaAngleDown } from "react-icons/fa";
import styles from "./ui/index.module.css";
import { Title } from "../../shared/title/Title";
import { Text } from "../../shared/Text/Text";
import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/button/Button";

const BrowseApartments = () => {
  const [direction, setDirection] = useState<string>("");
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [sorting, setSorting] = useState("Upcoming dates");

  const handleDirectionChange = (e: ChangeEvent<HTMLInputElement>) =>
    setDirection(e.target.value);

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Title>Browse Apartments</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </Text>
      <div className={styles.filters}>
        <div className={styles.filter}>
          <label>Direction</label>
          <input
            type="text"
            placeholder="Where do you want to go?"
            value={direction}
            onChange={handleDirectionChange}
          />
        </div>
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
        <div className={styles.filter}>
          <label>Sorting</label>
          <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
            <option value="Upcoming dates">Upcoming dates</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Rating">Rating</option>
          </select>
        </div>
        <Button
          $bg
          $icon
          style={{ maxHeight: "64px", alignSelf: "flex-end" }}
          onClick={() => navigate("/registration")}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default BrowseApartments;
