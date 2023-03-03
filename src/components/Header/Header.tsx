import { CurrancyBox } from "../CurrancyBox/CurrancyBox";

import "./header.scss"

export function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-title">
        <h1>Conversor de moedas</h1>
      </div>
      <div className="header-content">
        <CurrancyBox />
      </div>
    </div>
  )
}