import { createApi } from "unsplash-js";

export const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_API_ACCESS_KEY,
});

export async function fetchPhotos() {
  const response = await unsplash.photos.list({ page: 2 });
  return response;
}
