import React, { useState, DragEvent, ChangeEvent } from "react";
import clsx from "./ui/index.module.css";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";
import { Text } from "../../../shared/Text/Text";

const ImageUploader: React.FC = () => {
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

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
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
      {imageSrc ? (
        <img
          className={clsx.immages_uploader}
          src={imageSrc}
          alt="Uploaded Preview"
        />
      ) : (
        <div
          className={clsx.uploader}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          Upload or drag a photo
          <input
            type="file"
            accept="image/*"
            onChange={handleInputChange}
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
