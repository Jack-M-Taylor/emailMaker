import React, { useState, useEffect } from "react";
import { generateUniqueEmail } from "./script"; // Importing the generateUniqueEmail function from script.js
import {
  Container,
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

export default function App() {
  const [email, setEmail] = useState("");

  // Function to handle generating and updating email
  const handleGenerateEmail = () => {
    const generatedEmail = generateUniqueEmail();
    setEmail(generatedEmail);
  };

  const handleResetCounter = () => {
    localStorage.removeItem("emailCounter");
    handleGenerateEmail();
  };

  useEffect(() => {
    handleGenerateEmail(); // Initial email generation
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div>
      <h1>Generated Email</h1>
      <p>{email}</p>
      <button onClick={handleGenerateEmail}>Generate Email</button>
      <button onClick={handleResetCounter}>Reset Counter</button>
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
