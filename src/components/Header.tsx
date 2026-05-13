import React from "react";
import { Button } from "./Button";

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-black p-6 flex justify-between items-center z-50">
      <div className="text-white">
        <span className="font-bold text-[32px] md:text-[32px] text-[24px]">Gésio </span>
        <span className="font-extralight text-[32px] md:text-[32px] text-[24px] md:inline block leading-tight">de Moura</span>
      </div>
      <Button variant="primary" className="hidden md:block">
        Ver experiências
      </Button>
      <Button variant="primary" className="md:hidden text-[14px] px-3">
        Ver exp.
      </Button>
    </header>
  );
};
