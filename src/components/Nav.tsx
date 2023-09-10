import Icon from "./Icon";

const Nav = () => {
  const items = ["Swap", "Futures", "Single Stake", "Guide"];

  return (
    <div className="w-screen flex px-28 py-8 items-center">
      <div className="w-1/3 font-bold text-2xl text-primary flex items-center gap-3">
        <Icon icon={"Drop"} />
        DRPT
      </div>
      <div className="w-1/3 flex justify-center gap-8">
        {items.map((item) => (
          <div className="link" key={item}>
            {item}
          </div>
        ))}
      </div>
      <div className="w-1/3 flex items-center justify-end gap-6">
        <div className="link">Whitepaper</div>
        <button className="button">Connect Wallet</button>
      </div>
    </div>
  );
};

export default Nav;
