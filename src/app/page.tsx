import Graph from "@/components/Graph";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <div className="w-screen md:px-72 px-12 py-16 flex flex-col gap-6 ">
        <h1 className="md:text-8xl text-6xl">
          Liquid Rewards,
          <br /> Solid Gains
        </h1>
        <p className="md:text-xl text-md text-gray">
          DRPT operates on a permissionless model, fostering economic inclusion
          and enabling wealth accumulation through passive{" "}
          <span className="italic">cash flow</span>. Experience parabolic
          returns while contributing to the success of the Drip ecosystem.
        </p>
        <div className="w-full flex gap-4 my-4">
          <button className="button-xl button">Get Started</button>
          <button className="button-xl button">How does it work?</button>
        </div>
        <div className="w-full h-[1.25px] bg-gray my-16 rounded-full"></div>

        <div className="w-full flex md:flex-row flex-col justify-between md:gap-2 gap-8">
          {Array(4)
            .fill(0)
            .map((_, i) => {
              const titles = [
                "Mathmatically proven",
                "Lifetime rewards",
                "100% open sourced",
                "Battle-tested",
              ];
              const texts = [
                "Proven to have a nearly perfect model",
                "Yield rewards till the day you die",
                "Completely open for the community",
                "Thoroughly tested in real-world scenarios",
              ];
              return (
                <div
                  className="md:w-1/4 w-full text-center flex flex-col gap-2 md:px-3"
                  key={i}
                >
                  <h2 className="md:text-xl text-md">{titles[i]}</h2>
                  <p className="text-gray">{texts[i]}</p>
                </div>
              );
            })}
        </div>
      </div>
      <Marquee />
      <div className="w-screen md:px-72 py-16 flex flex-col gap-6 items-center">
        {/* <h2 className="text-6xl">Current Statistics</h2> */}
        <Stats />
        <Graph />
      </div>
    </>
  );
};

export default Page;
