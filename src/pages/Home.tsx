import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/about">go to about</Link>
    </>
  );
}
