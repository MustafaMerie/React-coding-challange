import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";

function PhotosList({ results, total, error }) {
  const [photos, setPhotos] = useState(results);
  return (
    <Container>
      {error && <h4>{error}</h4>}
      {photos &&
        photos.map((photo, i) => (
          <Image
            key={i}
            width={photo.width}
            height={photo.height}
            src={photo.urls.regular}
            alt={photo.alt_description}
          />
        ))}
    </Container>
  );
}

export default PhotosList;
