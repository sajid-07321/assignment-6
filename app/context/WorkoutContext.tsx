"use client"

import React, { createContext, ReactNode, useState } from 'react';


export const WorkoutContext = createContext({})


const WorkoutProvider = ({children}: {children:ReactNode} ) => {

    const [plan, setPlan] = useState([]);
    const [saved, setSaved] = useState([]);

    const sharedData = {
        plan,
        setPlan,
        saved,
        setSaved
    };

    return <WorkoutContext.Provider value={sharedData}>
      {children}  
    </WorkoutContext.Provider>
};


export default WorkoutProvider;