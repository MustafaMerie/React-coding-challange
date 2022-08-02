import React from "react";
import { fetchPhotos } from "./api/unsplash";
import PhotosList from "../components/PhotosList";
import Head from "next/head";

function Home({ total, results, error }) {
  return (
    <>
      <Head>
        <title>Gridy | Free Stock Photos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {error && <h4>{error}</h4>}
      {results && (
        <>
          <p className="lead text-center py-3">
            Showing <u className="font-weight-bold">{total}</u> results.
          </p>
          <PhotosList results={results} total={total} error={error} />
        </>
      )}
    </>
  );
}

export async function getServerSideProps() {
  const fetchedPhotos = await fetchPhotos(1);

  if (!fetchedPhotos) {
    return { props: { error: "Error occurred while fetching the data." } };
  }

  if (fetchedPhotos.type === "error") {
    return { props: { error: fetchedPhotos.errors } };
  }

  if (fetchedPhotos.type === "success") {
    const { total, results } = fetchedPhotos.response;
    return { props: { total, results } };
  }
}

export default Home;
