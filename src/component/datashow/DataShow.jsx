import React, { useState } from "react";
import "./DataShow.css";

const DataShow = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch data from API when button is clicked
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:8080/home");
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <>
    <div className='text'>
    <p>If you want to see the data, click the button.</p>
    </div>
      <div className="table-container">
        <button className="btn" onClick={fetchData}>
          Fetch Data
        </button>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Show table only if data is available */}
        {data.length > 0 && (
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((User) => (
                <tr key={User.id}>
                  <td>{User.id}</td>
                  <td>{User.name}</td>
                  <td>{User.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default DataShow;
