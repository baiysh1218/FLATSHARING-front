import React, { ChangeEvent, FC, useState } from "react";
import { ReactComponent as Camera } from "../../assets/icons/camera.svg";
import clsx from "./styles.module.css";
interface Props {
  onImageChanger: (data: string[]) => void;
}

const Uploader: FC<Props> = ({ onImageChanger }) => {
  const [imageSrcs, setImageSrcs] = useState<string[]>([]);

  const handleImageUpload = (files: FileList) => {
    const newImageSrcs: string[] = [];
    const maxUpload = 8 - imageSrcs.length;

    Array.from(files)
      .slice(0, maxUpload)
      .forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImageSrcs.push(reader.result as string);
          if (newImageSrcs.length === Math.min(files.length, maxUpload)) {
            setImageSrcs((prev) => [...prev, ...newImageSrcs]);
            onImageChanger(imageSrcs);
          }
        };
        reader.readAsDataURL(file);
      });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      handleImageUpload(files);
    }
  };

  return (
    <div>
      <div className={clsx.imageGallery}>
        {imageSrcs.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Uploaded ${index + 1}`}
            className={clsx.imagePreview}
          />
        ))}
      </div>
      {imageSrcs.length < 8 && (
        <div className={clsx.uploader}>
          <input
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

      {imageSrcs.length >= 8 && (
        <p className={clsx.errorMessage}>You can only upload up to 8 photos.</p>
      )}
    </div>
  );
};

export default Uploader;
