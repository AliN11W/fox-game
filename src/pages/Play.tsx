import PhotoGrid from "@/components/PhotoGrid";
import useCollection, { CollectionItemType } from "@/hooks/useCollection";
import useScoreboard from "@/hooks/useScoreboard";
import useTimer from "@/hooks/useTimer";
import useUser from "@/hooks/useUser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PlayScreen() {
  const [collections, setCollections] = useState<CollectionItemType[][]>([]);
  const [activeCollection, setActiveCollection] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);

  const { create: createCollection } = useCollection();
  const { time, start: startTimer } = useTimer();
  const { submitScore } = useScoreboard();
  const { name } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (name === "") {
      navigate("/");
      return;
    }

    setLoading(true);
    createCollection().then((collection) => {
      setLoading(false);
      startTimer();
      setCollections([collection]);

      // Prepare the next collection
      loadNextCollection();
    });
  }, []);

  useEffect(() => {
    if (time === 0) {
      submitScore(score);
      navigate("/scoreboard");
    }
  }, [time]);

  const handleItemClick = (item: CollectionItemType) => {
    setScore(score + (item.type === "fox" ? 1 : -1));
    setActiveCollection(activeCollection + 1);
    loadNextCollection();
  };

  const loadNextCollection = () => {
    createCollection().then((collection) => {
      setCollections((prev) => [...prev, collection]);
    });
  };

  return (
    <div>
      <div className="flex justify-around mb-5">
        <h2 className="font-light">
          Score: <span data-testid="score">{score}</span>
        </h2>
        <h2 className="font-light">
          Time: <span data-testid="timer">{time}</span>
        </h2>
      </div>
      {loading && (
        <p className="text-center mt-10 mb-5 italic">Initializing game...</p>
      )}
      {collections[activeCollection] !== undefined && (
        <PhotoGrid
          onItemClicked={handleItemClick}
          collection={collections[activeCollection]}
        />
      )}
    </div>
  );
}
