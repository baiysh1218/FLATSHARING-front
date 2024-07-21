import React, { useState } from "react";
import img1 from "../../assets/png/auth2.png";
import img2 from "../../assets/png/auth1.png";
import img3 from "../../assets/png/auth3.png";
import styles from "./ui/index.module.css";

const images = [img1, img2, img3, img2, img3];

const ApartmentDetails = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <img
          src={selectedImage}
          alt="Selected"
          style={{ width: "100%", borderRadius: "10px" }}
        />
      </div>
      <div className={styles.images}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            onClick={() => setSelectedImage(image)}
            className={selectedImage === image ? styles.selected : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default ApartmentDetails;
