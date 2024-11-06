"use client";
import Image from "next/image";
import "./style.css";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <span className="big-text">
          {" "}
          <Typewriter
            options={{
              strings: ["Web Developer", "UI/UX Designer", "Website Designer","Graphics Designer"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>

        {/* <span className="big-text">Web</span> */}
        {/* <br /> */}
        {/* <span className="small-text">of the</span> */}
        {/* <span className="big-text">Developer</span> */}
      </div>

      <div className="imageSize1">
        <img src="/bg06.jpg" alt="image" />
      </div>
    </div>
  );
}
