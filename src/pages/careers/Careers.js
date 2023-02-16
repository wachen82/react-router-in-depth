import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Base in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

// data loader

export const careersLoader = async () => {
  const res = await fetch("http://localhost:3000/careers");

  return res.json();
};
