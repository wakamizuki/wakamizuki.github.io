import Image from "next/image";

export default function Header() {
  return (
    <div className="header w-full bg-red-500 h-20 md:pl-8 md:pr-8 p-4 flex items-center bg-linear-to-b from-[#df295c] to-[#fce8e3] fixed shadow-sm">
      <div className="header__container w-full h-full flex justify-between">
        <a className="header__logo flex items-center gap-2" href="/">
          <Image className="w-10 h-10" alt="Japan Countryside Logo" src="/favicon.ico" width={40} height={40} />
          <div className="header__logo-title text-white lg:text-4xl text-2xl font-bold">
            Explore Japan's<br className="md:hidden"></br> Countryside
          </div>
        </a>
        <div className="header__lav flex-1">ナビゲーション実装予定</div>
      </div>
    </div>
  );
}
