"use client";

import React, { useContext } from "react";
import { IWorkOut } from "../types/workout";
import { WorkoutContext } from "../context/WorkoutContext";
import { toast } from "react-toastify";

const WorkActions = ({
  singleWorkout,
}: {
  singleWorkout: IWorkOut;
}) => {
  const { saved, setSaved } = useContext(WorkoutContext) as {
    saved: IWorkOut[];
    setSaved: React.Dispatch<React.SetStateAction<IWorkOut[]>>;
  };

  const handleAddToSave = () => {
    const alreadySaved = saved.some(
      (workout) => workout.id === singleWorkout.id
    );

    if (alreadySaved) {
      toast.info("Already saved");
      return;
    }

    setSaved([...saved, singleWorkout]);

    toast.success("Save For Later");
  };

  return (
    <button
      className="rounded-lg bg-[#C2F800] px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-300"
      onClick={handleAddToSave}
    >
      Save For Later
    </button>
  );
};

export default WorkActions;