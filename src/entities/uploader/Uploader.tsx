import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { ReactComponent as Camera } from "../../assets/icons/camera.svg";
import clsx from "./styles.module.css";

interface Props {
  onImageChanger: (data: File[]) => void;
  required: boolean;
}

const Uploader: FC<Props> = ({ onImageChanger, required }) => {
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  console.log(imageFiles);

  const handleImageUpload = (files: FileList) => {
    const newImageFiles: File[] = [];
    const maxUpload = 8 - imageFiles.length;

    Array.from(files)
      .slice(0, maxUpload)
      .forEach((file) => {
        newImageFiles.push(file);
      });

    setImageFiles((prev) => [...prev, ...newImageFiles]);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      handleImageUpload(files);
    }
  };

  useEffect(() => {
    onImageChanger(imageFiles);
  }, [imageFiles]);

  return (
    <div className={clsx.uploader_wrapper}>
      <div className={clsx.imageGallery}>
        {imageFiles.map((file, index) => (
          <img
            key={index}
            src={URL.createObjectURL(file)}
            alt={`Uploaded ${index + 1}`}
            className={clsx.imagePreview}
          />
        ))}
      </div>
      {imageFiles.length < 8 && (
        <div className={clsx.uploader}>
          <input
            required={required}
            type="file"
            accept="image/*"
            onChange={handleInputChange}
            style={{ display: "none" }}
            id="fileInput"
            multiple
          />
          <label htmlFor="fileInput" className={clsx.uploadButton}>
            <Camera />
          </label>
        </div>
      )}

      {imageFiles.length >= 8 && (
        <p className={clsx.errorMessage}>You can only upload up to 8 photos.</p>
      )}
    </div>
  );
};

export default Uploader;
