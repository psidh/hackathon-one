import { FaLocationArrow } from "react-icons/fa6";

export default function InternshipCard() {
  return (
    <div className="w-full p-4 rounded-xl border border-neutral-400 flex flex-col justify-between space-y-3 text-center text-white">
      <h1 className="text-black text-2xl">Internships</h1>
      <div className="space-y-4">
        <div className="flex  items-center px-6 justify-between bg-[#00665B] rounded-xl">
          <p className="py-3 px-6">Google SWE</p>
          <FaLocationArrow />
        </div>
        <div className="flex  items-center px-6 justify-between bg-[#00665B] rounded-xl">
          <p className="py-3 px-6">Micrsoft SWE</p>
          <FaLocationArrow />
        </div>
        <div className="flex  items-center px-6 justify-between bg-[#00665B] rounded-xl">
          <p className="py-3 px-6">Adobe SWE</p>
          <FaLocationArrow />
        </div>
        <div className="flex  items-center px-6 justify-between bg-[#00665B] rounded-xl">
          <p className="py-3 px-6">Apple SWE</p>
          <FaLocationArrow />
        </div>
      </div>
    </div>
  );
}
