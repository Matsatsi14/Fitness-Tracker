import React from "react";

const WorkoutList = ({ workouts }) => {
  return (
    <ul className="list-group">
      {workouts.map((workout, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {workout.exerciseType} ({workout.duration} minutes)
          <span className="badge badge-primary badge-pill">
            {workout.sets} x {workout.reps}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default WorkoutList;
