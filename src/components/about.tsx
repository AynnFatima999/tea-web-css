import React from "react";
import "../style/about.css";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about">
        <div className="heading">
          <h1>ABOUT OUR SHOP..</h1>
        </div>
        <div className="circle">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

        {/* heading part over */}
        <div className="wraper">
          {/* content side */}
          <div className="text">
            <h2>Cafe110</h2>
            <p>
              Welcome to Chai Coffee, your ultimate destination for a perfect
              blend of tradition and modernity. At our cafe, we bring you the
              best of two worlds: the comforting warmth of chai and the
              invigorating buzz of coffee. Whether you're here for a cozy
              catch-up, a productive work session, or simply to unwind, our
              spacious and beautifully designed cafe offers the ideal ambiance.
              Indulge in our carefully curated menu featuring artisanal chai
              blends, freshly brewed coffee, and a selection of delicious
              snacks. We ensure every visit feels like a delightful retreat.
            </p>

            <Link href='#hero'>
            <button id="b3">
              Read More</button></Link>
          </div>

          {/* image side */}
          <div className="about-img">
            <Image
              src="/images/cafe.jpg"
              alt="logo"
              width={400}
              height={400}
              className="about-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
