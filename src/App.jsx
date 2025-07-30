import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Container, Typography} from '@mui/material';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" align="center">
          <div>Subscribe to Me!</div>
        </Typography>
      </Container>
    </>
  );
}

export default App;
