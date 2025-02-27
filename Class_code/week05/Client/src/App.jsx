import { useState } from "react";

const App = () => {
  // Add useStates here
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");

  const handleFileUpload = async () => {
    e.preventDefault();
    const FormData = new FormData();
    try {
      const response = await fetch("http://localhost:8000/upload");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to fetch data
  const handleButton = async () => {
    try {
      const response = await fetch("http://localhost:8000/data");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    const loginForm = {username, password};
    };

    try {
      const response = await fetch("http://localhost:8000/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginForm),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div>
      <button onClick={handleButton}>Click Me pliz</button>
      <p>-----------------------------</p>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );

export default App;
