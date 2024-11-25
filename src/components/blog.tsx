import React from 'react'
import '../style/blog.css'
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  return (
    <section className='blog-section' id='blog'>
        <div className="blog">
        <div className="heading3">
          <h1>OUR BLOG</h1>
        </div>
        <div className="circle">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        {/* CONTENT SECTION */}
        <div className="blog-wrap">
         
          <div className="b-img1"> 
            <div className="date">05 Mar</div>
          <Image src='/images/blogg.png'
           alt='img' 
           width={200}
           height={200}
           className='blog-img'/>

          <div className="para1">
            <h4>The Perfect Blend: Chai & Coffee Culture at Our Café</h4>
            <p>Welcome to the blog corner of our café—where we share stories, tips, and the love of all things chai and coffee! Whether you're a chai aficionado, a coffee connoisseur, or someone who enjoys a bit of both, there's always something brewing here just for you.</p>
          </div>
          <Link href='#hero'>
            <button id="b5">
              Read More</button></Link>

          </div>

     
          <div className="b-img2">
          <div className="date">05 Aug</div>
          <Image src='/images/girl.png'
           alt='img' 
           width={200}
           height={200}
           className='blog-img'/>
          <div className="para2">
            <h4>Fusion Delights: Where East Meets West</h4>
            <p>Why choose between chai and coffee when you can have both? Our unique Chai-Latte Fusion combines the richness of coffee with the aromatic spices of chai, creating a beverage that's as adventurous as it is delicious.</p>
          </div>
          <Link href='#hero'>
            <button id="b5">
              Read More</button></Link>
          </div>



        </div>
 {/* CONTENT SECTION end*/}


        </div>
        </section>
  )
}

export default Blog;
