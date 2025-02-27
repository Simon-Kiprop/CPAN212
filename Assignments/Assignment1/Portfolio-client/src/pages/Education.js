import React, { useEffect, useState } from "react";

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getEdu")
      .then((res) => res.json())
      .then((data) => setEducation(data))
      .catch((error) => console.error("Error fetching education:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
