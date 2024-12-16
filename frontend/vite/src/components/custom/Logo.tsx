import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="text-xl inline-block font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500"
    >
      Pictora.ai
    </Link>
  );
};

export default Logo;
