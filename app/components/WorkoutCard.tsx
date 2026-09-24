import Image from "next/image";
import type {IWorkOut} from "../types/workout"

type WorkoutCardProps = {
    workout: IWorkOut;
};

const WorkoutCard = ({workout}: WorkoutCardProps) => {
    return (
        <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#111111]">

            {/* Image */}
            <div className="relative h-56 w-full">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-5">

                <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-lime-950 px-3 py-1 text-xs text-lime-400">
                        {workout.difficulty}
                    </span>

                    <span className="text-sm text-gray-400">
                        ⭐ {workout.rating}
                    </span>
                </div>

                <h2 className="mb-2 text-xl font-semibold text-white">
                    {workout.name}
                </h2>

                <p className="mb-4 text-sm text-gray-400">
                    {workout.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{workout.duration} min</span>
                    <span>{workout.caloriesBurned} kcal</span>
                </div>

            </div>
        </div>
    );
};

export default WorkoutCard;