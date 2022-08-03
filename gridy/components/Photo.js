import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { defaultBlurDataUrl } from "../shared/defaultBlurDataUrl";

function Photo({ photo }) {
  const {
    urls,
    alt_description,
    height,
    width,
    user: { name, profile_image },
  } = photo;

  return (
    <div className={styles.photo_container}>
      <Image
        width={width}
        height={height}
        src={urls.regular}
        alt={alt_description}
        blurDataURL={defaultBlurDataUrl}
        placeholder="blur"
      />
      <div className={styles.photo_on_hover_content}>
        <Image
          width={45}
          height={45}
          src={profile_image.medium}
          alt="user image"
          className="d-inline-block rounded-circle"
        />
        <p className={styles.photo_on_hover_user_name}>{name}</p>
      </div>
    </div>
  );
}

export default Photo;
