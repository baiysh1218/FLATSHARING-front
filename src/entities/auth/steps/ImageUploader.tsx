import React, { useState, DragEvent, ChangeEvent, FC } from "react";
import clsx from "./ui/index.module.css";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";
import { Text } from "../../../shared/Text/Text";
import { StepProps } from "./model/types";

const ImageUploader: FC<StepProps> = ({
  formData,
  handleChange,
  handleDrop,
  name,
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleClick = () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    fileInput.click();
  };

  return (
    <div>
      <div className={clsx.uploader_titles}>
        <SecondTitle>Upload your photo</SecondTitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </Text>
      </div>
      {formData.img ? (
        <img
          className={clsx.immages_uploader}
          src={formData.img}
          alt="Uploaded Preview"
        />
      ) : (
        <div
          className={clsx.uploader}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          Upload or drag a photo
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            name={name}
            style={{ display: "none" }}
            id="fileInput"
          />
        </div>
      )}
      <div className={clsx.check} style={{ cursor: "pointer" }}>
        <input type="checkbox" id="checked" />
        <label htmlFor="checked">
          I accept Terms of Service and Privacy Policy
        </label>
      </div>
    </div>
  );
};

export default ImageUploader;
