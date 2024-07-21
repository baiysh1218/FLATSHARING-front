import React from "react";
import styles from "./ui/index.module.css";
import { useParams } from "react-router-dom";
import { Title } from "../../shared/title/Title";
import { ReactComponent as AddressIcon } from "../../assets/icons/adress.svg";
import { ReactComponent as Car } from "../../assets/icons/Car.svg";
import { ReactComponent as TV } from "../../assets/icons/TV.svg";
import { ReactComponent as Cloud } from "../../assets/icons/cloud.svg";
import { ReactComponent as Speaker } from "../../assets/icons/speaker.svg";
import { ReactComponent as WiFi } from "../../assets/icons/wifi.svg";
import { ReactComponent as Gym } from "../../assets/icons/gym.svg";

import Ivan from "../../assets/png/Ivan.png";

import ApartmentDetails from "../../shared/apartmentDetails/ApartmentDetails";
import { Text } from "../../shared/Text/Text";
import { Lessor } from "../../shared/lessor/Lessor";
import { LessorLeft } from "../../shared/lessor/LessorLeft";
import { LessorAvatar } from "../../shared/lessor/LessorAvatar";
import { AddressTitle } from "../../shared/addressTitle/AddressTitle";
import { LessorRight } from "../../shared/lessor/LessorRight";
import { SecondTitle } from "../../shared/secondTitle/SecondTitle";
import { Button } from "../../shared/button/Button";
import Questions from "../questions/Questions";

const Details = () => {
  const { id } = useParams();

  return (
    <div className={`${styles.details} container`}>
      <div className={styles.header_details}>
        <Title>Cozy apartments in the San Blas area</Title>
        <div>
          <AddressIcon />
          <span>Calle de Estocolmo 1, San Blas, 12345 Madrid, Spain</span>
        </div>
        <div>
          <span>1 room</span>
          <li>Jun</li>
          <li>Jul</li>
        </div>
      </div>
      <div className={styles.content}>
        <ApartmentDetails />
        <div className={styles.text_content}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam.
          </Text>
          <div className={styles.date}>
            <p>
              Departure date: <span>Jun, 25</span>
            </p>
            <p>
              Return to the apartment: <span>Jul, 10</span>
            </p>
          </div>
          <hr />
          <div className={styles.service}>
            <p>Amenities</p>
            <div className={styles.service_item}>
              <ul>
                <li>
                  <Car />
                  Dedicated parking
                </li>
                <li>
                  <WiFi />
                  Wi-Fi
                </li>
                <li>
                  <Cloud />
                  Air conditioning
                </li>
              </ul>
              <ul>
                <li>
                  <TV />
                  TV
                </li>
                <li>
                  <Speaker />
                  On-site laundry
                </li>
                <li>
                  <Gym />
                  On-site gym
                </li>
              </ul>
            </div>
            <hr />
            <div className={styles.price}>
              <p>
                Cost: <span>75$/night</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Lessor
          style={{
            minHeight: "233px",
            marginTop: "180px",
            marginBottom: "40px",
          }}
        >
          <LessorLeft
            style={{
              justifyContent: "flex-start",
              gap: "40px",
              backgroundColor: "#F5F6F6",
            }}
          >
            <LessorAvatar style={{ width: "150px" }} src={Ivan} />
            <div>
              <SecondTitle>Hosted by Maria</SecondTitle>
              <Text>
                Ex-ABBYY, ex-FaceApp I live and work in Madrid. Like to travel,
                my hobby is dancings
              </Text>
            </div>
          </LessorLeft>
          <LessorRight
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
            <SecondTitle style={{ color: "white", alignSelf: "flex-start" }}>
              Book an apartment
            </SecondTitle>
            <Text style={{ color: "white" }}>
              Contact Maria in any way convenient for you. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit
            </Text>
          </LessorRight>
        </Lessor>

        <Button $bg $icon style={{ margin: "auto", marginBottom: "180px" }}>
          Contact the owner
        </Button>
      </div>
      <Questions />
    </div>
  );
};

export default Details;
