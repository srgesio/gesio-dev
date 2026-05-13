import React from "react";
import { ChevronRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black p-6 flex justify-between items-center mt-auto border-t border-accent-gray/20">
      <div className="text-white">
        <span className="font-bold text-[32px] md:text-[32px] text-[24px]">Gésio </span>
        <span className="font-extralight text-[32px] md:text-[32px] text-[24px] md:inline block leading-tight">de Moura</span>
      </div>
      
      <div className="bg-accent-gray p-2 px-4 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-[#3d3d3d] transition-all">
        <span className="text-white text-[14px] font-medium">Links</span>
        <ChevronRight size={16} className="text-white" />
      </div>
    </footer>
  );
};
