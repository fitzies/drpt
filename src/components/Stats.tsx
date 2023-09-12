const Stats = () => {
  let stats: { num: string; stat: string }[] = [
    { num: "$0", stat: "Treasursy" },
    { num: "21m", stat: "Total tokens circulating" },
    { num: "$0", stat: "Donated to Drip" },
    { num: "0", stat: "Active participants" },
  ];

  return (
    <div className="w-full flex md:flex-row flex-col gap-4 justify-between items-center mb-10">
      {stats.map((i) => {
        return (
          <div className="w-1/4 text-center flex flex-col gap-3" key={i.stat}>
            <h4 className="text-5xl font-bold text-primary">{i.num}</h4>
            <p className="text-xl">{i.stat}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
