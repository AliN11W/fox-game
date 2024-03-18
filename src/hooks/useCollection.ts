import getDog, { getCat, getFox } from "@/api/animals";

export type CollectionItemType = {
  url: string;
  type: "dog" | "cat" | "fox";
};

export default function useCollection() {
  const create = async () => {
    const collection: {
      url: () => Promise<string>;
      type: CollectionItemType["type"];
    }[] = [];

    // Create 8 random items of animals except fox
    for (let i = 0; i < 8; i++) {
      const type = Math.random() > 0.5 ? "cat" : "dog";
      const getUrl = type === "cat" ? getCat : getDog;

      collection.push({
        url: getUrl,
        type,
      });
    }

    // Insert a fox randomly
    const randomIndex = Math.floor(Math.random() * (collection.length + 1));
    collection.splice(randomIndex, 0, {
      url: getFox,
      type: "fox",
    });

    // Prepare the collection by resolving the URLs
    // and waiting for the images to load
    const resolvedCollection = collection.map((item) => {
      return new Promise<CollectionItemType>((resolve) => {
        item.url().then((url: string) => {
          const resolvedItem = {
            url: url,
            type: item.type,
          };

          const img = new Image();
          img.src = url;
          img.onload = () => resolve(resolvedItem);
        });
      });
    });

    // Resolving the collection in parallel
    return await Promise.all(resolvedCollection);
  };

  return { create };
}
