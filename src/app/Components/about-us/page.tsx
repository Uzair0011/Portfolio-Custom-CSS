import Image from "next/image";
import Link from "next/link";
import "./style.css";

export default function About() {
  return (
    <div id="About">
      <div className="aboutParent">
        <div className="imageBox">
          <Image
            className="me"
            src="/me.jpg"
            alt="picture"
            width={1000}
            height={1000}
          />
        </div>
        <div className="aboutText">
          <h1>About</h1>
          <p className="textP">
            My name is Uzair Ahmed. I am a versatile full-stack developer, UI/UX
            designer, and graphics designer with a strong commitment to creating
            visually appealing and user-friendly digital experiences. Currently,
            I am further enhancing my skills by enrolling in an advanced IT
            course. With a deep interest in both the technical and creative
            sides of development, I am dedicated to mastering the full spectrum
            of design and development to deliver high-quality, innovative
            solutions.
            <br />
            <br />I aim to master full-stack development and establish a
            thriving freelance career, dedicated to providing my clients with
            top-notch, dependable results.
          </p>
          <Link href="/cv.pdf" target="blank">
            <button className="cvButton">View CV</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
