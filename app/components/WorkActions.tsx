"use client"
import React, { useContext } from 'react';
import { IWorkOut } from '../types/workout';
import { WorkoutContext } from '../context/WorkoutContext';
import { toast } from 'react-toastify';

const WorkActions = ({singleWorkout}: {singleWorkout: IWorkOut}) => {

    const { saved, setSaved } = useContext(WorkoutContext)


    const handleAddToSave = () => {
        console.log("add to save", singleWorkout);

        setSaved([...saved, singleWorkout]);
        toast.success("Save For Later")
        
    };
    return (
       <button className="rounded-lg bg-[#C2F800] px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-300"
       
       onClick={()=> handleAddToSave()}>
                Save For Later
              </button>
    );
};

export default WorkActions;