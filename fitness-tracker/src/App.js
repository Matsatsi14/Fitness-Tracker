import React, { useState } from "react";
import Header from "./components/Header";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";
import "./App.css";

const App = () => {
  const [workouts, setWorkouts] = useState([]);

  const logWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  return (
    <div className="container">
      <Header />
      <WorkoutForm onLogWorkout={logWorkout} />
      <WorkoutList workouts={workouts} />
    </div>
  );
};

export default App;
