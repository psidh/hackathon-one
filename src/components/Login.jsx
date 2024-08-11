"use client";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <div className=" w-[50%]">
        <h1 className="font-semibold py-6 text-3xl">Login to gitam</h1>
        <div className="py-3 flex flex-col space-y-3 justify-start items-end">
          <div className="flex flex-col w-full space-y-3">
            <input
              type="text"
              className="py-3 px-6 rounded-full border border-neutral-500"
              placeholder="USERNAME"
            />
            <input
              type="password"
              className="py-3 px-6 rounded-full border border-neutral-500"
              placeholder="PASSWORD"
            />
          </div>
          <p className="italic text-[#00665B]">Forget password?</p>
        </div>
        <button onClick={handleClick} className="hover:bg-opacity-80 bg-[#00665B] w-[100%] py-3 text-white font-semibold rounded-full mt-4">
          Login
        </button>
      </div>
    </div>
  );
}
