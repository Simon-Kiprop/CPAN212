import React, { useEffect, useState } from "react";

const Home = () => {
  const [overview, setOverview] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/getOverview")
      .then((res) => res.json())
      .then((data) => setOverview(data))
      .catch((error) => console.error("Error fetching overview:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Welcome to My Portfolio</h2>
      <p>{overview}</p>
    </div>
  );
};

export default Home;
