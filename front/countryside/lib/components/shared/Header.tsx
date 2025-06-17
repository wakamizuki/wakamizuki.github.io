import Image from "next/image";

export default function Header() {
  return (
    <div className="header w-full bg-red-500 h-20 p-4 flex items-center bg-linear-to-b from-[#df295c] to-[#fce8e3]">
      <div className="header__container w-full h-full flex justify-between">
        <a className="header__logo flex items-center gap-2" href="/">
          <Image className="w-10 h-10" alt="Japan Countryside Logo" src="/favicon.ico" width={20} height={20} />
          <div className="header__logo-title text-white text-4xl font-bold">Explore Japan's Countryside</div>
        </a>
        <div className="header__lav flex-1">ここにナビゲーション</div>
      </div>
    </div>
  );
}
