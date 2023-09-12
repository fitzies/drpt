import Swap from "@/components/Swap";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="w-[28.5%] mx-auto py-12 flex flex-col gap-3">
      <h1 className="font-bold text-5xl">Trade</h1>
      <p className="text-gray">1 USDT = 1 DRPT</p>
      <Swap />
    </div>
  );
};

export default Page;
