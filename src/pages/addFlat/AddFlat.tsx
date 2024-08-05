import clsx from "./ui/indx.module.css";
import { SecondTitle } from "../../shared/secondTitle/SecondTitle";
import { Text } from "../../shared/Text/Text";
import Uploader from "../../entities/uploader/Uploader";
import { Input } from "../../shared/input/Input";
import Rooms from "../../shared/rooms/Rooms";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { TextArea } from "../../shared/textArea/TextArea";
import Amenities from "../../shared/amenities/Amenities";
import { Button } from "../../shared/button/Button";
import { useAddFlatMutation } from "../../app/redux/product/apiProducts";

const AddFlat = () => {
  const [departure, setDeparture] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [rooms, setRooms] = useState<number | null>(null);
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [comments, setComments] = useState("");

  const [addFlat] = useAddFlatMutation();

  const onImageChanger = (data: string[]) => {
    setImages(data);
  };

  const handlegetRooms = (data: number) => {
    setRooms(data);
  };

  const handleSave = () => {
    const data = {
      description,
      date_from: departure ? departure.toISOString() : null,
      date_to: returnDate ? returnDate.toISOString() : null,
      country: "",
      city: "",
      price,
      comments,
      is_rented: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      message_ids: "",
      channel_id: 0,
      status: "created",
      district: "",
      swap: "",
      room: rooms,
      flexible_dates: true,
    };
    addFlat(data);
  };

  return (
    <div className={`${clsx.wrapper}`}>
      <SecondTitle style={{ fontWeight: "500", fontSize: "50px" }}>
        Add an advert
      </SecondTitle>
      <div className={clsx.upload}>
        <SecondTitle>Photos of the apartment</SecondTitle>
        <div>
          <Text>Upload no more than 8 photos of your apartment.</Text>
          <Uploader onImageChanger={onImageChanger} />
        </div>
      </div>
      <div className={clsx.location}>
        <SecondTitle>Location</SecondTitle>
        <div>
          <Input
            placeholder="Enter the address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>
      <div className={clsx.rooms}>
        <SecondTitle>Number of rooms</SecondTitle>
        <div>
          <Rooms handlegetRooms={handlegetRooms} />
        </div>
      </div>
      <div className={clsx.time}>
        <SecondTitle>Departure date</SecondTitle>
        <div>
          <DatePicker
            selected={departure}
            onChange={(date) => setDeparture(date)}
            placeholderText="Select a date"
            className={clsx.date_picker}
          />
        </div>
      </div>
      <div className={clsx.time}>
        <SecondTitle>Return to the apartment</SecondTitle>
        <div>
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            placeholderText="Select a date"
            className={clsx.date_picker}
          />
        </div>
      </div>
      <div className={clsx.description}>
        <SecondTitle>Description of the apartment</SecondTitle>
        <div>
          <TextArea
            placeholder="Enter a description of the apartment"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div>
        <SecondTitle>Amenities</SecondTitle>
        <div>
          <Amenities />
        </div>
      </div>
      <div className={clsx.cost}>
        <SecondTitle>Cost</SecondTitle>
        <Text>
          For comfortable use of the community for all participants, the rent
          should be indicated at the cost of a long-term lease. Learn more
        </Text>
        <div>
          <Input
            placeholder="$/night"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
      <div className={clsx.comment}>
        <SecondTitle>Comment</SecondTitle>
        <Text>
          If you have any suggestions or comments about the ad, please add them.
        </Text>
        <div>
          <TextArea
            placeholder="Enter the comment"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
      </div>
      <Button
        onClick={handleSave}
        style={{ alignSelf: "flex-start" }}
        $bg
        $icon
      >
        Save
      </Button>
    </div>
  );
};

export default AddFlat;
