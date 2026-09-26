"use client";
import React, { useContext, useState } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
import Image from "next/image";
import Link from "next/link";

const MyPlan = () => {
  const { plan, saved, removeFromPlan, removeFromSaved } = useContext(
    WorkoutContext,
  ) as {
    plan: Array<{
      id: string | number;
      duration: number;
      caloriesBurned: number;
      rating: number;
      image: string;
      name: string;
      muscleGroups: string[];
    }>;
    saved: Array<{
      id: string | number;
      duration: number;
      caloriesBurned: number;
      rating: number;
      image: string;
      name: string;
      muscleGroups: string[];
    }>;
    removeFromPlan: (id: string | number) => void;
    removeFromSaved: (id: string | number) => void;
  };

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const currentWorkouts = [...(activeTab === "plan" ? plan : saved)].sort(
    (a, b) => {
      if (sortBy === "duration") {
        return b.duration - a.duration;
      }

      if (sortBy === "calories") {
        return b.caloriesBurned - a.caloriesBurned;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    },
  );

  console.log(plan, saved, "plan", "saved");

  return (
    <main className="min-h-screen bg-[#0d0f12] px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div>
          <h3 className="text-2xl font-bold">MY PLAN</h3>

          <p className="mt-2 text-sm text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-1 gap-4 rounded-xl border border-gray-800 bg-[#15181e] p-5 sm:grid-cols-3">
          {/* Exercises */}
          <div className="border-b border-gray-800 sm:border-b-0 sm:border-r sm:pr-5">
            <p className="text-xs text-gray-500">Exercises</p>

            <p className="mt-2 text-2xl font-bold text-[#C2F800]">
              {currentWorkouts.length}
            </p>
          </div>

          {/* Minutes */}
          <div className="border-b border-gray-800 sm:border-b-0 sm:border-r sm:px-5">
            <p className="text-xs text-gray-500">Minutes</p>

            <p className="mt-2 text-2xl font-bold">
              {currentWorkouts.reduce(
                (total: number, workout: (typeof currentWorkouts)[number]) =>
                  total + workout.duration,
                0,
              )}
            </p>
          </div>

          {/* Calories */}
          <div className="sm:pl-5">
            <p className="text-xs text-gray-500">Calories</p>

            <p className="mt-2 text-2xl font-bold">
              {currentWorkouts.reduce(
                (total: number, workout: (typeof currentWorkouts)[number]) =>
                  total + workout.caloriesBurned,
                0,
              )}
            </p>
          </div>
        </div>

        {/* Tabs + Sort */}
        <section className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Tabs */}
          <div className="flex w-fit rounded-lg border border-gray-800 bg-[#15181e] p-1">
            <button
              onClick={() => setActiveTab("plan")}
              className={`rounded-md px-4 py-2 text-xs font-medium ${
                activeTab === "plan"
                  ? "bg-[#22262d] text-white"
                  : "text-gray-500"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-4 py-2 text-xs font-medium ${
                activeTab === "saved"
                  ? "bg-[#22262d] text-white"
                  : "text-gray-500"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort */}
          <div className="relative">
            <span className="absolute -top-2 left-3 z-10 bg-[#0B0D10] px-1.5 text-[10px] font-medium uppercase tracking-wider text-lime-400">
              Sort
            </span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "duration" | "calories" | "rating")
              }
              className="cursor-pointer appearance-none rounded-xl border border-gray-800 bg-[#111418] px-4 py-3 pr-11 text-sm font-medium text-gray-300 shadow-sm transition-all hover:border-gray-700 hover:bg-[#15191e] focus:border-lime-500 focus:ring-1 focus:ring-lime-500/30 focus:outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-lime-400">
              ▼
            </span>
          </div>
        </section>

        {/* Workout List */}
        <section className="mt-4 space-y-3">
          {currentWorkouts.length === 0 ? (
            <div className="rounded-xl border border-gray-800 bg-[#15181e] p-10 text-center">
              <p className="text-sm text-gray-500">
                {activeTab === "plan"
                  ? "No workouts added to today's plan yet."
                  : "No saved workouts yet."}
              </p>
            </div>
          ) : (
            currentWorkouts.map((workout: (typeof currentWorkouts)[number]) => (
              <div
                key={workout.id}
                className="flex items-center gap-4 rounded-xl border border-gray-800 bg-[#15181e] p-3"
              >
                {/* Image */}
                <div className="shrink-0 overflow-hidden rounded-lg bg-gray-800">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    height={40}
                    width={40}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">{workout.name}</h4>

                  <p className="mt-1 text-xs text-gray-500">
                    {workout.muscleGroups.join(" • ")} • {workout.duration} min
                    • {workout.caloriesBurned} kcal • ⭐ {workout.rating}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Link href={`/workouts/${workout.id}`}>
                    <button className="hidden rounded-full border border-gray-700 px-4 py-2 text-xs text-gray-300 hover:border-gray-500 sm:block">
                      View Details
                    </button>
                  </Link>

                  {activeTab === "plan" && (
                    <button className="rounded-full bg-[#C2F800] px-4 py-2 text-xs font-semibold text-black hover:bg-lime-300">
                      Mark as Done
                    </button>
                  )}

                  <button
                    onClick={() =>
                      activeTab === "plan"
                        ? removeFromPlan(workout.id)
                        : removeFromSaved(workout.id)
                    }
                    className="text-gray-600 hover:text-white"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </main>
  );
};

export default MyPlan;
