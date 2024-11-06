import Image from "next/image";
import Link from "next/link";
import "./style.css";
export default function FooterEnd() {
  return (
    <div className="lastFooter">
      {/* only white line */}
      <div className="line"></div>
      {/* 2 div */}
      <section className="line1">
        <div className="textCopyReseved">
          &copy; Copyright 2023 Uzair Ahmed. All Rights Reserved.
        </div>
        <div className="logoFooterAll1">
          <Link href="https://www.linkedin.com/in/uzair0011/" target="black">
            <Image src="/i2.png" alt="image" width={50} height={50} />
          </Link>
          <Link href="" target="black">
            <Image src="/i1.png" alt="image" width={50} height={50} />
          </Link>
        </div>
      </section>
    </div>
  );
}
