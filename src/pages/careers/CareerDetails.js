import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function CareersDetails() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Detail for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          animi repellat earum explicabo vitae, saepe hic a odit, quo nisi
          laboriosam perferendis reiciendis dolorum alias quod minima ex,
          doloremque laborum?
        </p>
      </div>
    </div>
  );
}

//loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:3000/careers/" + id);

  return res.json();
};
