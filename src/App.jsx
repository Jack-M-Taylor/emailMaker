import React, { useState, useEffect } from "react";
import { generateUniqueEmail } from "./script"; // Importing the generateUniqueEmail function from script.js
import {Box, Typography, Stack, Button, Snackbar} from '@mui/material'
import { MuiSnackbar } from './components/MuiSnackbar';

// import { Container } from "@mui/material";
// import EmailIcon from "@mui/icons-material/Email";

export default function App() {
  const [prefix, setPrefix] = useState("jack.taylor+"); // State to store the email prefix
  const [email, setEmail] = useState("");

  // Function to handle generating and updating email
  const handleGenerateEmail = () => {
    const generatedEmail = generateUniqueEmail(prefix); // Pass the prefix to the generateUniqueEmail function
    setEmail(generatedEmail);

    // Copy the generated email to the clipboard
    navigator.clipboard
      .writeText(generatedEmail)
      .then(() => {
        console.log("Email copied to clipboard:", generatedEmail);
      })
      .catch((error) => {
        console.error("Failed to copy email to clipboard:", error);
      });
  };

  // Function to handle prefix change
  const handlePrefixChange = (event) => {
    setPrefix(event.target.value); // Update the prefix state with the value from the input field
  };

  // Function to handle resetting the counter
  const handleResetCounter = () => {
    localStorage.removeItem("emailCounter"); // Remove the counter from local storage
    setEmail(""); // Clear the email
  };

  // Update email whenever the component renders or prefix changes
  useEffect(() => {
    handleGenerateEmail();
  }, [prefix]); // Dependency array includes prefix state

  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <div>
        <Typography variant="h2" gutterBottom>
          Generate Email:
        </Typography>
        <input
          type="text"
          value={prefix}
          onChange={handlePrefixChange}
          placeholder="Enter email prefix"
        />
        <p>{email}</p>
        <Button variant="outlined" onClick={handleGenerateEmail}>
          Generate Email
        </Button>
        <Button variant="outlined" onClick={handleResetCounter}>
          Reset Counter
        </Button>{" "}
        {/* Button to reset the counter */}
      </div>
    </Box>
  );
}

