import React, { useState } from "react";
import styles from "./index.module.css";

const amenitiesList = [
  "TV",
  "Wi-Fi",
  "Air conditioning",
  "Dedicated parking",
  "Street parking",
  "Paid parking available",
  "Pool",
  "On-site gym",
  "On-site laundry",
];

const Amenities = () => {
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const handleCheckboxChange = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <div className={styles.amenitiesContainer}>
      <h3>Amenities</h3>
      <div className={styles.amenitiesGrid}>
        {amenitiesList.map((amenity) => (
          <label key={amenity} className={styles.amenityLabel}>
            <input
              type="checkbox"
              checked={selectedAmenities.includes(amenity)}
              onChange={() => handleCheckboxChange(amenity)}
            />
            {amenity}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
