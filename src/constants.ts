export const DOG_API_URL =
  import.meta.env.VITE_DOG_API_URL || "https://dog.ceo/api/breeds/image/random";

export const CAT_API_URL =
  import.meta.env.VITE_CAT_API_URL ||
  "https://api.thecatapi.com/v1/images/search";

export const FOX_API_URL =
  import.meta.env.VITE_FOX_API_URL || "https://randomfox.ca/floof";

export const GAME_DURATION = parseInt(import.meta.env.VITE_GAME_DURATION) || 30;
export const GAME_COLLECTION_SIZE =
  parseInt(import.meta.env.VITE_GAME_COLLECTION_SIZE) || 9;
