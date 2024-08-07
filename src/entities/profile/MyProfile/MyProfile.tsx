import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "../ui/index.module.css";
import { Title } from "../../../shared/title/Title";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";
import { Input } from "../../../shared/input/Input";
import photo from "../../../assets/png/photo Vlad Terzi.png";
import replaceIcon from "../../../assets/icons/button replace photo.svg";
import { TextArea } from "../../../shared/textArea/TextArea";
import { Text } from "../../../shared/Text/Text";
import { Button } from "../../../shared/button/Button";
import {
  useEditUserInfoMutation,
  useGetUserQuery,
  useUpdateUserPictureMutation,
} from "../../../app/redux/auth/authApi";

interface FormData {
  id: string;
  email: string;
  password: string;
  new_password: string;
  want_to_let: string;
  firstName: string;
  lastName: string;
  address: string;
  profession: string;
  instagram: string;
  linkedin: string;
  facebook: string;
  twitter: string;
  telegram: string;
  whatsapp: string;
}

const MyProfile = () => {
  const { data } = useGetUserQuery({});
  const [formData, setFormData] = useState<FormData>({
    id: "",
    email: "",
    password: "",
    new_password: "",
    want_to_let: "",
    firstName: "",
    lastName: "",
    address: "",
    profession: "",
    instagram: "",
    linkedin: "",
    facebook: "",
    twitter: "",
    telegram: "",
    whatsapp: "",
  });
  const [inst, setInst] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [face, setFace] = useState<string>("");
  const [twit, setTwit] = useState<string>("");
  const [tg, setTg] = useState<string>("");
  const [what, setWhat] = useState<string>("");
  const [imageFiles, setImageFiles] = useState<File | null>(null);

  const [edit] = useEditUserInfoMutation();
  const [imageUpdate] = useUpdateUserPictureMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const file = e.target.files?.[0];
    console.log(file);
    if (file) {
      setImageFiles(file);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    fileInput.click();
  };

  const handleClickChange = (
    {
      inst,
      link,
      face,
      twit,
      tg,
      what,
    }: {
      inst: string;
      link: string;
      face: string;
      twit: string;
      tg: string;
      what: string;
    },
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (inst) {
      setFormData((prevData) => ({
        ...prevData,
        ["instagram"]: inst,
      }));
    }
    if (link) {
      setFormData((prevData) => ({
        ...prevData,
        ["linkedin"]: link,
      }));
    }
    if (face) {
      setFormData((prevData) => ({
        ...prevData,
        ["facebook"]: face,
      }));
    }
    if (twit) {
      setFormData((prevData) => ({
        ...prevData,
        ["twitter"]: twit,
      }));
    }
    if (tg) {
      setFormData((prevData) => ({
        ...prevData,
        ["telegram"]: tg,
      }));
    }
    if (what) {
      setFormData((prevData) => ({
        ...prevData,
        ["whatsapp"]: what,
      }));
    }
  };

  const handleEdit = async () => {
    const editedData = {
      full_name: `${formData.firstName} ${formData.lastName}`,
      how_did_you_hear: "",
      tg_id: null,
      onboarding_step: null,
      onboarding_completed: false,
      tg_username: formData.telegram,
      whatsapp: formData.whatsapp,
      instagram: formData.instagram,
      linkedin: formData.linkedin,
      description: formData.profession,
      where_to_rent: formData.address,
      where_to_let: formData.want_to_let,
      meet: false,
      notifications: true,
      contact_email: formData.email,
      blocked_timestamp: null,
      bot_name: "",
      user_id: data.user_id,
    };
    try {
      const res = await edit({ user: editedData });
      console.log(res);
      if (res.data) {
        const form = new FormData();
        if (imageFiles) {
          form.append("file", imageFiles);
        }
        const res3 = await imageUpdate({ data: form });
        console.log(res3);
        //navigate("/");
      }
    } catch (err) {}
  };

  useEffect(() => {
    if (data) {
      const [firstName, lastName] = data.full_name.split(" ");
      setFormData({
        id: data.id || "",
        email: data.contact_email || "",
        password: "",
        new_password: "",
        want_to_let: data.where_to_let || "",
        firstName: firstName || "",
        lastName: lastName || "",
        address: data.where_to_rent || "",
        profession: "",
        instagram: data.instagram || "",
        linkedin: data.linkedin || "",
        facebook: "",
        twitter: "",
        telegram: data.tg_username || "",
        whatsapp: data.whatsapp || "",
      });
      setInst(data.instagram || "");
      setLink(data.linkedin || "");
      setTg(data.tg_username || "");
      setWhat(data.whatsapp || "");
    }
  }, [data]);

  console.log(data);
  return (
    <div className={styles.right_side}>
      <Title $fz="50px" style={{ marginBottom: "50px" }}>
        My Profile
      </Title>
      <div className={styles.info_wrapper}>
        <div className={styles.personal_info}>
          <div className={styles.personal_info_text}>
            <SecondTitle fz="24px">Personal Information</SecondTitle>
            <Input
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
              placeholder="First Name"
            />
            <Input
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
              placeholder="Last Name"
            />
          </div>
          <div className={styles.personal_info_avatar}>
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              style={{ display: "none" }}
              id="fileInput"
            />
            <img
              className={styles.user_img}
              src={
                imageFiles
                  ? URL.createObjectURL(imageFiles)
                  : data?.picture_url
                  ? data.picture_url
                  : "https://i.pinimg.com/564x/25/ee/de/25eedef494e9b4ce02b14990c9b5db2d.jpg"
              }
              alt="user avatar"
            />
            <img
              onClick={handleClick}
              className={styles.user_img_icon}
              src={replaceIcon}
              alt="replase icon"
            />
          </div>
        </div>
        <div className={styles.personal_info_item}>
          <SecondTitle fz="24px">Work</SecondTitle>
          <Input
            name="profession"
            onChange={handleChange}
            value={formData.profession}
            placeholder="Enter your profession"
          />
        </div>
        <div className={styles.personal_info_item}>
          <SecondTitle fz="24px">Interests</SecondTitle>
          <TextArea placeholder="Enter your interests" />
        </div>
        <div className={styles.personal_info_item}>
          <SecondTitle fz="24px">
            Are you interested in participating in regular community forums
            dedicated to travel, visas, relocation and taxes?
          </SecondTitle>
          <div className={styles.radio}>
            <div>
              <input type="radio" name="want_to_let" value="Yes" checked />
              <p>Yes</p>
            </div>
            <div>
              <input type="radio" name="want_to_let" value="No" />
              <p>No</p>
            </div>
            <div>
              <input
                type="radio"
                name="want_to_let"
                value="I haven't decided yet"
              />
              <p>I haven't decided yet</p>
            </div>
          </div>
        </div>
        <div className={styles.personal_info_item}>
          <SecondTitle fz="24px">Email</SecondTitle>
          <Input
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Email"
          />
          <div className={styles.check}>
            <input type="checkbox" name="" id="chekc" />
            <label htmlFor="chekc">Do not show email in the community</label>
          </div>
        </div>
        <div className={styles.personal_info_item}>
          <SecondTitle fz="24px">Social network</SecondTitle>
          <Text style={{ marginBottom: "20px" }}>
            Increase the credibility of your profile by adding your social media
            pages.
          </Text>
          <div className={styles.one_input}>
            <SecondTitle fz="16px" style={{ width: "30%" }}>
              Instagram
            </SecondTitle>
            <input
              value={inst}
              onChange={(e) => setInst(e.target.value)}
              type="text"
              placeholder="Not added"
            />
            {formData.instagram ? (
              <Button
                $border
                $iconColor
                onClick={(e) => {
                  setInst("");
                  handleClickChange?.(
                    {
                      inst: "",
                      link: link,
                      face: face,
                      twit: twit,
                      tg: tg,
                      what: what,
                    },
                    e
                  );
                }}
                style={{
                  padding: "2px 35px",
                  fontSize: "16px",
                  minHeight: "60px",
                }}
              >
                Remove
              </Button>
            ) : (
              <Button
                $bg
                type="button"
                onClick={(e) =>
                  handleClickChange?.(
                    {
                      inst: inst,
                      link: link,
                      face: face,
                      twit: twit,
                      tg: tg,
                      what: what,
                    },
                    e
                  )
                }
                style={{
                  padding: "2px 35px",
                  fontSize: "16px",
                  minHeight: "60px",
                }}
              >
                Connect
              </Button>
            )}
          </div>
          <div className={styles.one_input}>
            <SecondTitle fz="16px" style={{ width: "30%" }}>
              Linkedin
            </SecondTitle>
            <input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              type="text"
              placeholder="Not added"
            />
            {formData.linkedin ? (
              <Button
                $border
                $iconColor
                onClick={(e) => {
                  setInst("");
                  handleClickChange?.(
                    {
                      inst: inst,
                      link: "",
                      face: face,
                      twit: twit,
                      tg: tg,
                      what: what,
                    },
                    e
                  );
                }}
                style={{
                  padding: "2px 35px",
                  fontSize: "16px",
                  minHeight: "60px",
                }}
              >
                Remove
              </Button>
            ) : (
              <Button
                $bg
                type="button"
                onClick={(e) =>
                  handleClickChange?.(
                    {
                      inst: inst,
                      link: link,
                      face: face,
                      twit: twit,
                      tg: tg,
                      what: what,
                    },
                    e
                  )
                }
                style={{
                  padding: "2px 35px",
                  fontSize: "16px",
                  minHeight: "60px",
                }}
              >
                Connect
              </Button>
            )}
          </div>
          <div className={styles.one_input}>
            <SecondTitle fz="16px" style={{ width: "30%" }}>
              Facebook
            </SecondTitle>
            <input
              value={face}
              onChange={(e) => setFace(e.target.value)}
              type="text"
              placeholder="Not added"
            />
            {formData.facebook ? (
              <Button
                $border
                $iconColor
                onClick={(e) => {
                  setInst("");
                  handleClickChange?.(
                    {
                      inst: inst,
                      link: link,
                      face: "",
                      twit: twit,
                      tg: tg,
                      what: what,
                    },
                    e
                  );
                }}
                style={{
                  padding: "2px 35px",
                  fontSize: "16px",
                  minHeight: "60px",
                }}
              >
                Remove
              </Button>
            ) : (
              <Button
                $bg
                type="button"
                onClick={(e) =>
                  handleClickChange?.(
                    {
                      inst: inst,
                      link: link,
                      face: face,
                      twit: twit,
                      tg: tg,
                      what: what,
                    },
                    e
                  )
                }
                style={{
                  padding: "2px 35px",
                  fontSize: "16px",
                  minHeight: "60px",
                }}
              >
                Connect
              </Button>
            )}
          </div>
          <div className={styles.one_input}>
            <SecondTitle fz="16px" style={{ width: "30%" }}>
              Twitter
            </SecondTitle>
            <input
              value={twit}
              onChange={(e) => setTwit(e.target.value)}
              type="text"
              placeholder="Not added"
            />
            {formData.twitter ? (
              <Button
                $border
                $iconColor
                onClick={(e) => {
                  setInst("");
                  handleClickChange?.(
                    {
                      inst: inst,
                      link: link,
                      face: face,
                      twit: "",
                      tg: tg,
                      what: what,
                    },
                    e
                  );
                }}
                style={{
                  padding: "2px 35px",
                  fontSize: "16px",
                  minHeight: "60px",
                }}
              >
                Remove
              </Button>
            ) : (
              <Button
                $bg
                type="button"
                onClick={(e) =>
                  handleClickChange?.(
                    {
                      inst: inst,
                      link: link,
                      face: face,
                      twit: twit,
                      tg: tg,
                      what: what,
                    },
                    e
                  )
                }
                style={{
                  padding: "2px 35px",
                  fontSize: "16px",
                  minHeight: "60px",
                }}
              >
                Connect
              </Button>
            )}
          </div>
          <div className={styles.one_input}>
            <SecondTitle fz="16px" style={{ width: "30%" }}>
              Telegram
            </SecondTitle>
            <input
              value={tg}
              onChange={(e) => setTg(e.target.value)}
              type="text"
              placeholder="Not added"
            />
            {formData.telegram ? (
              <Button
                $border
                $iconColor
                onClick={(e) => {
                  setInst("");
                  handleClickChange?.(
                    {
                      inst: inst,
                      link: link,
                      face: face,
                      twit: twit,
                      tg: "",
                      what: what,
                    },
                    e
                  );
                }}
                style={{
                  padding: "2px 35px",
                  fontSize: "16px",
                  minHeight: "60px",
                }}
              >
                Remove
              </Button>
            ) : (
              <Button
                $bg
                type="button"
                onClick={(e) =>
                  handleClickChange?.(
                    {
                      inst: inst,
                      link: link,
                      face: face,
                      twit: twit,
                      tg: tg,
                      what: what,
                    },
                    e
                  )
                }
                style={{
                  padding: "2px 35px",
                  fontSize: "16px",
                  minHeight: "60px",
                }}
              >
                Connect
              </Button>
            )}
          </div>
          <div className={styles.one_input}>
            <SecondTitle fz="16px" style={{ width: "30%" }}>
              Whatsapp
            </SecondTitle>
            <input
              value={what}
              onChange={(e) => setWhat(e.target.value)}
              type="text"
              placeholder="Not added"
            />
            {formData.whatsapp ? (
              <Button
                $border
                $iconColor
                onClick={(e) => {
                  setInst("");
                  handleClickChange?.(
                    {
                      inst: inst,
                      link: link,
                      face: face,
                      twit: twit,
                      tg: tg,
                      what: "",
                    },
                    e
                  );
                }}
                style={{
                  padding: "2px 35px",
                  fontSize: "16px",
                  minHeight: "60px",
                }}
              >
                Remove
              </Button>
            ) : (
              <Button
                $bg
                type="button"
                onClick={(e) =>
                  handleClickChange?.(
                    {
                      inst: inst,
                      link: link,
                      face: face,
                      twit: twit,
                      tg: tg,
                      what: what,
                    },
                    e
                  )
                }
                style={{
                  padding: "2px 35px",
                  fontSize: "16px",
                  minHeight: "60px",
                }}
              >
                Connect
              </Button>
            )}
          </div>
        </div>
        <div className={styles.personal_info_item}>
          <SecondTitle fz="24px">Replace the password</SecondTitle>
          <Input placeholder="Current password" />
          <Input placeholder="New password" />
          <Input placeholder="Confirm the new password" />
          <div className={styles.check}>
            <input type="checkbox" name="" id="chekc" />
            <label htmlFor="chekc">Show password</label>
          </div>
          <Text fw="500" style={{ marginTop: "20px" }}>
            Forgot your passowrd ?
          </Text>
        </div>
        <Button onClick={handleEdit} $bg $icon type="button">
          Save
        </Button>
        <Text fw="500" style={{ marginTop: "20px" }}>
          How my profile{" "}
          <span style={{ textDecoration: "underline", fontWeight: "500" }}>
            {" "}
            is seen by other community members
          </span>
        </Text>
      </div>
    </div>
  );
};

export default MyProfile;
