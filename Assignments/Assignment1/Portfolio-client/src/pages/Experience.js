import React, { useEffect, useState } from "react";

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getExp")
      .then((res) => res.json())
      .then((data) => setExperience(data))
      .catch((error) => console.error("Error fetching experience:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Professional Experience</h2>
      <ul>
        {experience.map((exp, index) => (
          <li key={index}>
            <strong>{exp.role}</strong> at {exp.company} ({exp.year})
            <p>{exp.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
