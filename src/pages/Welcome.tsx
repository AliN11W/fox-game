import NameForm from "@/components/NameForm";
import useUser from "@/hooks/useUser";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function WelcomeScreen() {
  const navigate = useNavigate();
  const { name } = useUser();

  return (
    <div className="mx-auto max-w-[24rem]">
      <NameForm />
      <Button
        size="sm"
        className="w-full mt-5 rounded-lg"
        color="green"
        onClick={() => navigate("/play")}
        disabled={name === ""}
        variant="gradient"
        data-testid="play-button"
      >
        PLAY!
      </Button>
    </div>
  );
}
