export default function CoursesCard({ name }) {
  return (
    <div className="w-full p-4 rounded-xl border border-neutral-400 flex flex-col justify-between space-y-3 text-center text-white">
      <h1 className="text-black text-2xl">{name}</h1>
      <div className="space-y-4">
        <p className="py-3 px-6 rounded-xl bg-[#00665B]">DSA</p>
        <p className="py-3 px-6 rounded-xl bg-[#00665B]">C</p>
        <p className="py-3 px-6 rounded-xl bg-[#00665B]">OS</p>
        <p className="py-3 px-6 rounded-xl bg-[#00665B]">DBMS</p>
      </div>
    </div>
  );
}
