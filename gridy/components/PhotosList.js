import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchPhotos } from "../pages/api/unsplash";

function PhotosList({ results, total, error }) {
  const [photos, setPhotos] = useState(results);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (photos && total) {
      setHasMore(total > photos.length ? true : false);
    }
  }, [photos, total, error]);

  const fetchNextPage = async () => {
    const fetchedPhotos = await fetchPhotos(page);

    if (fetchedPhotos.type === "error") {
      return { props: { error: fetchedPhotos.errors } };
    }

    if (fetchedPhotos.type === "success") {
      setPhotos((data) => [...data, ...fetchedPhotos.response.results]);
    }
  };

  return (
    <Container>
      {error && <h4>{error}</h4>}
      {photos && (
        <InfiniteScroll
          dataLength={photos.length}
          next={() => fetchNextPage(setPage(page + 1))}
          hasMore={hasMore}
          loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
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
        </InfiniteScroll>
      )}
    </Container>
  );
}

export default PhotosList;