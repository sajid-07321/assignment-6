import Image from "next/image";
import banner from "@/public/banner.png";

const Banner = () => {
    return (
        <section className="container mx-auto mt-20 pt-6 pb-8 pl-15 bg-[#15171D] rounded-2xl">
            <div className="flex items-center justify-between">

                {/* Left side */}
                <div>
                    <h6 className="text-[#C2F800] text-[15px]">
                        WORKOUT LIBRARY
                    </h6>

                    <h1 className="font-bold text-6xl py-6">
                        TRAIN WITH INTENT. LOG <br />
                        EVERY SET.
                    </h1>

                    <p className="text-[#9CA3AF] py-6">
                        FitLog is a dark, no-nonsense gym companion:
                        pick a lift, lock it <br/> into today&apos;s plan,
                        and watch the week&apos;s work add up.
                    </p>

                    <button className="rounded-[7] bg-[#C2F800] px-5 py-2 mt-8 text-black font-bold">
                        BROWSE WORKOUTS
                    </button>
                </div>

                {/* Right side */}
                <div>
                    <Image
                        src="/banner.png"
                        alt="banner"
                        width={500}
                        height={800}
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;
