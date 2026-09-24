import Banner from "../components/Banner";
import WorkoutCard from "../components/WorkoutCard";
import { IWorkOut } from "../types/workout";


const getWorkOutCard = async() => {
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await response.json();
    return data;
}


const WorkOutPage = async () => {

    const workOutData = await getWorkOutCard();

    return (
        <>
         
        <Banner/>

        <section className="container mx-auto px-0.5 py-12">
        {/* Library heading */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white">
            THE LIBRARY
          </h3>

          <p className="mt-2 text-gray-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Workout Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workOutData.map((workout: IWorkOut) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      </section>
         
        </>
             
    );
};

export default WorkOutPage;