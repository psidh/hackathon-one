import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-[#00665B] py-6 px-6 flex items-center justify-between text-[#F1DEBD]">
      <a href="/">
        <Image
          src="/gitam-logo.svg"
          width={200}
          height={100}
          className="object-cover w-8 h-8"
          alt="alter image"
        />
      </a>
      <div className="flex items-center space-x-5 justify-center">
        <h1 className="text-xl sm:text-4xl font-semibold">GITAM</h1>
        <div className="hidden sm:flex h-[50px] border border-[#F1DEBD]"></div>
        <h2 className="sm:flex hidden">Deemed University | Since 1984</h2>
      </div>
      <div></div>
    </div>
  );
}
