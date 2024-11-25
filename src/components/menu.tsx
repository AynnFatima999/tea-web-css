import React from 'react'
import '../style/menu.css'
import Image from 'next/image';
import Link from 'next/link';



const Menu = () => {
  return (
    <section className="tea-section" id="tea">
      <div className="tea">
      <div className="heading">
          <h1>OUR CAFE MENU..</h1>
        </div>
        <div className="circle">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        {/* Container */}
        <div className="container">

          <div className="flavour">
          
            <Image src='/images/t2.jpg' alt='img' width={200} height={200} className='f-img f2'/>
            <h4>Artisanal Chai Varieties</h4>
           <ul>
           <li>Masala Chai - Rs270 </li>
           
          <li>Ginger Chai - Rs160</li> 
          
          <Link href='#hero'>
            <button id="b4">
            View More</button></Link>
         
           </ul>
          </div>

          <div className="flavour">
            <Image src='/images/cof.webp' alt='img' width={200} height={200} className='f-img'/>
            <h4>Specialty Coffee Brews</h4>
            <ul>
           <li>Espresso - Rs500</li>
           
          <li>Cappuccino - Rs520</li> 
          
          <Link href='#hero'>
            <button id="b4">
            View More</button></Link>
           </ul>
          </div>

          <div className="flavour">
            <Image src='/images/cook.webp' alt='img' width={200} height={200}  className='f-img'/>
            <h4>Delicious Cookies</h4>
            <ul>
           <li>Choco Peanut Butter Cookies - Rs900 </li>
           
          <li>Butter Croissant - Rs460</li> 
          
          <Link href='#hero'>
            <button id="b4">
              View More</button></Link>
         
           </ul>
          </div>

          <div className="flavour">
          <Image src='/images/pastry.webp' alt='img' width={200} height={200} className='f-img'/>
          <h4>Special Combos</h4>
          <ul>
           <li>Chai & Samosa Combo - Rs170 </li>
           
          <li>Coffee & Cookie Combo - Rs360</li> 
          
          <Link href='#hero'>
            <button id="b4">
            View More</button></Link>
           </ul>
          </div>

        </div>
         {/* Container over*/}

        
      </div>


      </section>
  )
}

export default Menu;
