import { CAT_API_URL, DOG_API_URL, FOX_API_URL } from "@/constants";

export default async function getDog() {
  const response = await fetch(DOG_API_URL);
  const data = await response.json();

  return data.message as string;
}

export async function getCat() {
  const response = await fetch(CAT_API_URL);
  const data = await response.json();

  return data[0].url as string;
}

export async function getFox() {
  const response = await fetch(FOX_API_URL);
  const data = await response.json();

  return data.image as string;
}
