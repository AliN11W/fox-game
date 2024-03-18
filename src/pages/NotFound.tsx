import StyledLink from "@/components/StyledLink";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[24rem]">
      <h1 className="text-3xl font-light text-center">404 - Not Found</h1>
      <div className="flex justify-between mt-10">
        <StyledLink to="/" className="w-[49%]">
          To Welcome Screen
        </StyledLink>
        <StyledLink to="/play" className="w-[49%]">
          PLAY!
        </StyledLink>
      </div>
    </div>
  );
}
