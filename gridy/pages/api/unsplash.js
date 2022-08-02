import { createApi } from "unsplash-js";

export const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_API_ACCESS_KEY,
});

export async function fetchPhotos(page) {
  const response = await unsplash.photos.list({ page });
  return response;
}
