import { useEffect, useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import useUser from "@/hooks/useUser";

export default function NameForm() {
  const [editMode, setEditMode] = useState(false);
  const { name: savedName, saveName } = useUser();
  const [name, setName] = useState(savedName);

  useEffect(() => {
    setEditMode(savedName === "");
  }, [savedName]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) return;

    saveName(name);
    setEditMode(false);
  };

  return (
    <>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <div className="relative flex w-full mx-auto">
            <Input
              id="name"
              defaultValue={name}
              label="Name"
              className="pr-20 rounded-lg"
              onChange={(e) => setName(e.target.value)}
              data-testid="name-input"
            />
            <Button
              size="sm"
              className="!absolute right-1 top-1 rounded-lg"
              type="submit"
              variant="gradient"
              disabled={name === ""}
              data-testid="save-name-button"
            >
              Save
            </Button>
          </div>
        </form>
      ) : (
        <p
          className="text-center border rounded-lg py-2 border-gray-400 cursor-pointer"
          onClick={() => setEditMode(true)}
          data-testid="name-display"
        >
          Hello {savedName}
        </p>
      )}
    </>
  );
}
