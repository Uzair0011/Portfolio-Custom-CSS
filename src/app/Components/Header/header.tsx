import Image from "next/image";
import Link from "next/link";
import "./style.css";

export default function Header() {
  return (
    <div className="navbar">
      <div className="logoCombine">
        <div className="logoMain">
          <Image src={"/uzair.jpg"} alt="Logo" width={50} height={50} />
        </div>
        <div className="logo">
          <Link href={"/"}> Uzair Ahmed</Link>
        </div>
      </div>

      <ul className="navbar-buttons">
        <Link href={"/"}>
          <li className="listAll">Home</li>
        </Link>

        <Link href={"#About"}>
          <li className="listAll">About</li>
        </Link>
        <Link href={"#Contact"}>
          <li className="listAll">Contact</li>
        </Link>
        <Link className="downloadButton" href={"cv.pdf"} target="black">
          <li className="listAll"> DOWNLOAD CV</li>
        </Link>
      </ul>
    </div>
  );
}
