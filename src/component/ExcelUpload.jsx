// src/ExcelUpload.js
import React, { useState } from 'react';
import axios from 'axios';
import './ExcelUpload.css'; // Ensure you create this file for styles

const ExcelUpload = () => {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const uploadFile = async (e) => {
        e.preventDefault();
        if (!file) {
            alert("Please select a file.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("http://localhost:8080/home/upload", formData);
            setResult("Data inserted successfully: " + response.data);
        } catch (error) {
            setResult("Error occurred while processing file: " + error.response.data);
        }
    };

    return (
        <div className="bg">
            <div className="Excel">
                <h2>Excel File Upload</h2>
                <form onSubmit={uploadFile}>
                    <input type="file" accept=".xlsx,.xls" onChange={handleFileChange} />
                    <button type="submit" className="button">Upload</button>
                </form>
                <div id="result">{result}</div>
            </div>
            <div className="pdfbutton">
                <a href="http://localhost:8080/home/pdf">
                    <button className="button">Download PDF</button>
                </a>
            </div>
        </div>
    );
};

export default ExcelUpload;
