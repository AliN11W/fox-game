import { Link, LinkProps } from "react-router-dom";

export default function StyledLink({
  to,
  children,
  className,
  ...rest
}: LinkProps) {
  return (
    <Link
      to={to}
      className={`border border-[#c59400] p-3 rounded-xl text-center bg-[#ffc000] text-white ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
