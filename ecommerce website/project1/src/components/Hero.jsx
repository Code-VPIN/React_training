import React from 'react'
import "./HeroStyles.css"

const Hero = () => {
  return (
    <main className='hero'>
        <div className="hero-content">
            <h1>You have a great choice</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti sapiente, a repudiandae natus cumque iusto autem reiciendis dolores quasi ab fuga voluptas enim architecto sunt, error beatae placeat. Vero?
            </p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>

            <div className="shopping">
                <p>Also available on </p>
                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon-logo" />
                    <img src="/images/flipkart.png" alt="flipkart-logo" />
                </div>
            </div>
        </div>
        <div className="hero-image">
            <img src="/images/hero-image.png" alt="hero-image" />
        </div>      
    </main>
    
  )
}
export default Hero
