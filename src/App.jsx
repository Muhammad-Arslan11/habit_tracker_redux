import { useState } from "react";
import "./App.css";
import {Container, Typography} from '@mui/material';
import HabitList from "./components/HabitList";
import HabitStats from "./components/HabitStats";
import HabitForm from "./components/HabitForm.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" align="center">
          <div> Habit Tracker</div>
          <HabitForm/>
          <HabitList/>
          <HabitStats/>
        </Typography>
      </Container>
    </>
  );
}

export default App;
