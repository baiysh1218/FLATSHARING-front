import React, { FC, useState } from "react";
import img1 from "../../assets/png/auth2.png";
import img2 from "../../assets/png/auth1.png";
import img3 from "../../assets/png/auth3.png";
import arrowIncrease from "../../assets/icons/arrow_increase.svg";
import arrowReduce from "../../assets/icons/arrow-reduce.svg";
import arrowToLeft from "../../assets/icons/arrow_toLeft.svg";
import arrowToRight from "../../assets/icons/arrow_toRight.svg";
import styles from "./ui/index.module.css";
import { Modal } from "../modal/model/model";

const images = [img1, img2, img3, img2, img3];

interface oneImg {
  created_at: string;
  listing_id: number;
  listing_picture_id: number;
  picture_url: string;
  status: string;
  updated_at: string;
}

interface ApartmentDetailProps {
  images: oneImg[];
}

const ApartmentDetails: FC<ApartmentDetailProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]?.picture_url);
  const [hover, setHover] = useState(false);
  const [modal, setModal] = useState(false);
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr: any) => (curr === 0 ? images.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr: any) => (curr === images.length - 1 ? 0 : curr + 1));
  };

  const handleImageClick = (index: number) => {
    setCurr(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <img
          src={images[curr]?.picture_url}
          alt="Selected"
          className={styles.selected}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{ width: "100%", borderRadius: "10px" }}
        />
        {hover && (
          <>
            <div
              onMouseEnter={() => setHover(true)}
              onClick={() => setModal(true)}
              className={`${styles.arrow_increase} ${styles.arrow}`}
            >
              <img src={arrowIncrease} alt="increase" />
            </div>
            <div className={styles.arrow_switches}>
              <div
                onMouseEnter={() => setHover(true)}
                onClick={prev}
                className={`${styles.arrow_switch} ${styles.arrow}`}
              >
                <img src={arrowToLeft} alt="increase" />
              </div>
              <div
                onMouseEnter={() => setHover(true)}
                onClick={next}
                className={`${styles.arrow_switch} ${styles.arrow}`}
              >
                <img src={arrowToRight} alt="increase" />
              </div>
            </div>
            <div
              onMouseEnter={() => setHover(true)}
              className={`${styles.photo_number} ${styles.arrow}`}
            >
              <p>{curr + 1}</p>
            </div>
          </>
        )}
      </div>
      <div className={styles.images}>
        {images.slice(0, 4).map((image, index) => (
          <img
            key={index}
            src={image?.picture_url}
            alt={`Thumbnail ${index}`}
            onClick={() => setSelectedImage(image.picture_url)}
            className={styles.not_selected}
          />
        ))}
      </div>
      <Modal>
        <div
          className={`${styles.modal} ${modal ? styles.active : null}`}
          onClick={() => setModal(false)}
        >
          <div className={styles.modal__item}>
            <img src={images[curr]?.picture_url} alt="" />
          </div>
          <div
            onClick={() => setModal(false)}
            className={`${styles.arrow_increase_modal} ${styles.arrow}`}
          >
            <img src={arrowReduce} alt="increase" />
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`${styles.arrow_switches} ${styles.switches_modal}`}
          >
            <div
              onMouseEnter={() => setHover(true)}
              onClick={prev}
              className={`${styles.arrow_switch} ${styles.arrow}`}
            >
              <img src={arrowToLeft} alt="increase" />
            </div>
            <div
              onMouseEnter={() => setHover(true)}
              onClick={next}
              className={`${styles.arrow_switch} ${styles.arrow}`}
            >
              <img src={arrowToRight} alt="increase" />
            </div>
          </div>
          <div
            onMouseEnter={() => setHover(true)}
            className={`${styles.photo_number_modal} ${styles.arrow}`}
          >
            <p>{curr + 1}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ApartmentDetails;
