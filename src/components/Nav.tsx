import Link from "next/link";
import Icon from "./Icon";
import WalletConnectButton from "./WalletConnectButton";
import { isConnected } from "@/lib/web3";

const Nav = async () => {
  const items = ["Swap", "Futures", "Single Stake", "Guide"];

  const formatLink = (item: string) => {
    return `/${item.toLowerCase().replace(/\s+/g, "-")}`;
  };

  return (
    <div className="w-screen flex md:px-28 px-10 py-8 items-center">
      <Link
        href={"/"}
        className="w-1/3 font-bold text-2xl text-primary flex items-center gap-3"
      >
        <Icon icon={"Drop"} />
        DRPT
      </Link>
      <div className="w-1/3 md:flex justify-center gap-8 hidden">
        {items.map((item) => (
          <Link href={formatLink(item)} className="link" key={item}>
            {item}
          </Link>
        ))}
      </div>
      <div className="md:w-1/3 w-full flex items-center justify-end gap-6">
        <div className="link md:block hidden">Whitepaper</div>
        <WalletConnectButton />
      </div>
    </div>
  );
};

export default Nav;
