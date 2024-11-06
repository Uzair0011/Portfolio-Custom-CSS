import Image from "next/image";
import "./style.css";
export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="BoxesFooterNothing">
        <div className="logoFooter1">
          <Image src="/uzair.jpg" alt="logo" width={70} height={50} />
          <h1 className="footerLogoName">Uzair Ahmed</h1>
        </div>
      </div>
      {/* 01 Box */}
      <div className="BoxesFooter BoxesFooter2">
        <ul className="centerCenter">
          <li className="HeadingFooterLink">
            <b>Website Designing</b>
          </li>
          <div className="footerTextAll">
            <li className="dot">Simple Website</li>
            <li className="dot">E-Commerce Websites</li>
            <li className="dot">Landing Page</li>
            <li className="dot">Maintenance Contract</li>
          </div>
        </ul>
      </div>
      {/* 02 Box */}
      <div className="BoxesFooter BoxesFooter2">
        <ul>
          <li className="HeadingFooterLink">
            <b>Graphics Designing</b>
          </li>
          <div className="footerTextAll">
            <li className="dot">Visiting Card Design</li>
            <li className="dot">Wedding Card Design</li>
            <li className="dot">Social Media Post Design</li>
            <li className="dot">Panaflex Designing</li>
          </div>
        </ul>
      </div>
    </div>
  );
}
