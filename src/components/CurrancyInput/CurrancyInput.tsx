import { ReactNode } from "react";

import "./currancyInput.scss"

interface CurrancyInputProps {
  type: string;
}


export function CurrancyInput({ type }: CurrancyInputProps) {
  return (
    <div className="input-wrapper">
      <span>$</span>
      <input type={type} placeholder="1.000" />
      <div className="input-right-border" />
    </div>
  );
}
