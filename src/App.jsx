import React, { useState, useEffect } from "react";
import { generateUniqueEmail } from "./script"; // Importing the generateUniqueEmail function from script.js
import {
  Box,
  Typography,
  Stack,
  Button,
  Snackbar,
  CssBaseline,
  AppBar,
  Container,
  TextField,
  Grid,
} from "@mui/material";
import { MuiSnackbar } from "./components/MuiSnackbar";

// import { Container } from "@mui/material";
// import EmailIcon from "@mui/icons-material/Email";

export default function App() {
  const [prefix, setPrefix] = useState("+"); // State to store the email prefix
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
    <>
      <CssBaseline />
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Generate Email:
            </Typography>
            <Typography variant="h5" align="center" color="GrayText" paragraph>
              Enter your email prefix to generate a new variant.
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    label="FirstName.LastName"
                    variant="outlined"
                    type="text"
                    onChange={handlePrefixChange}
                    placeholder="Enter email prefix"
                  />
                  <p>{email}</p>
                  <Stack spacing={1} direction="row">
                  <Grid item>
                    <Button
                      variant="contained"
                      colour="primary"
                      onClick={handleGenerateEmail}
                    >
                      Generate Email
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" onClick={handleResetCounter}>
                      Reset Counter
                    </Button>{" "}
                    {/* Button to reset the counter */}
                  </Grid>
                  </Stack>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}
