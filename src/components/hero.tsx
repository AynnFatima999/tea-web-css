import React from "react";
import "../style/hero.css";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero">
        {/* image side */}
        <div className="hero-img">
          <Image
            src="/images/banner-img.png"
            alt="logo"
            width={500}
            height={500}
            className="photo"
          />
        </div>

        {/* content side */}
        <div className="content">
          <h1>Chai</h1>
          <h1>Coffee</h1>
          <p className="para1">“Where Every Sip Tells a Story”</p>
          <p className="para2">
            Discover the perfect blend of tradition and innovation with our chai
            and coffee, brewed fresh just for you.
          </p>
          <div className="hero-btns">
          <Link href='#about'> <button id="b1">
          About Us </button> </Link>
            <button id="b2">Call Now</button>
          </div>
        </div>
      </div>

      {/* mobiles*/}
      <div className="hero1">
        {/* content side */}
        <div className="content">
          <h1>Chai</h1>
          <h1>Coffee</h1>
          <p className="para1">“Where Every Sip Tells a Story”</p>
          <p className="para2">
            Discover the perfect blend of tradition and innovation with our chai
            and coffee, brewed fresh just for you.
          </p>
          <div className="hero-btns">
           <Link href='#about'> <button id="b1">
            About Us </button> </Link>
            <button id="b2">Call Now</button>
          </div>
        </div>

        {/* image side */}
        <div className="hero-img">
          <Image
            src="/images/banner-img.png"
            alt="logo"
            width={400}
            height={400}
            className="photo"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
