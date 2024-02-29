import React, { useState } from "react";

const WorkoutForm = ({ onLogWorkout }) => {
  const [workout, setWorkout] = useState({
    exerciseType: "",
    duration: "",
    sets: "",
    reps: "",
  });

  const handleLogWorkout = () => {
    onLogWorkout({ ...workout, date: new Date().toLocaleDateString() });
    setWorkout({
      exerciseType: "",
      duration: "",
      sets: "",
      reps: "",
    });
  };

  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Exercise type"
        value={workout.exerciseType}
        onChange={(e) =>
          setWorkout({ ...workout, exerciseType: e.target.value })
        }
        className="form-control mr-2"
        required
      />{" "}
      <br />
      <input
        type="number"
        placeholder="Duration (minutes)"
        value={workout.duration}
        onChange={(e) => setWorkout({ ...workout, duration: e.target.value })}
        className="form-control mr-2"
        required
      />{" "}
      <br />
      <input
        type="number"
        placeholder="Sets"
        value={workout.sets}
        onChange={(e) => setWorkout({ ...workout, sets: e.target.value })}
        className="form-control mr-2"
        required
      />
      <br />
      <input
        type="number"
        placeholder="Reps per set"
        value={workout.reps}
        onChange={(e) => setWorkout({ ...workout, reps: e.target.value })}
        className="form-control mr-2"
        required
      />
      <br />
      <button onClick={handleLogWorkout} className="btn-btn-primary">
        Log Workout
      </button>
    </div>
  );
};

export default WorkoutForm;
