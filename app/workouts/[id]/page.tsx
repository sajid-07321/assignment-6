import WorkActions from "@/app/components/WorkActions";
import WorkoutActions from "@/app/components/WorkoutActions";
import { IWorkOut } from "@/app/types/workout";
import Image from "next/image";


interface WorkoutDetailsPageProps {
  params: Promise<{ id: string }>;
}

const getWorkOutCard = async () => {
  const response = await fetch(
    "https://api.api-store.workers.dev/api/fitlog"
  );

  const data = await response.json();

  return data;
};

const WorkoutDetailsPage = async ({
  params,
}: WorkoutDetailsPageProps) => {
  const { id } = await params;

  const workout = await getWorkOutCard();

  const singleWorkout = workout.find(
    (workout: IWorkOut) => workout.id === Number(id)
  );

  console.log(singleWorkout);

  return (
    <main className="min-h-screen bg-[#0d0f12] px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Image */}
          <div className="relative h-[800px] overflow-hidden rounded-2xl border border-gray-800">
            <Image
              src={singleWorkout.image}
              alt={singleWorkout.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div>

            {/* Title */}
            <h1 className="text-4xl font-bold uppercase text-white">
              {singleWorkout.name}
            </h1>

            {/* Description */}
            <p className="mt-4 text-sm leading-6 text-gray-400">
              {singleWorkout.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-5 flex flex-wrap gap-2">
              {singleWorkout.muscleGroups.map(
                (muscle: string) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-semibold text-black"
                  >
                    {muscle}
                  </span>
                )
              )}
            </div>

            {/* Info */}
            <div className="mt-5 overflow-hidden rounded-xl border border-gray-800 bg-[#15181e]">

              {/* Equipment */}
              <div className="flex justify-between border-b border-gray-800 px-4 py-4">
                <span className="text-xs uppercase text-gray-500">
                  Equipment
                </span>

                <span className="text-sm text-white">
                  {singleWorkout.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex justify-between border-b border-gray-800 px-4 py-4">
                <span className="text-xs uppercase text-gray-500">
                  Difficulty
                </span>

                <span className="text-sm text-white">
                  {singleWorkout.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="flex justify-between border-b border-gray-800 px-4 py-4">
                <span className="text-xs uppercase text-gray-500">
                  Sets
                </span>

                <span className="text-sm text-white">
                  {singleWorkout.sets}
                </span>
              </div>

              {/* Reps */}
              <div className="flex justify-between border-b border-gray-800 px-4 py-4">
                <span className="text-xs uppercase text-gray-500">
                  Reps
                </span>

                <span className="text-sm text-white">
                  {singleWorkout.reps}
                </span>
              </div>

              {/* Duration */}
              <div className="flex justify-between border-b border-gray-800 px-4 py-4">
                <span className="text-xs uppercase text-gray-500">
                  Duration
                </span>

                <span className="text-sm text-white">
                  {singleWorkout.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="flex justify-between border-b border-gray-800 px-4 py-4">
                <span className="text-xs uppercase text-gray-500">
                  Calories
                </span>

                <span className="text-sm text-white">
                  {singleWorkout.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex justify-between px-4 py-4">
                <span className="text-xs uppercase text-gray-500">
                  Rating
                </span>

                <span className="text-sm text-white">
                  ⭐ {singleWorkout.rating}
                </span>
              </div>

            </div>

            {/* Instructions */}
            <div className="mt-6">

              <h2 className="text-sm font-bold uppercase text-white">
                Instructions
              </h2>

              <ol className="mt-4 space-y-3">
                {singleWorkout.instructions.map(
                  (instruction: string, index: number) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm leading-6 text-gray-400"
                    >
                      <span className="text-gray-500">
                        {index + 1}.
                      </span>

                      <span>{instruction}</span>
                    </li>
                  )
                )}
              </ol>

            </div>

            {/* Buttons */}
            <div className="mt-7 flex gap-3">

              <WorkoutActions singleWorkout={singleWorkout} />

              <WorkActions singleWorkout={singleWorkout}/>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;