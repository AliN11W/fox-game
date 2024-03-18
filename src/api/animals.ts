import { CAT_API_URL, DOG_API_URL, FOX_API_URL } from "@/constants";

export async function getDog() {
  try {
    const response = await fetch(DOG_API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    const data = await response.json();
    if (typeof data.message !== "string") {
      throw new TypeError("Expected a string for dog image URL");
    }
    return data.message;
  } catch (error) {
    console.error("Failed to fetch dog image", error);
    return null;
  }
}

export async function getCat() {
  try {
    const response = await fetch(CAT_API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    const data = await response.json();
    if (!Array.isArray(data) || typeof data[0].url !== "string") {
      throw new TypeError("Expected an array with a string for cat image URL");
    }
    return data[0].url;
  } catch (error) {
    console.error("Failed to fetch cat image", error);
    return null;
  }
}

export async function getFox() {
  try {
    const response = await fetch(FOX_API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    const data = await response.json();
    if (typeof data.image !== "string") {
      throw new TypeError("Expected a string for fox image URL");
    }
    return data.image;
  } catch (error) {
    console.error("Failed to fetch fox image", error);
    return null;
  }
}
