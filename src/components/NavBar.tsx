'use client';

import { FaRegImage } from 'react-icons/fa6';
 function LogoIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#B68641"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7"
    >
      {/* Bubble shape */}
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
      {/* Gift box */}
      <rect x="9" y="8" width="6" height="4" rx="1" />
      <line x1="12" y1="8" x2="12" y2="12" />
      {/* Gift ribbons */}
      <path d="M9 8a1.5 1.5 0 1 1 1.5-1.5L12 8l1.5-1.5A1.5 1.5 0 1 1 15 8" />
    </svg>
  );
}


export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white w-full">
      <div className="max-w-6xl mx-auto w-full px-4 py-4 flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-x-96">
        
        {/* Logo centré */}
        <div className="flex items-center gap-3 text-[#5F4B32]">
          <LogoIconSvg />
          <div className="leading-tight">
            <p className="text-xl font-bold">Votre logo</p>
            <p className="text-xs text-[#B68641]">Bon cadeau</p>
          </div>
        </div>

        {/* Champ de recherche centré */}
        <form className="w-full sm:w-auto flex items-center border border-[#B68641] rounded-full overflow-hidden px-2 py-1">
          <input
            type="text"
            placeholder="Entrez votre N° de bon cadeau"
            className="w-full sm:w-[260px] px-4 py-2 text-sm text-[#5F4B32] placeholder:text-[#5F4B32] bg-transparent outline-none"
          />
          <button
            type="submit"
            className="bg-[#B68641] hover:bg-[#a67635] text-white text-sm font-medium px-6 py-2 rounded-full transition-all duration-200"
          >
            Voir
          </button>
        </form>
      </div>
    </header>
  );
}
