"use client";

import React, { createContext, ReactNode, useState } from "react";

type Workout = { id: number };

export const WorkoutContext = createContext({});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

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
