"use client";

import React, { useContext } from "react";
import { IWorkOut } from "../types/workout";
import { WorkoutContext } from "../context/WorkoutContext";
import { toast } from "react-toastify";

const WorkoutActions = ({
  singleWorkout,
}: {
  singleWorkout: IWorkOut;
}) => {
  const { plan, setPlan } = useContext(WorkoutContext) as {
    plan: IWorkOut[];
    setPlan: React.Dispatch<React.SetStateAction<IWorkOut[]>>;
  };

  const handleAddToPlan = () => {
    const alreadyAdded = plan.some(
      (workout) => workout.id === singleWorkout.id
    );

    if (alreadyAdded) {
      toast.info("Already added to your plan");
      return;
    }

    setPlan([...plan, singleWorkout]);

    toast.success("Add To My Plan");
  };

  return (
    <button
      className="rounded-lg bg-[#C2F800] px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-300"
      onClick={handleAddToPlan}
    >
      Add to today&apos;s plan
    </button>
  );
};

export default WorkoutActions;