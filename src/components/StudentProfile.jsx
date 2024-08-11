export default function StudentProfile({ name }) {
    return (
      <div className="w-full p-4 flex flex-col items-center justify-center rounded-xl border border-neutral-400 space-y-3 text-center text-white">
        <h1 className="text-black text-2xl">{name}</h1>
        
  
        <img src="/image 1.png" alt="" className="w-1/2 h-1/2 object-cover" />
  
        <p className="py-3 px-6 rounded-xl w-full bg-[#00665B]">View</p>
      </div>
    );
  }
  