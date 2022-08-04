import React from "react";
import { Modal } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import download_icon from "../public/svgs/download-file-round-icon.svg";
import likes_icon from "../public/svgs/red-heart-icon.svg";
import { defaultBlurDataUrl } from "../shared/defaultBlurDataUrl";

function LightBox(props) {
  const {
    urls,
    alt_description,
    height,
    width,
    description,
    links,
    likes,
    user: { name, profile_image },
  } = props.photo;

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Photo details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className={`${styles.photo_user_name_modal} lead`}>
              <Image
                width={45}
                height={45}
                src={profile_image.medium}
                blurDataURL={defaultBlurDataUrl}
                placeholder="blur"
                alt="user image"
                className="d-inline-block rounded-circle"
              />
              <a href={links.html} target="_blank" rel="noreferrer">
                {name}
              </a>
            </p>
            <div>
              <p className={`${styles.photo_likes} lead d-inline-block`}>
                {" "}
                <Image
                  src={likes_icon}
                  width={25}
                  height={25}
                  alt="photo likes"
                />{" "}
                {likes}
              </p>
              <a
                className={styles.download_link}
                href={`${links.download}&force=true`}
                target="_blank"
                download
                rel="noreferrer"
              >
                <Image
                  src={download_icon}
                  width={25}
                  height={25}
                  alt="download photo"
                />{" "}
                Download
              </a>
            </div>
          </div>
          <p className="lead text-center">
            {description ? (
              <q className="font-weight-bold">{description}</q>
            ) : null}
          </p>
          <Image
            width={width}
            height={height}
            blurDataURL={defaultBlurDataUrl}
            src={urls.regular}
            alt={alt_description}
            placeholder="blur"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LightBox;
