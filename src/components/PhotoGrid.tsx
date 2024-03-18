import { CollectionItemType } from "@/hooks/useCollection";

type PropsType = {
  onItemClicked: (item: CollectionItemType) => void;
  collection: CollectionItemType[];
};

export default function PhotoGrid({
  onItemClicked: onItemClick,
  collection,
}: PropsType) {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-3 gap-5 w-full place-items-center">
        {collection.map((item, index) => (
          <div
            key={index}
            className="item rounded-lg border border-2 shadow-lg overflow-hidden cursor-pointer w-[150px] h-[150px]"
            onClick={() => onItemClick(item)}
            data-type={item.type}
          >
            <img
              src={item.url}
              alt={item.type}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
