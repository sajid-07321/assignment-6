import Image from "next/image";
import type {IWorkOut} from "../types/workout"
import Link from "next/link";

type WorkoutCardProps = {
    workout: IWorkOut;
};

const WorkoutCard = ({workout}: WorkoutCardProps) => {
    return (
       <div className="group overflow-hidden rounded-3xl border border-gray-800 bg-[#111111] transition-all duration-300 hover:-translate-y-2 hover:border-lime-500 hover:shadow-[0_0_30px_rgba(194,248,0,0.15)]">

            {/* Image */}
            <div className="relative h-60 overflow-hidden">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Difficulty Badge */}
                <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-lime-950 px-3 py-1 text-xs font-medium text-lime-400">
                        {workout.difficulty}
                    </span>
                </div>

                {/* Rating */}
                <div className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-sm text-white">
                    ⭐ {workout.rating}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Title */}
                <h2 className="mb-2 text-xl font-bold text-white">
                    {workout.name}
                </h2>

                {/* Description */}
                <p className="mb-4 line-clamp-2 text-sm text-gray-400">
                    {workout.description}
                </p>

                {/* Muscle Groups */}
                <div className="mb-4 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-300"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Info */}
                <div className="mb-4 grid grid-cols-2 gap-3 text-sm text-gray-400">

                    <div>
                        ⏱ {workout.duration} min
                    </div>

                    <div>
                        🔥 {workout.caloriesBurned} kcal
                    </div>

                    <div>
                        💪 {workout.sets} sets
                    </div>

                    <div>
                        🔁 {workout.reps} reps
                    </div>

                </div>

                {/* Equipment */}
                <div className="mb-5 text-sm text-gray-400">
                    <span className="text-white">Equipment:</span>{" "}
                    {workout.equipment}
                </div>

                {/* Button */}
                <Link
                    href={`/workouts/${workout.id}`}
                    className="block w-full rounded-full bg-[#C2F800] py-3 text-center font-semibold text-black transition hover:bg-lime-300"
                >
                    View Details
                </Link>

            </div>
        </div>
    );
};

export default WorkoutCard;