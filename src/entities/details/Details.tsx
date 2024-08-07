import React from "react";
import styles from "./ui/index.module.css";
import { useNavigate, useParams } from "react-router-dom";
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
import { useGetOneFlatQuery } from "../../app/redux/product/apiProducts";
import { useGetUserByIdQuery } from "../../app/redux/auth/authApi";

const Details = () => {
  const { id } = useParams();
  const { data } = useGetOneFlatQuery({ id });
  const userId = data?.user_id;
  const res = useGetUserByIdQuery({ id: userId });
  const navigate = useNavigate();

  // const data = {
  //   description: description || "",
  //   date_from: departure ? departure.toISOString() : "",
  //   date_to: returnDate ? returnDate.toISOString() : "",
  //   country: country || "",
  //   city: city || "",
  //   price: price || "",
  //   comments: comments || "",
  //   is_rented: false,
  //   created_at: new Date().toISOString(),
  //   updated_at: new Date().toISOString(),
  //   message_ids: "",
  //   channel_id: 0,
  //   status: "created",
  //   district: address || "",
  //   swap: "",
  //   room: rooms ? rooms.toString() : "",
  //   flexible_dates: true,
  // };

  //   {
  //     "description": "Большая студия с залом, рабочим и спальных местами. Небольшая кухня, ванная со всем необходимым (кофемашина, духовка, стиральная машина, фен, Wi-Fi, и тд). Квартира полностью отремонтированна год назад.\n5й этаж (6 по российским меркам), есть лифт.\nНаходится в 20м округе Парижа,village Jourdain. В округе много хороших ресторанов, баров, есть несколько концертных залов, район молодёжный, известен своим стрит артом, рядом China-town, большой красивый парк Butte Chaumont и совсем рядом с домом парк belleville с видом на Эйфелеву башню. 10 мин до центра Парижа на метро",
  //     "date_from": "Конец июня. Квартира свободна во время олимпийских игр.",
  //     "date_to": "Сентябрь",
  //     "country": "Франция",
  //     "city": "Париж",
  //     "price": "70 евро за сутки, плюс уборка 40 евро (платится один раз). Квартира свободна во время олимпийских игр. Цена на это время договорная.",
  //     "comments": null,
  //     "is_rented": null,
  //     "created_at": "2024-06-08T10:17:19.137651",
  //     "updated_at": "2024-06-08T10:38:38.789044",
  //     "message_ids": "6941;6942;6943;6944;6945;6946;6947;6948;6949",
  //     "channel_id": -1001885600249,
  //     "status": "posted",
  //     "district": null,
  //     "swap": null,
  //     "room": null,
  //     "flexible_dates": null,
  //     "listing_id": 2929,
  //     "user_id": "d746d0ec-8d94-4f4a-91a2-4b5f09f8a861",
  //     "used_listing_pictures": [
  //         {
  //             "status": "used",
  //             "listing_id": 2929,
  //             "listing_picture_id": 1220,
  //             "picture_url": "https://fs-community-public.s3.eu-west-3.amazonaws.com/2929_2929_AQADdr4xG0DEcFB-.jpg",
  //             "created_at": "2024-06-08T10:26:32.479150",
  //             "updated_at": "2024-06-08T10:26:32.479155"
  //         },
  //         {
  //             "status": "used",
  //             "listing_id": 2929,
  //             "listing_picture_id": 1221,
  //             "picture_url": "https://fs-community-public.s3.eu-west-3.amazonaws.com/2929_2929_AQADUsQxG68lIVN-.jpg",
  //             "created_at": "2024-06-08T10:26:32.531425",
  //             "updated_at": "2024-06-08T10:26:32.531430"
  //         },
  //         {
  //             "status": "used",
  //             "listing_id": 2929,
  //             "listing_picture_id": 1222,
  //             "picture_url": "https://fs-community-public.s3.eu-west-3.amazonaws.com/2929_2929_AQADU8QxG68lIVN-.jpg",
  //             "created_at": "2024-06-08T10:26:32.546469",
  //             "updated_at": "2024-06-08T10:26:32.546474"
  //         },
  //         {
  //             "status": "used",
  //             "listing_id": 2929,
  //             "listing_picture_id": 1223,
  //             "picture_url": "https://fs-community-public.s3.eu-west-3.amazonaws.com/2929_2929_AQADVMQxG68lIVN-.jpg",
  //             "created_at": "2024-06-08T10:26:32.581426",
  //             "updated_at": "2024-06-08T10:26:32.581430"
  //         },
  //         {
  //             "status": "used",
  //             "listing_id": 2929,
  //             "listing_picture_id": 1224,
  //             "picture_url": "https://fs-community-public.s3.eu-west-3.amazonaws.com/2929_2929_AQADLcAxG_1JYFF-.jpg",
  //             "created_at": "2024-06-08T10:26:32.679347",
  //             "updated_at": "2024-06-08T10:26:32.679351"
  //         },
  //         {
  //             "status": "used",
  //             "listing_id": 2929,
  //             "listing_picture_id": 1225,
  //             "picture_url": "https://fs-community-public.s3.eu-west-3.amazonaws.com/2929_2929_AQADUcQxG68lIVN-.jpg",
  //             "created_at": "2024-06-08T10:26:32.724276",
  //             "updated_at": "2024-06-08T10:26:32.724280"
  //         },
  //         {
  //             "status": "used",
  //             "listing_id": 2929,
  //             "listing_picture_id": 1226,
  //             "picture_url": "https://fs-community-public.s3.eu-west-3.amazonaws.com/2929_2929_AQADUMQxG68lIVN-.jpg",
  //             "created_at": "2024-06-08T10:26:32.728981",
  //             "updated_at": "2024-06-08T10:26:32.728985"
  //         },
  //         {
  //             "status": "used",
  //             "listing_id": 2929,
  //             "listing_picture_id": 1227,
  //             "picture_url": "https://fs-community-public.s3.eu-west-3.amazonaws.com/2929_2929_AQADVcQxG68lIVN-.jpg",
  //             "created_at": "2024-06-08T10:26:32.780581",
  //             "updated_at": "2024-06-08T10:26:32.780585"
  //         }
  //     ]
  // }

  const socialNetworks = {
    Instagram: res.data?.instagram,
    LinkedIn: res.data?.linkedin,
    WhatsApp: res.data?.whatsapp,
  };

  return (
    <div className={`${styles.details} container`}>
      {data && (
        <>
          <div className={styles.header_details}>
            <Title>Cozy apartments in the San Blas area</Title>
            <div>
              <AddressIcon />
              <span>
                {data?.country}, {data.city}
              </span>
            </div>
            <div>
              <span>{data?.room ? `${data.room} room` : null}</span>
              <li>Jun</li>
              <li>Jul</li>
            </div>
          </div>
          <div className={styles.content}>
            <ApartmentDetails images={data.used_listing_pictures} />
            <div className={styles.text_content}>
              <Text>{data.description}</Text>
              <div className={styles.date}>
                <p>
                  Departure date: <span>{data.date_from}</span>
                </p>
                <p>
                  Return to the apartment: <span>{data.date_to}</span>
                </p>
              </div>
              <hr />
              <div className={styles.service}>
                <p>Amenities</p>
                {/* <div className={styles.service_item}>
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
                </div> */}
                {/* <hr /> */}
                <div className={styles.price}>
                  <p>
                    Cost: <span>{data.price}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

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
            <LessorAvatar
              style={{ width: "150px" }}
              src={
                res?.data?.picture_url
                  ? res.data.picture_url
                  : "https://i.pinimg.com/564x/25/ee/de/25eedef494e9b4ce02b14990c9b5db2d.jpg"
              }
            />
            <div style={{ width: "80%" }}>
              <SecondTitle>Hosted by {res?.data?.full_name}</SecondTitle>
              <Text>
                Job <br />
                {res?.data?.description}
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
              Contact {res?.data?.full_name} in any way convenient for you.
              <div className={styles.network}>
                {Object.entries(socialNetworks).map(([network, url]) =>
                  url ? (
                    <div key={network}>
                      <a href={url} target="_blank">
                        {network},{" "}
                      </a>
                      {res.data?.tg_username && (
                        <p>tg: {res?.data?.tg_username}</p>
                      )}
                    </div>
                  ) : null
                )}
              </div>
            </Text>
          </LessorRight>
        </Lessor>

        <Button
          onClick={() => navigate("/registration")}
          $bg
          $icon
          style={{ margin: "auto", marginBottom: "180px" }}
        >
          Contact the owner
        </Button>
      </div>
      <Questions />
    </div>
  );
};

export default Details;
