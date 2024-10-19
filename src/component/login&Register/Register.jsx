import React, { useState } from "react";
import "./Form.css"; // Ensure to import your CSS
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // State to hold success/error messages

  async function handleSubmit(event) {
    event.preventDefault();
    const userData = { username, email, password };

    try {
      const response = await fetch("http://localhost:8080/home/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const text = await response.text(); // Get the response as text
      console.log("Response text:", text); // Log the response text

      if (response.headers.get("content-type")?.includes("application/json")) {
        const data = JSON.parse(text); // Parse the text as JSON
        if (response.ok) {
          console.log("Registration successful:", data);
          alert(text);
        } else {
          console.error("Registration failed:", data.error);
          alert(text);
        }
      } else {
        console.error("Received non-JSON response:", text);
        alert(text);
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  }

  return (
    <div className="containerlogin">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn2">
          Register
        </button>
      </form>
      {message && <p className="message">{message}</p>} {/* Display message */}
    </div>
  );
};

export default Register;
