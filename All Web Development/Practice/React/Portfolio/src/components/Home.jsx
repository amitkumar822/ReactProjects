import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/AMIT KUMAR.pdf'
import hero from './Data/hero.json'
import Typed from 'typed.js'
import images from '../photos/img.jpg'

function Home() {

  const typedRef = useRef(null)

  useEffect(() => {

    const options = {
      strings: ["Welcome to my profile", "My Name is Amit Kumar", "I'm full stack developer", "Android Developer (React Native)"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    }
    const typed = new Typed(typedRef.current , options)
    
    return () => {
      typed.destroy()
    };
  }, []);

  //working 1h: 26m

  return (
    <>
      <div className="container home" id="home">
        <div className="left"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <h1 ref={typedRef}> </h1>

          <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
        </div>

        <div className="right">
          <div className="img"
          data-aos="fade-up-left"
          data-aos-duration="1000"
          >
            {/* <img src={images} alt="hero" /> */}
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home