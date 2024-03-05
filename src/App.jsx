import React, { useState, useEffect } from "react";
import { generateUniqueEmail } from "./script"; // Importing the generateUniqueEmail function from script.js
// import { Container } from "@mui/material";
// import EmailIcon from "@mui/icons-material/Email";

export default function App() {
  const [prefix, setPrefix] = useState("jack.taylor+"); // State to store the email prefix
  const [email, setEmail] = useState("");

  // Function to handle generating and updating email
  const handleGenerateEmail = () => {
    const generatedEmail = generateUniqueEmail(prefix); // Pass the prefix to the generateUniqueEmail function
    setEmail(generatedEmail);
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
    <div>
      <h1>Generated Email</h1>
      <input
        type="text"
        value={prefix}
        onChange={handlePrefixChange}
        placeholder="Enter email prefix"
      />
      <p>{email}</p>
      <button onClick={handleGenerateEmail}>Generate Email</button>
      <button onClick={handleResetCounter}>Reset Counter</button>{" "}
      {/* Button to reset the counter */}
    </div>
  );
}
// const App = () => {
//   return (
//     <>
//       <CssBaseline />
//       <AppBar position="relative">
//         <Toolbar>
//           <EmailIcon />
//           <Typography variant="h6"> Generated Email:</Typography>
//         </Toolbar>
//       </AppBar>
//       <script src="script.js"></script>
//       <main>
//         <div>
//           <Container>
//             <div id="emailOutput">Generated Email:</div>
//           </Container>
//         </div>
//       </main>
//     </>
//   );
// };

// export default App;
