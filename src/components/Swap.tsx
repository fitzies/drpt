const Panel = () => {
  return (
    <div className="w-full bg-darkgray px-4 py-4 rounded-xl">
      <input
        className="px-4 py-4 bg-transparent outline-none text-2xl w-full"
        placeholder="0.0"
      />
    </div>
  );
};

const Swap = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-2 items-center my-4">
        <Panel />
        <Panel />
      </div>
      <button className="button button-xl">Swap</button>
    </>
  );
};

export default Swap;
