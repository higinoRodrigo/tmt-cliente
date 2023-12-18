import { MdMiscellaneousServices } from "react-icons/md";
import { TbChartInfographic } from "react-icons/tb";
import { LuCalculator } from "react-icons/lu";
import Link from "next/link";

export default function Home() {

  return (
    <div className="flex lg:gap-20 gap-2 flex-wrap items-center justify-center -mb-4">
      <div className="flex flex-col items-start">
        <div className="bg-[#ffffff] py-16 px-32 rounded-lg min-w-[200px] flex md:flex-row flex-col gap-10">
          <Link href='/servicos'>
            <div className="
              flex flex-col items-center justify-center gap-2
              w-36 h-36
              text-lg border p-4 px-3 rounded-lg
              shadow-lg bg-[#145e45] text-[#f8f8f8]
              transform transition duration-200
              cursor-pointer bg-[url('/bgGreen.png')] bg-cover
              hover:opacity-90
            ">
              <span>Meus Serviços</span>
              <MdMiscellaneousServices size={30} />
            </div>
          </Link>
    
          <Link href='/should-cost'>
            <div className="
              flex flex-col items-center justify-center gap-2
              w-36 h-36
              text-lg border p-4 rounded-lg
              shadow-lg bg-[#145e45] text-[#f8f8f8]
              cursor-pointer hover:opacity-90
              transform transition duration-200
            ">
              <span>Should Cost</span>
              <LuCalculator size={30} />
            </div>
          </Link>

          <Link href='/bi'>
            <div className="
              flex flex-col items-center justify-center gap-2
              w-36 h-36
              text-lg border p-4 rounded-lg
              shadow-lg bg-[#145e45] text-[#f8f8f8]
              bg-[url('/bgGreen2.png')] bg-cover
              cursor-pointer hover:opacity-90
              transform transition duration-200
            ">
              <span>BI</span>
              <TbChartInfographic size={30} />
            </div>
          </Link>
        </div>

        {/* <div className="h-10 min-w-[200px] px-3 w-full">
          <div className="h-2 bg-[#f4f6f8] rounded-b-xl shadow-md" />
        </div> */}
      </div>
    </div>
  )
}
