"use client";

import React, { createContext, ReactNode, useState } from "react";

export const WorkoutContext = createContext({});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  const removeFromPlan = (id: number) => {
    setPlan(plan.filter((workout) => workout.id !== id));
  };

  const removeFromSaved = (id: number) => {
    setSaved(saved.filter((workout) => workout.id !== id));
  };

  const sharedData = {
    plan,
    setPlan,
    saved,
    setSaved,
    removeFromPlan,
    removeFromSaved,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
