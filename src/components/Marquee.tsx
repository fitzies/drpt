const Marquee = () => {
  return (
    <div className="w-screen flex gap-6 justify-center overflow-x-scroll my-8 py-4">
      {Array(8)
        .fill(0)
        .map((_, i) => {
          return (
            <div
              key={i}
              className="md:w-1/5 w-3/5 aspect-video border border-gray flex-shrink-0 rounded-lg bounce flex flex-col px-6 py-4 gap-1"
            >
              <h3 className="text-lg">Lorem ipsum dolor sit.</h3>
              <p className="text-gray">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                dicta impedit omnis?
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Marquee;
